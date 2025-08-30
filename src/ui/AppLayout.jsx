import { Outlet, useNavigation } from "react-router-dom";
import Loader from "./Loader";
import NavBar from "./NavBar";
import Footer from "./Footer";
import styles from "./AppLayout.module.css";

function AppLayout() {
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";

  console.log(navigation.styles);

  return (
    <div className={styles.layout}>
      {isLoading && <Loader />}
      <NavBar />
      <main>
        <Outlet />
      </main>

      {/* <Footer /> */}
    </div>
  );
}

export default AppLayout;
