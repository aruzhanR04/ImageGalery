import axios from 'axios';

const ACCESS_KEY = 'TXx-PXgkmQxSeghB0lwLaQcYPmXNuJXDzfbZUdGeYjQ';

const fetchImages = async (page) => {
  try {
    const response = await axios.get('https://api.unsplash.com/photos/random', {
      params: {
        count: 50,
        page: page, 
        client_id: ACCESS_KEY,
      }
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching images from Unsplash:', error);
    return [];
  }
};

export { fetchImages };