import { useContext } from "react";
import { ThemeContext } from "./Themed";

const ThemeView = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <>
      <p style={{ backgroundColor: theme === "blue" ? "blue" : "green" }}>
        Themed paragraph
      </p>
      <p>{theme}</p>
    </>
  );
};

export default ThemeView;
