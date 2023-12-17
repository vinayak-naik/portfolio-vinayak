import { BrowserRouter } from "react-router-dom";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import { Project } from "../pages/Project";
import { Home } from "../pages/Home";
import style from "./router.module.css";
const Router = () => {
  return (
    <div className={style.container}>
      <BrowserRouter>
        <Routes>
          <Route path="/project/*" element={<Project />} />
          <Route path="/*" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default Router;
