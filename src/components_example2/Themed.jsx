import { createContext, useState } from "react";

const ThemeContext = createContext();

const Themed = ({ children }) => {
  const [theme, setTheme] = useState("blue");

  const toggleTheme = () =>
    setTheme((previousTheme) => (previousTheme === "blue" ? "green" : "blue"));

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default Themed;
export { ThemeContext };
