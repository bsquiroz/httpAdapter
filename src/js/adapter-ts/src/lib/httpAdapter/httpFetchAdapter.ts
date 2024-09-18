import { HttpAdapter } from ".";

export class FetchHttpAdapter implements HttpAdapter {
  async get<T>(url: string): Promise<T> {
    const response = await fetch(url);
    return response.json();
  }

  async post<T, U>(url: string, data: U): Promise<T> {
    const response = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    return response.json();
  }

  async put<U>(url: string, data: U): Promise<void> {
    await fetch(url, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
  }

  async delete(url: string): Promise<void> {
    await fetch(url, { method: "DELETE" });
  }
}
