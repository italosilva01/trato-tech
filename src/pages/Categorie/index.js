import Header from "components/Header";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

export default function Categorie() {
  const { nameCategorie } = useParams("nameCategorie");
  const categorie = useSelector((state) =>
    state.categories.find((item) => item.id === nameCategorie)
  );

  return (
    <div>
      <Header
        title={categorie.name}
        description={categorie.description}
        image={categorie.header}
      />
    </div>
  );
}
