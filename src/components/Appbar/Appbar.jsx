import Navigation from "../Navigation/Navigation";
import s from "./Appbar.module.css";

const Appbar = () => {
  return (
    <header className={s.header}>
      <Navigation />
      <hr />
    </header>
  );
};

export default Appbar;
