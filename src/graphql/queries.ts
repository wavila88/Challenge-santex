// Here we put queries. Remove next line
 export const GET_PRODUCTS_DATA = `
 {
  products{
      totalItems,
      items{
          id,
          name,
           featuredAsset{
                  name,
                  source
              },
          variants{
              id,
              name,
              price,
              featuredAsset{
                  name,
                  source
              },
          },
         
      }
  }
}
 `
