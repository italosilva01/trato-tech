import Header from "components/Header";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import styles from "./Categorie.module.scss";
import Item from "components/Item";

export default function Categorie() {
  const { nameCategorie } = useParams("nameCategorie");
  const { categorie, itens } = useSelector((state) => {
    const regexp = new RegExp(state.search, "i");
    return {
      categorie: state.categories.find((item) => item.id === nameCategorie),
      itens: state.items.filter(
        (item) => item.categoria === nameCategorie && item.titulo.match(regexp)
      ),
    };
  });

  return (
    <div>
      <Header
        title={categorie.name}
        description={categorie.description}
        image={categorie.header}
      />
      <div className={styles.itens}>
        {itens?.map((item) => (
          <Item key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
}
