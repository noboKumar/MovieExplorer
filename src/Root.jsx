import { Outlet } from "react-router-dom";
import NavBar from "./components/NavBar";

const Root = () => {
  return (
    <div className="hanken-grotesk-font">
      <NavBar></NavBar>
      <div className="w-11/12 mx-auto py-5 min-h-[calc(100vh-300px)]">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Root;
