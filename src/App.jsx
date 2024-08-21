import "./App.css";
import { useState } from "react";
import Image from "./components/Image";
import Enviado from "./components/Enviado";
import Copy from "./components/Copy";
import Form from "./components/Form";

function App() {
  const [enviado, setEnviado] = useState(false);

  const enviar = () => {
    enviado ? setEnviado(false) : setEnviado(true);
  };
  return (
    <main className="h-full md:h-auto md:p-5 md:rounded-3xl overflow-hidden">
      {!enviado ? (
        <>
          <div className="md:grid md:grid-cols-2">
            <Image />
            <div className="md:flex md:flex-col md:justify-center">
              <Copy />
              <Form />
              <div className="px-5 pt-6">
                <button
                  className="h-16 w-full text-white text-lg font-normal rounded-md"
                  style={{ backgroundColor: "var(--colorDarkSlateGrey)" }}
                  onClick={enviar}
                >
                  Subscribe to monthly newsletter
                </button>
              </div>
            </div>
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
