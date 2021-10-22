import axios from "axios";

export const queryProduts = (query: any) => {
  return  axios.post('http://localhost:3000/shop-api',{
      query: query,
    }).then(result => {
      return result.data;
    });
};


export const addItemToOrder = (id: String, quantity: number, mutation: any ) => {
  return  axios.post('http://localhost:3000/shop-api',{
      query: mutation,
      variables: {
        ID: id,
        quantity: quantity
      }
    }).then(result => {
      return result.data;
    });
};
