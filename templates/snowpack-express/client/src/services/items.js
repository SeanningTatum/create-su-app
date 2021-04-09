import axios from '../utils/axios';

const BASE_URL = '/api/items';

export async function getItems() {
  const { data } = await axios.get(`${BASE_URL}`);

  return data;
}
