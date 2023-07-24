import { createContext } from "react";
import "./App.css";
import ComponentA from "./components/ComponentA";
import Themed from "./components_example2/Themed";
import ThemeView from "./components_example2/ThemeView";
import ThemeButton from "./components_example2/ThemeButton";
import Counter from "./components_reducer/Counter";

const NameContext = createContext();

const App = () => {
  const name = "Marijus";

  return (
    //! useContext ex. 1
    // <NameContext.Provider value={{ name: name }}>
    //   <ComponentA />
    // </NameContext.Provider>

    //! useContext ex. 2
    // <Themed>
    //   <ThemeButton />
    //   <ThemeView />
    // </Themed>

    //! useReducer ex. 1
    <Counter />
  );
};

export default App;
export { NameContext };
