import iconList from "../assets/images/icon-list.svg";

function Copy() {
  return (
    <>
      <div className="p-5 py-10 pb-5">
        <h1 className="text-5xl font-bold mb-3">Stay updated!</h1>
        <p className="py-2 text-lg">
          Join 60,000+ product managers receiving monthly updates on:
        </p>
        <div className="grid grid-rows-3 gap-4 py-3">
          <div className="flex items-start py-2">
            <img src={iconList} alt="" className="mr-2" />
            <p className="pl-1 text-lg">
              Product discovery and building what matters
            </p>
          </div>
          <div className="flex items-start py-2">
            <img src={iconList} alt="" className="mr-2" />
            <p className="pl-1 text-lg">
              Measuring to ensure updates are a success
            </p>
          </div>
          <div className="flex items-start py-2">
            <img src={iconList} alt="" className="mr-2" />
            <p className="pl-1 text-lg">And much more!</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Copy;
