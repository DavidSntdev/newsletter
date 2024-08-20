import "./App.css";
import { useState } from "react";
import NotEnviado from "./components/NotEnviado";
import Enviado from "./components/Enviado";

function App() {
  const [enviado, setEnviado] = useState(false);

  const enviar = () => {
    enviado ? setEnviado(false) : setEnviado(true);
  };
  return (
    <main className="pb-10">
      {!enviado ? (
        <>
          <NotEnviado />
          <div className="px-5 pt-6">
            <button
              className="h-16 w-full text-white text-lg font-normal rounded-md"
              style={{ backgroundColor: "var(--colorDarkSlateGrey)" }}
              onClick={enviar}
            >
              Subscribe to monthly newsletter
            </button>
          </div>
        </>
      ) : (
        <>
          <Enviado />
          <div className="px-5 pt-60">
            <button
              className="h-16 w-full text-white text-lg font-normal rounded-md"
              style={{ backgroundColor: "var(--colorDarkSlateGrey)" }}
              onClick={enviar}
            >
              Dismiss message
            </button>
          </div>
        </>
      )}
    </main>
  );
}

export default App;
