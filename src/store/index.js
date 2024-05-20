import { configureStore } from "@reduxjs/toolkit";

//Adicionando estado no Store
import categories from "./categories";
import items from "./items";

const storeCategories = configureStore({
  reducer: {
    categories: categories,
    items: items,
  },
});

export default storeCategories;
