import { useContext } from "react";
import { ThemeContext } from "./Themed";

const ThemeButton = () => {
  const { toggleTheme, theme } = useContext(ThemeContext);

  return (
    <button onClick={toggleTheme}>Change theme. Current is {theme}</button>
  );
};

export default ThemeButton;
