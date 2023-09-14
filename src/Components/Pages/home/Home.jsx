
import { useState } from "react";
import PruebasHooks from "../../Common/pruebasHooks/PruebasHooks";
import Navegador from "../../Common/navbar/Navbar";

export const Home = () => {

  const [ contador, setContador ] = useState(0)

  return (
    <>
      <Navegador />
      <PruebasHooks contador={contador}  setContador={setContador}/>
    </>
  );
};


