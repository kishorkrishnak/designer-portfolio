import { Link } from "react-router-dom";
import useDarkMode from "../hooks/useDarkMode";
import { useThemeContext } from "../App";
import darkModeIcon from "../assets/images/dark-mode.svg";
import lightModeIcon from '../assets/images/light-mode.svg';
const ModeSwitch = () => {
  const { setColorTheme } = useThemeContext();
  const [colorTheme, setTheme] = useDarkMode();

  const toggleDarkMode = () => {
    setTheme(colorTheme);
    setColorTheme(colorTheme);
  };

  return (
    <>
      <div
        onClick={toggleDarkMode}
        className="flex items-start gap-3 justify-center"
      >
        {colorTheme === "light" ? (
          <>
            <img src={darkModeIcon} className="h-4 w-4" alt="" />
            <Link className="text-sm" to="/">
              Dark
            </Link>
          </>
        ) : (
          <>
            <img src={lightModeIcon} className="h-4 w-4" alt="" />
            <Link className="text-sm" to="/">
              Light
            </Link>
          </>
        )}
      </div>
    </>
    // <Switch
    //   onChange={toggleDarkMode}
    //   checked={darkSide}
    //   className="react-switch"
    //   uncheckedIcon={false}
    //   checkedIcon={false}
    //   handleDiameter={18}
    //   offColor="#F6F6F6"
    //   height={25}
    //   width={50}
    //   onColor="#3C3E4D"
    //   onHandleColor="#F0EF0B"
    //   offHandleColor="#4AB2A9"
    // />
  );
};

export default ModeSwitch;
