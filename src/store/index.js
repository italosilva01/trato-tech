import { configureStore } from "@reduxjs/toolkit";

//Adicionando estado no Store
import categoriesSlice from "./reducers/categories";
import itemsSlice from "./reducers/items";
import carSlice from "./reducers/car";
import searchSlice from "./reducers/search";
//import count from "./reducers/count";
const storeCategories = configureStore({
  reducer: {
    categories: categoriesSlice,
    items: itemsSlice,
    // count: count,
    cars: carSlice,
    search: searchSlice,
  },
});

export default storeCategories;
