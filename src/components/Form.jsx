import { useState } from "react";
import PropTypes from "prop-types";
import { borda, removerBorda, validarEmail } from "./utils/funcForms";

function Form({ onSubmit }) {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = () => {
    if (!validarEmail(email)) {
      setError("Invalid email address");
    } else {
      setError("");
      onSubmit(); 
    }
  };

  return (
    <>
      <div className="flex flex-col gap-1 px-5">
        <div className="flex justify-between items-center">
          <label htmlFor="email" className="text-sm font-bold">
            Email address
          </label>
          {error && (
            <span className="text-sm" style={{ color: "var(--colorTomato)" }}>
              {error}
            </span>
          )}
        </div>
        <input
          type="email"
          id="email"
          placeholder="email@company.com"
          className="pl-5 rounded-md h-16 md:h-12"
          style={{
            backgroundColor: error && "hsl(3, 36%, 90%)",
            border: error
              ? "1px solid var(--colorTomato)"
              : "1px solid var(--colorGrey)",
          }}
          onFocus={borda}
          onBlur={removerBorda}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="px-5 pt-6">
        <button
          className="h-16 w-full text-white text-lg font-normal rounded-md hover:shadow-lg hover:shadow-red-300"
          style={{ backgroundColor: "var(--colorDarkSlateGrey)" }}
          onClick={handleSubmit}
          onMouseEnter={(e) =>
            (e.currentTarget.style.backgroundColor = "var(--colorTomato)")
          }
          onMouseLeave={(e) =>
            (e.currentTarget.style.backgroundColor =
              "var(--colorDarkSlateGrey)")
          }
        >
          Subscribe to monthly newsletter
        </button>
      </div>
    </>
  );
}

Form.propTypes = {
  onSubmit: PropTypes.func.isRequired, 
};

export default Form;
