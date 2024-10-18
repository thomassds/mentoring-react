import axios from "axios";

export const apiClient = axios.create({
    baseURL: import.meta.env.VITE_APP_API,
});

export const setAuthToken = (token?: string, userId?: string) => {
    if (token && userId) {
        apiClient.defaults.headers.common["Authorization"] = `Bearer ${token}`;
        apiClient.defaults.headers.common["User-Action"] = userId;

        return;
    }

    delete apiClient.defaults.headers.common["Authorization"];
    delete apiClient.defaults.headers.common["User-Action"];
};
