import axios from "axios";

const BASE_URL = 'https://pixabay.com/api/';
const KEY = '28839601-0c610efa4f554b6dcd03095ae';
const OPTIONS = 'image_type=photo&orientation=horizontal&per_page=12'

 const GetSearchImages = async (name) => {
  try {
    const response = await axios.get(`${BASE_URL}?q=${name}&page=2&key=${KEY}&${OPTIONS}`);
    return response;
  } catch (error) {
    console.log(error.message);
  }
  
  }

  // GetSearchImages('flower');

  export default GetSearchImages;