import { useState, useEffect } from "react";

const useDarkMode = () => {
  const [theme, setTheme] = useState(localStorage.theme || "dark");
  const colorTheme = theme === "dark" ? "light" : "dark";

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove(colorTheme);
    root.classList.add(theme);
    localStorage.setItem("theme", theme);

    console.log(root.classList);
  }, [theme, colorTheme]);

  return [colorTheme, setTheme];
};
export default useDarkMode;
