import { DataProvider, fetchUtils } from "react-admin";

const API_URL = "http://localhost:3000/api";

export const dataProvider: DataProvider = {
  getList: async (resource, params) => {
    const { page, perPage } = params.pagination !== undefined ? params.pagination : {page: 1, perPage: 10};
    const { field, order } = params.sort !== undefined ? params.sort: {field: "id", order: "ASC"};
    const filter = JSON.stringify(params.filter);

    const response = await fetchUtils.fetchJson(
      `${API_URL}/${resource}?page=${page}&limit=${perPage}&sort=["${field}","${order}"]&filter=${filter}`,
    );
    return {
      data: response.json.data,
      total: parseInt(response.headers.get("X-Total-Rows") || '10', 10),
    };
  },
  getOne: async (resource, params) => {
    const id = params.id;
    const response = await fetchUtils.fetchJson(
      `${API_URL}/${resource}/${id}`,
    );
    return {
      data: response.json.data
    }
  },
  getMany: async (resource, params) => {
    const ids = params.ids.join(",")
    const response = await fetchUtils.fetchJson(
      `${API_URL}/${resource}?filter={"id":[${ids}]}`,
    );
    return {
      data: response.json.data
    }
  },
  getManyReference: async (resource, params) => {
    const { page, perPage } = params.pagination;
    const { field, order } = params.sort;
    const filter = JSON.stringify(params.filter);

    const response = await fetchUtils.fetchJson(
      `${API_URL}/${resource}?page=${page}&limit=${perPage}&sort=["${field}","${order}"]&filter=${filter}`,
    );
    
    return {
      data: response.json.data,
      total: parseInt(response.headers.get("X-Total-Rows") || '10', 10),
    };
  },
  create: async (resource, params) => {
    const response = await fetchUtils.fetchJson(`${API_URL}/${resource}`, {
        method: 'POST',
        body: JSON.stringify(params.data),
    })
    return { data: response.json.data };
  },
  update: async (resource, params) => {
    const url = `${API_URL}/${resource}/${params.id}`;
    const response = await fetchUtils.fetchJson(url, {
        method: 'PUT',
        body: JSON.stringify(params.data),
    })
    return { data: response.json.data };
  },
  updateMany: async (resource, params) => {
    const query = {
        filter: JSON.stringify({ id: params.ids}),
    };
    const url = `${API_URL}/${resource}?${JSON.stringify(query)}`;
    const { json } = await fetchUtils.fetchJson(url, {
        method: 'PUT',
        body: JSON.stringify(params.data),
    })
    return { data: json };
  },
  delete: async (resource, params) => {
    const url = `${API_URL}/${resource}/${params.id}`;
    const response = await fetchUtils.fetchJson(url, {
      method: 'DELETE'
    })
    return { data: response.json.data };
  },
  deleteMany: async (resource, params) => {
    const query = {
        filter: JSON.stringify({ id: params.ids}),
    };
    const url = `${API_URL}/${resource}?${JSON.stringify(query)}`;
    const response = await fetchUtils.fetchJson(url, {
        method: 'DELETE',
    });
    return { data: response.json.data };
  },
};
