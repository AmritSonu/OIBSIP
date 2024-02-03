
function PizzaSelectorViewBar() {
  return (
    <div className="w-3/12 border absolute top-20 right-0">
      {/**************/}
      <div className=" lg:shadow-left lg:border-l bg-white ml-auto">
        <h2 className="text-center px-4 sm:px-10 pt-10 lg:pt-20 pb-6">
          Your Basket
        </h2>

        <p className="px-4 sm:px-10 pt-5 pb-40">
          Your basket looks a little empty.
        </p>
      </div>
      {/**************/}
      <button className="p-1 bg-mainAdditionalcolor-150 ml-5 my-2 font-mono px-6">
        Conform
      </button>
    </div>
  );
}

export {PizzaSelectorViewBar};
