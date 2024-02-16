import axios from 'axios';

//pixabay.com/api/?q=cat&page=1&key=your_key&image_type=photo&orientation=horizontal&per_page=12
axios.defaults.baseURL = 'https://pixabay.com/api/';

export const getGalleryItemsAPI = async (query, page) => {
  let queries = {
    key: '40976601-7e2fe02ca8efc6be3b00881e0',
    per_page: 12,
    q: query,
    page: page,
  };
  const { data } = await axios('', { params: queries });
  return data;
};
