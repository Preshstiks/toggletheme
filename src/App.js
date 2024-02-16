import "./App.css";
import { ThemeContext } from "./context/ThemeContext";
import { useContext } from "react";
import { IoMoon } from "react-icons/io5";
import { CiLight } from "react-icons/ci";
function App() {
  const { toggleTheme, theme } = useContext(ThemeContext);
  return (
    <div
      className={`h-screen w-full flex justify-center items-center ${
        theme === "light" ? "bg-white" : "bg-black"
      }`}
    >
      <div>
        <div
          onClick={toggleTheme}
          className={`py-2 px-3 rounded-[5px] ${
            theme === "light" ? "bg-black text-white" : "bg-white text-black"
          }`}
        >
          {theme === "light" ? <IoMoon /> : <CiLight />}
        </div>
      </div>
    </div>
  );
}

export default App;
