import { useEffect } from "react";
import styles from "./Item.module.scss";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { FaCartPlus } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { changeCar } from "store/reducers/car";
import { changeFavorite } from "store/reducers/items";
import classNames from "classnames";

const iconeProps = {
  size: 24,
  color: "#041833",
};
export default function Item(props) {
  const { foto, titulo, descricao, preco, favorito, id, isInShopCar } = props;

  const dispatch = useDispatch();
  const car = useSelector((state) => state.cars);
  const itemInCar = car.some((item) => item.id === id);
  const handleFavoriteItem = () => {
    dispatch(changeFavorite(id));
  };
  const handleChangeShopCar = () => {
    dispatch(changeCar(id));
  };

  return (
    <div
      className={classNames(styles.item, {
        [styles.itemNoCarrinho]: isInShopCar,
      })}
    >
      <div className={styles["item-imagem"]}>
        <img src={foto} alt={titulo} />
      </div>
      <div className={styles["item-descricao"]}>
        <div className={styles["item-titulo"]}>
          <h2>{titulo}</h2>
          <p>{descricao}</p>
        </div>
        <div className={styles["item-info"]}>
          <div className={styles["item-preco"]}>R$ {preco.toFixed(2)}</div>
          <div className={styles["item-acoes"]}>
            {favorito ? (
              <AiFillHeart
                {...iconeProps}
                color="#ff0000"
                className={styles["item-acao"]}
                onClick={handleFavoriteItem}
              />
            ) : (
              <AiOutlineHeart
                {...iconeProps}
                className={styles["item-acao"]}
                onClick={handleFavoriteItem}
              />
            )}

            <FaCartPlus
              {...iconeProps}
              color={itemInCar ? "#1875E8" : iconeProps.color}
              className={styles["item-acao"]}
              onClick={handleChangeShopCar}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
