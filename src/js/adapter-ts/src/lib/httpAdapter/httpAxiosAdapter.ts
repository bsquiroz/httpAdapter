import axios, { AxiosInstance } from "axios";
import { HttpAdapter } from ".";

export class AxiosHttpAdapter implements HttpAdapter {
  private axiosInstance: AxiosInstance;

  constructor() {
    this.axiosInstance = axios.create({
      headers: {
        "Content-Type": "application/json",
      },
    });
  }

  async get<T>(url: string): Promise<T> {
    const response = await this.axiosInstance.get<T>(url);
    return response.data;
  }

  async post<T, U>(url: string, data: U): Promise<T> {
    const response = await this.axiosInstance.post<T>(url, data);
    return response.data;
  }

  async put<U>(url: string, data: U): Promise<void> {
    await this.axiosInstance.put(url, data);
  }

  async delete(url: string): Promise<void> {
    await this.axiosInstance.delete(url);
  }
}
