import { Outlet, useLocation } from "react-router-dom";

import { Suspense } from "react";
import { CSSTransition, SwitchTransition } from "react-transition-group";
import BreadCrumb from "../components/BreadCrumb";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const MainLayout = () => {
  const location = useLocation();

  return (
    <div className="flex min-h-screen flex-col justify-between">
      <Navbar />

      <div className="flex-1 bg-blue-100 px-4 py-2">
        <BreadCrumb />
        <SwitchTransition>
          <CSSTransition
            classNames={"fade"}
            key={location.pathname}
            timeout={200}
          >
            <Suspense fallback={<div>loading...</div>}>
              <Outlet />
            </Suspense>
          </CSSTransition>
        </SwitchTransition>
      </div>

      <Footer />
    </div>
  );
};

export default MainLayout;
