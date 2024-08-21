import iconSuccess from "../assets/images/icon-success.svg";
function Enviado() {
  return (
    <>
      <div className="py-32 md:py-0 px-7">
        <img src={iconSuccess} alt="" />
        <h1 className="text-5xl font-bold py-7 md:py-4">Thanks for subscribing!</h1>
        <p className="text-lg md:text-base">
          A confirmation email has been sent to
          <strong> ash@loremcompany.com</strong>. Please open it and click the
          button inside to confirm your subscription.
        </p>
      </div>
    </>
  );
}

export default Enviado;
