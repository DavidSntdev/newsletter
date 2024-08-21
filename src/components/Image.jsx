import illustrationMobile from "../assets/images/illustration-sign-up-mobile.svg";
import illustrationDesktop from "../assets/images/illustration-sign-up-desktop.svg";

function Image() {
  return (
    <>
      <div className="w-full md:order-2">
        <picture>
          <source srcSet={illustrationDesktop} media="(min-width: 768px)" />
          <img
            src={illustrationMobile}
            alt="Illustration"
            className="w-full h-auto"
          />
        </picture>
      </div>
    </>
  );
}

export default Image;
