import { useContext } from "react";
import { NameContext } from "../App";

const ComponentC = () => {
  const { name } = useContext(NameContext);

  return <h1>{name} from component C</h1>;
};

export default ComponentC;
