import axios from 'axios';

export default class APIService {
  static async getAll(limit = 40, data) {
    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/${data}`,
      {
        params: {
          _limit: limit,
        },
      }
    );
    return response.data;
  }
}
