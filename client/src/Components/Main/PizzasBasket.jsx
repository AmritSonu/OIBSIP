import { useNavigate } from "react-router-dom";

function PizzaSelectorBasket() {
  const navigate = useNavigate();

  return (
    <div className=" border absolute top-20 right-0  md:w-3/12 bg-white sm:w-5/12">
      <button
        onClick={() => navigate("/pizzas")}
        className="border rounded-full bg-mainAdditionalcolor-150 p-[8px] m-[4px]"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
          className="w-4 h-4"
        >
          <path d="M459.5 440.6c9.5 7.9 22.8 9.7 34.1 4.4s18.4-16.6 18.4-29V96c0-12.4-7.2-23.7-18.4-29s-24.5-3.6-34.1 4.4L288 214.3V256v41.7L459.5 440.6zM256 352V256 128 96c0-12.4-7.2-23.7-18.4-29s-24.5-3.6-34.1 4.4l-192 160C4.2 237.5 0 246.5 0 256s4.2 18.5 11.5 24.6l192 160c9.5 7.9 22.8 9.7 34.1 4.4s18.4-16.6 18.4-29V352z" />
        </svg>
      </button>
      <div className=" lg:shadow-left lg:border-l bg-white ml-auto">
        <h2 className="text-center px-4 sm:px-10 pt-10 lg:pt-20 pb-6">
          Your Basket
        </h2>

        <p className="px-4 sm:px-10 pt-5 pb-40">
          Your basket looks a little empty.
        </p>
      </div>
      <button className="p-1 bg-mainAdditionalcolor-150 ml-5 my-2 font-mono px-6">
        Conform
      </button>
    </div>
  );
}

export { PizzaSelectorBasket };
