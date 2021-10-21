import axios from "axios";

export const queryProduts = (query: any) => {
  return  axios.post('http://localhost:3000/shop-api',{
      query: query,
    }).then(result => {
      debugger;
      return result.data;
      
    });
};
