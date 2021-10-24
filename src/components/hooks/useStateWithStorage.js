import React, { useState } from "react";

export const useStateWithStorage = ({initialState}) => {
  const [objectProducts, setObjectProducts] = useState(initialState);


  return [
    objectProducts,
    setObjectProducts,
  ]
};