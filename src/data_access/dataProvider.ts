import { DataProvider, fetchUtils } from "react-admin";

const API_URL = "http://localhost:3000/api";

export const dataProvider: DataProvider = {
  getList: async (resource, params) => {
    const { page, perPage } = params.pagination;
    const { field, order } = params.sort;
    console.log(
      `${API_URL}/${resource}?page=${page}&limit=${perPage}&sort=["${field}", "${order}"]`,
    );
    const response = await fetchUtils.fetchJson(
      `${API_URL}/${resource}?page=${page}&limit=${perPage}&sort=["${field}", "${order}"]`,
    );
    return {
      data: response.json.data,
      total: 10,
    };
  },
};
