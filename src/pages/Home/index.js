import Header from "components/Header";
import clock from "assets/clock.png";
import styles from "./Home.module.scss";

export default function Home() {
  return (
    <div>
      <Header
        title="Classificados Tech"
        description="Compre diversos tipos de produtos no melhor site do Brasil"
        image={clock}
        className={styles.header}
      />
    </div>
  );
}
