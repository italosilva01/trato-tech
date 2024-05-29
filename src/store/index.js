import { configureStore } from "@reduxjs/toolkit";

//Adicionando estado no Store
import categories from "./reducers/categories";
import items from "./reducers/items";
import count from "./reducers/count";
const storeCategories = configureStore({
  reducer: {
    categories: categories,
    items: items,
    count: count,
  },
});

export default storeCategories;
