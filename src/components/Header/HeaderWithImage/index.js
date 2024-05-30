import styles from "./HeaderWithImage.module.scss";
export default function HeaderWithImage({
  title,
  description,
  image,
  className,
}) {
  return (
    <>
      <div className={`${className} ${styles.header}`}>
        <div className={styles["header-texto"]}>
          <h1>{title}</h1>
          <h2>{description}</h2>
        </div>

        <div className={styles["header-imagem"]}>
          <img alt={title} src={image} />
        </div>
      </div>
    </>
  );
}
