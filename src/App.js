import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import ScrollToTop from "./components/ScrollToTop";
import Home from "./pages/Home/Home";
import { createContext, useContext, useState } from "react";
import './locomotive-scroll.css'
const ThemeContext = createContext();

function App() {
  const theme = localStorage.getItem("theme") || "light";
  const [colorTheme, setColorTheme] = useState(theme);

  const contextValues = {
    colorTheme,
    setColorTheme,
  };
  return (
    <ThemeContext.Provider value={contextValues}>
      <BrowserRouter>
        <ScrollToTop>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </ScrollToTop>
      </BrowserRouter>
    </ThemeContext.Provider>
  );
}
export const useThemeContext = () => useContext(ThemeContext);

export default App;
