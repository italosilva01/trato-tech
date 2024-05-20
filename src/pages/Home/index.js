import Header from "components/Header";
import clock from "assets/clock.png";
import styles from "./Home.module.scss";

import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Home() {
  const navigate = useNavigate();
  const categories = useSelector((state) => state.categories);

  return (
    <div>
      <Header
        title="Classificados Tech"
        description="Compre diversos tipos de produtos no melhor site do Brasil"
        image={clock}
        className={styles.header}
      />
      <div className={styles.categorias}>
        <div className={styles["categorias-title"]}>
          <h1>Categorias</h1>
        </div>
        <div className={styles["categorias-container"]}>
          {categories.map((item, index) => (
            <div key={index} onClick={() => navigate(`/categorie/${item.id}`)}>
              <img src={item.thumbnail} alt={item.nome} />
              <h1>{item.name}</h1>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
