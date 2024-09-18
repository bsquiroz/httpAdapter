export class HttpAdapter {
  async get(url) {
    const { data } = await axios(url);
    return data;
  }

  async post(url, data) {}

  async remove(url) {}

  async update(url, data) {}
}
