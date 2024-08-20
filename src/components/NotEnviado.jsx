import Copy from "./Copy";
import Form from "./Form";
import illustrationMobile from "../assets/images/illustration-sign-up-mobile.svg";
import illustrationDesktop from "../assets/images/illustration-sign-up-desktop.svg";

function NotEnviado() {
  return (
    <>
      <div className="w-full">
        <picture>
          <source srcSet={illustrationDesktop} media="(min-width: 1000px)" />
          <img
            src={illustrationMobile}
            alt="Illustration"
            className="w-full h-auto"
          />
        </picture>
      </div>
      <Copy />
      <Form />
    </>
  );
}

export default NotEnviado;
