import apiClient from "./config";

interface APIResponse<T> {
    status: number;
    message: string;
    success: boolean;
    value: T;
  }
async function get<T>(url: string){
    const res = await apiClient.get<APIResponse<T>>(url);
    return res.data;
}

async function post<T>(url: string, data: object) {
    const res = await apiClient.post<APIResponse<T>>(url, data);
    return res.data;
}

async function put<T>(url: string, data: object) {
    const res = await apiClient.put<APIResponse<T>>(url, data);
    return res.data;
}

async function del<T>(url: string) {
    const res = await apiClient.delete<APIResponse<T>>(url);
    return res.data;
}

const http = {
    get, 
    post,
    put,
    del,
}

export default http
