import router, { useRouter } from "next/router";
import Nav from "./Nav";
import styles from "../styles/Layout.module.css";

// get meteorological seasons
function getMeteoroSeason(){
  let date = new Date();
  if (date.getMonth() === 0 || (date.getMonth() < 2)) {
    return 0; // winter = dec - feb
  } else if (date.getMonth() >= 2 && date.getMonth() <= 4) {
    return 1; // spring = mar - may
  } else if (date.getMonth() >= 5 && date.getMonth() <= 7) {
    return 2; // summer = jun - aug
  } else {
    return 3; // autumn = sept - nov
  }
}

const Layout = ({ children }) => {
  const Router = useRouter();
  const showHeader = Router.pathname === "/" ? false : true;
  const season = getMeteoroSeason();
  
  return (
    <>
      {showHeader && <Nav seasonID={season}></Nav>}
      <div className={styles.container}>
        <main className={styles.main}>
          {children}
        </main>
      </div>
    </>
  );
};

export default Layout;
