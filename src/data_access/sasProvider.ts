import { fetchUtils } from "react-admin";

const API_URL = "http://localhost:5000";

export const getSasToken = async () => {
    const response = await fetchUtils.fetchJson(
        `${API_URL}`,
    );
    return {
        sasToken: response.json.sasToken
    };
}