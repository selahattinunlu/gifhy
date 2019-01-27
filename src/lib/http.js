import axios from 'axios';

const http = axios.create({
  baseURL: 'https://api.giphy.com/v1/gifs/',
  timeout: 5000,
  params: {
    api_key: 'bUT4wrGXU267lenrbshjU9mCUL5h5Skn'
  }
});

export default http;
