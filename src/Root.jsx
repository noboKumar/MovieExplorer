import { Outlet } from "react-router-dom";

const Root = () => {
  return (
    <div className="w-11/12 mx-auto py-5 min-h-[calc(100vh-300px)]">
      <Outlet></Outlet>
    </div>
  );
};

export default Root;
