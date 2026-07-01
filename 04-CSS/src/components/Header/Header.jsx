import styles from "./Header.module.css";
const Header = () => {
  return (
    <div className={styles.header}>
      <h1>LOGO</h1>
      <button className={styles.btn}>Contact</button>
    </div>
  );
};

export default Header;
