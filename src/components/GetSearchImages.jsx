import axios from "axios";

const BASE_URL = 'https://pixabay.com/api/';
const KEY = '28839601-0c610efa4f554b6dcd03095ae';
const OPTIONS = 'image_type=photo&orientation=horizontal&per_page=12'

 const GetSearchImages = async ({ searchQuery = '', currentPage = 1}) => {
  return await axios.get(`${BASE_URL}?q=${searchQuery}&page=${currentPage}&key=${KEY}&${OPTIONS}`)
  .then(response => response.data.hits);
 
 
  
  }

  const API = {
    GetSearchImages
  }
  export default API;