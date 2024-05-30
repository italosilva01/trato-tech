import Header from "components/Header";
import { useSelector } from "react-redux";
import styles from "./Car.module.scss";
import Item from "components/Item";
export default function Car() {
  const car = useSelector((state) => {
    const carReduce = state.cars.reduce((itens, itemInCar) => {
      const item = state.items.find((item) => item.id === itemInCar.id);

      itens.push({
        ...item,
        quantidade: itemInCar.quantity,
      });
      return itens;
    }, []);

    return carReduce;
  });
  return (
    <>
      <Header
        title="Carrinho de compras"
        description="Confira produtos que você adicionou ao carrinho"
      />
      <div className={styles.carrinho}>
        {car.map((item) => (
          <Item key={item.id} {...item} isInShopCar />
        ))}

        <div className={styles.total}>
          <strong>Resumo da Compra</strong>
          <span>
            Subtotal: <strong>R$ {(0.0).toFixed(2)}</strong>
          </span>
        </div>
      </div>
    </>
  );
}
