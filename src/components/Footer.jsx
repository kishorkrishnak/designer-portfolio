import { Link } from "react-router-dom";
import ModeSwitch from "./ModeSwitch";
const Footer = () => {
  return (
    <div className="pb-4 pt-3 border-t border-[#d9d9d9] bg-[#efefef] dark:bg-[#111414] dark:text-[#efefef] w-full h-fit z-40 font-ppmori text-[#111414]">
      <div className="text-sm lg:text-md p-4 md:p-6 md:px-10 m-auto w-full h-full flex justify-between items-center ">
        <Link to="/">© 2024 All Rights Reserved. Design & Coded with ❤️️</Link>
        <div className="flex items-center justify-center">
          <ul className="flex items-center gap-6 md:gap-10 justify-center">
            <li>
              <Link to={"/"}>Dribble</Link>
            </li>
            <li>
              {" "}
              <Link to={"/quizzes"}>Linkedin</Link>
            </li>

            <li>
              {" "}
              <Link to={"/contactus"}>Instagram</Link>
            </li>

            <li>
              {" "}
              <Link to={"/contactus"}>Email</Link>
            </li>
          </ul>
        </div>
        <Link to="/">Imprint</Link>
      </div>
    </div>
  );
};

export default Footer;
