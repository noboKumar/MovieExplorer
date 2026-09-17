import { Outlet } from "react-router-dom";
import NavBar from "./components/NavBar";

const Root = () => {
  return (
    <div className="hanken-grotesk-font">
      <NavBar></NavBar>
      <div className=" min-h-[calc(100vh-300px)]">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Root;
