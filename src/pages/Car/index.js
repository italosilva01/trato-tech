import Header from "components/Header";
import { useDispatch, useSelector } from "react-redux";
import styles from "./Car.module.scss";
import Item from "components/Item";
import { resetCar } from "store/reducers/car";
export default function Car() {
  let total = 0;
  const car = useSelector((state) => {
    const carReduce = state.cars.reduce((itens, itemInCar) => {
      const item = state.items.find((item) => item.id === itemInCar.id);
      total += item.preco * itemInCar.quantity;
      itens.push({
        ...item,
        quantity: itemInCar.quantity,
      });
      return itens;
    }, []);

    return carReduce;
  });

  const dispatch = useDispatch();
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
            Subtotal: <strong>R$ {total.toFixed(2)}</strong>
          </span>
        </div>
        <button
          className={styles.finalizar}
          onClick={() => dispatch(resetCar())}
        >
          Finalizar compra
        </button>
      </div>
    </>
  );
}
