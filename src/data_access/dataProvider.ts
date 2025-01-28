import { CreateParams, DataProvider, fetchUtils, UpdateParams } from "react-admin";

const API_URL = import.meta.env.VITE_API_URL;

type ResumeParams = {
  id: string;
  title: string;
  remark: string;
  resume: {
    rawFile: File;
    src?: string;
    title?: string;
  };
};

const resumeFormData = (params: CreateParams<ResumeParams> | UpdateParams<ResumeParams>) => {
  const formData = new FormData();
  params.data.resume?.rawFile &&
    formData.append("file", params.data.resume.rawFile);
  params.data.title && formData.append("title", params.data.title);
  params.data.remark && formData.append("remark", params.data.remark);

  return formData;
};


export const dataProvider: DataProvider = {
  getList: async (resource, params) => {
    const { page, perPage } =
      params.pagination !== undefined
        ? params.pagination
        : { page: 1, perPage: 10 };
    const { field, order } =
      params.sort !== undefined ? params.sort : { field: "id", order: "ASC" };
    const filter = JSON.stringify(params.filter);

    const response = await fetchUtils.fetchJson(
      `${API_URL}/${resource}?page=${page}&limit=${perPage}&sort=["${field}","${order}"]&filter=${filter}`,
    );
    return {
      data: response.json.data,
      total: parseInt(response.headers.get("X-Total-Rows") || "10", 10),
    };
  },
  getOne: async (resource, params) => {
    const id = params.id;
    const response = await fetchUtils.fetchJson(`${API_URL}/${resource}/${id}`);
    return {
      data: response.json.data,
    };
  },
  getMany: async (resource, params) => {
    const ids = params.ids.join(",");
    const response = await fetchUtils.fetchJson(
      `${API_URL}/${resource}?filter={"id":[${ids}]}`,
    );
    return {
      data: response.json.data,
    };
  },
  getManyReference: async (resource, params) => {
    const { page, perPage } = params.pagination;
    const { field, order } = params.sort;

    var filters: Record<string, any> = {};
    filters[params.target] = params.id;
    const filter = JSON.stringify(filters)

    const response = await fetchUtils.fetchJson(
      `${API_URL}/${resource}?page=${page}&limit=${perPage}&sort=["${field}","${order}"]&filter=${filter}`,
    );

    return {
      data: response.json.data,
      total: parseInt(response.headers.get("X-Total-Rows") || "10", 10),
    };
  },
  create: async (resource, params) => {
    if (resource == "resume") {
      const formData = resumeFormData(params);
      const resumeResponse = await fetchUtils.fetchJson(
        `${API_URL}/${resource}`,
        {
          method: "POST",
          body: formData,
        },
      );
      return { data: resumeResponse.json.data };
    }
    const response = await fetchUtils.fetchJson(`${API_URL}/${resource}`, {
      method: "POST",
      body: JSON.stringify(params.data),
    });
    return { data: response.json.data };
  },
  update: async (resource, params) => {
    const url = `${API_URL}/${resource}/${params.id}`;

    if (resource == "resume") {
      const formData = resumeFormData(params);
      const resumeResponse = await fetchUtils.fetchJson(
        url,
        {
          method: "PUT",
          body: formData,
        },
      );
      return { data: resumeResponse.json.data };
    }

    const response = await fetchUtils.fetchJson(url, {
      method: "PUT",
      body: JSON.stringify(params.data),
    });
    return { data: response.json.data };
  },
  updateMany: async (resource, params) => {
    const query = {
      filter: JSON.stringify({ id: params.ids }),
    };
    const url = `${API_URL}/${resource}?${JSON.stringify(query)}`;
    const { json } = await fetchUtils.fetchJson(url, {
      method: "PUT",
      body: JSON.stringify(params.data),
    });
    return { data: json };
  },
  delete: async (resource, params) => {
    const url = `${API_URL}/${resource}/${params.id}`;
    const response = await fetchUtils.fetchJson(url, {
      method: "DELETE",
    });
    return { data: response.json.data };
  },
  deleteMany: async (resource, params) => {
    const query = {
      filter: JSON.stringify({ id: params.ids }),
    };
    const url = `${API_URL}/${resource}?${JSON.stringify(query)}`;
    const response = await fetchUtils.fetchJson(url, {
      method: "DELETE",
    });
    return { data: response.json.data };
  },
};
