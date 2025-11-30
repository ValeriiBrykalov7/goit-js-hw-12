import axios from 'axios';

export default async function getImagesByQuery(query, currentPage) {
  try {
    const response = await axios.get('https://pixabay.com/api/', {
      params: {
        key: '53324223-e08795bb9ae8d90e4ba564674',
        q: query,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
        page: currentPage,
        per_page: 15,
      },
    });
    return response.data;
  } catch (error) {
    console.log(error);
  }
}
