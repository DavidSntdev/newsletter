import { useState, useEffect } from "react";
import Image from "./components/Image";
import Enviado from "./components/Enviado";
import Copy from "./components/Copy";
import Form from "./components/Form";

function App() {
  const [enviado, setEnviado] = useState(false);
  const [isLargeScreen, setIsLargeScreen] = useState(false);

  const enviar = () => {
    setEnviado(true); 
  };

  useEffect(() => {
    const checkScreenWidth = () => {
      setIsLargeScreen(window.innerWidth > 768);
    };

    checkScreenWidth();
    window.addEventListener("resize", checkScreenWidth);
    return () => window.removeEventListener("resize", checkScreenWidth);
  }, []);

  return (
    <main
      className="h-full md:h-auto md:p-5 md:rounded-3xl overflow-hidden"
      style={{
        width: enviado && isLargeScreen && "500px",
        height: enviado && isLargeScreen && "auto",
      }}
    >
      {!enviado ? (
        <>
          <div className="md:grid md:grid-cols-2">
            <Image />
            <div className="md:flex md:flex-col md:justify-center">
              <Copy />
              <Form onSubmit={enviar} />
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="md:py-10 md:px-3">
            <Enviado />
            <div className="px-5 md:pt-5 pt-60">
              <button
                className="h-16 w-full text-white text-lg md:text-sm font-normal md:h-12 rounded-md hover:shadow-lg hover:shadow-red-300"
                style={{ backgroundColor: "var(--colorDarkSlateGrey)" }}
                onClick={() => setEnviado(false)}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.backgroundColor = "var(--colorTomato)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.backgroundColor =
                    "var(--colorDarkSlateGrey)")
                }
              >
                Dismiss message
              </button>
            </div>
          </div>
        </>
      )}
    </main>
  );
}

export default App;
