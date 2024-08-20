import "./App.css";
import illustrationMobile from "./assets/images/illustration-sign-up-mobile.svg";
import iconList from "./assets/images/icon-list.svg";

function App() {
  return (
    <>
      <div className="w-full">
        <img
          src={illustrationMobile}
          alt="Illustration"
          className="w-full h-auto"
        />
      </div>
      <div className="p-5 py-10">
        <h1 className="text-5xl font-bold h-16">Stay updated!</h1>
        <p className="py-5">
          Join 60,000+ product managers receiving monthly updates on:
        </p>
        <div className="grid grid-rows-3 gap-4 py-3">
          <div className="flex items-start py-2">
            <img src={iconList} alt="" className="mr-2" />
            <p className="pl-1">Product discovery and building what matters</p>
          </div>
          <div className="flex items-start py-2">
            <img src={iconList} alt="" className="mr-2" />
            <p className="pl-1">Measuring to ensure updates are a success</p>
          </div>
          <div className="flex items-start py-2">
            <img src={iconList} alt="" className="mr-2" />
            <p className="pl-1">And much more!</p>
          </div>
        </div>
      </div>
      <div>
        <label htmlFor="email">Email adress</label>
        <input
          type="email"
          name=""
          id="email"
          placeholder="email@company.com"
        />
        <button>Subscribe to monthly newsletter</button>
      </div>
    </>
  );
}

export default App;
