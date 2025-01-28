import { fetchUtils } from "react-admin";

const API_URL = import.meta.env.VITE_AZURE_SERVICE_API_URL;

export const getSasToken = async () => {
    const response = await fetchUtils.fetchJson(
        `${API_URL}`,
    );
    return {
        sasToken: response.json.sasToken
    };
}