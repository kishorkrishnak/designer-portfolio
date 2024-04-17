import { Link } from "react-router-dom";
import ModeSwitch from "./ModeSwitch";
const Navbar = () => {
  return (
    <div className="bg-[#efefef] dark:bg-[#111414] dark:text-[#efefef] w-full h-fit z-40 font-ppmori text-[#111414]">
      <div className="text-sm lg:text-lg p-4 md:p-6 md:px-10 m-auto w-full h-full flex justify-between items-center ">
        <Link className="hidden md:block" to="/">
          Dan Abrahamov
        </Link>
        <div className="flex items-center justify-center">
          <ul className="flex items-center gap-6 md:gap-10 justify-center">
            <li>
              <Link to={"/"}>About</Link>
            </li>
            <li>
              {" "}
              <Link to={"/quizzes"}>Work</Link>
            </li>

            <li>
              {" "}
              <Link to={"/contactus"}>Process</Link>
            </li>

            <li>
              {" "}
              <Link to={"/contactus"}>Drop me a line</Link>
            </li>
          </ul>
        </div>
        <ModeSwitch />
      </div>
    </div>
  );
};

export default Navbar;
