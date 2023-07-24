import { useContext } from "react";
import ComponentB from "./ComponentB";
import { NameContext } from "../App";

const ComponentA = () => {
  const { name } = useContext(NameContext);

  return (
    <>
      <ComponentB />
      <h1>{name} from component A</h1>
    </>
  );
};

export default ComponentA;
