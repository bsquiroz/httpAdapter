export interface HttpAdapter {
  get: <T>(url: string) => Promise<T>;
  post: <T, U>(url: string, data: U) => Promise<T>;
  put: <U>(url: string, data: U) => Promise<void>;
  delete: (url: string) => Promise<void>;
}
