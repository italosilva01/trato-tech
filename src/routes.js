import { PageDefault } from "components/PageDefault";
import Car from "pages/Car";
import Categorie from "pages/Categorie";
import Home from "pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PageDefault />}>
          <Route index element={<Home />} />
          <Route
            path="/categorie/:nameCategorie"
            element={<Categorie />}
          />{" "}
          <Route path="/carrinho" element={<Car />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
