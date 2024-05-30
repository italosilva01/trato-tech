import styles from "./Header.module.scss";
import HeaderLessImage from "./HeaderLessImage";
import HeaderWithImage from "./HeaderWithImage";

export default function Header({ title, description, className = "", image }) {
  const comumProps = {
    title: title,
    description: description,
  };
  return (
    <header className={styles.header}>
      {title && !image && <HeaderLessImage {...comumProps} />}
      {title && image && (
        <HeaderWithImage {...comumProps} image={image} className={className} />
      )}
    </header>
  );
}
