import { Outlet, useNavigation } from "react-router-dom";
import Loader from "./Loader";
import NavBar from "./NavBar";
import Footer from "./Footer";
import styles from "./AppLayout.module.css";
import { useState } from "react";

function AppLayout() {
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";

  const [footerLinks, setFooterLinks] = useState(null);

  console.log(navigation.styles);

  return (
    <div className={styles.layout}>
      {isLoading && <Loader />}
      <NavBar />
      <main>
        <Outlet context={{setFooterLinks}} />
      </main>

       { footerLinks && <Footer links= {footerLinks} /> }
    </div>
  );
}

export default AppLayout;
