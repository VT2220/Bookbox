import axios from 'axios';
import { API } from '../../config';

export const getBook = async (title: string) => {
  try {
    const { data, status } = await axios.get(`${API}/books?title=${title}`);
    if (status === 200) {
      return data;
    }
    return null;
  } catch (error) {
    return error;
  }
};
