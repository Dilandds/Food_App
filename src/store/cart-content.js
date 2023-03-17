//goal make the context and keep the data
import React from "react";

const cartcontext = React.createContext({
  items: [],
  totalamount: 0,
  addItems: (items) => {},
  removeItems: (id) => {},
});

export default cartcontext;
