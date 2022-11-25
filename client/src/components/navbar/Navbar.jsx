import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="flex p-4 justify-around items-center w-full bg-zinc-900 text-gray-100">
      <ul className="flex text-xl gap-4">
        <Link to={"/"}>
          <li className="hover:text-blue-500">Home</li>
        </Link>
        <Link to={"/logs"}>
          <li className="hover:text-blue-500">Logs</li>
        </Link>
      </ul>
    </nav>
  );
};

export default Navbar;
