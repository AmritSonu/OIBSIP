import { useAppNavigate } from "../../../../utils/useAppNavigate";

function CustomerOrderPreview() {
  const { goTo } = useAppNavigate();

  function handleBack() {
    goTo(-1);
  }
  return (
    <div className="bg-gray-100 min-h-screen p-4">
      <div className="bg-red-200 flex items-center justify-between px-5 py-3">
        <button onClick={handleBack} className="text-gray-600">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 19.5 8.25 12l7.5-7.5"
            />
          </svg>
        </button>
        <h2 className="text-xl font-semibold">Orders Preview</h2>
      </div>
      <div className="p-4 my-4 bg-white rounded-lg shadow-md">
        <h3 className="text-lg font-semibold">Order ID: 55555555</h3>
        <p className="text-gray-500">Today</p>
        {/* delivery step flow  */}
        <div className="flex justify-center gap-5">
          <div className="flex flex-col items-center justify-center w-1/4 gap-7 relative">
            <div className="h-[50px] w-[2px] bg-orange-400 absolute -top-[5px] z-10"></div>

            <div className="h-[1px] w-48 bg-gray-400 absolute rotate-90 z-2"></div>
            <span className=" bg-orange-400 rounded-full w-3 h-3 z-20"></span>
            <span className=" bg-orange-400 rounded-full w-3 h-3 z-20"></span>
            <span className=" bg-orange-400 rounded-full w-3 h-3 z-20"></span>
            <span className=" bg-orange-400 rounded-full w-3 h-3 z-20"></span>
            <span className=" bg-orange-400 rounded-full w-3 h-3 z-20"></span>
          </div>
          <div className="flex flex-col font-semibold justify-start w-1/4 gap-4 -ml-36 z-20">
            <span className="text-gray-700">Order succes</span>
            <span className="text-gray-700">Order recieved</span>
            <span className="text-gray-700">In the kitchen</span>
            <span className="text-gray-300">Out For Devilery</span>
            <span className="text-gray-300">Devilered Succesfully</span>
          </div>
        </div>
        <div className="w-3/4">
          <h1 className="text-lg font-semibold">Order Tracking</h1>
        </div>
        <span className="text-gray-500">Total Bill: $45</span>
      </div>
      <div className="p-4 my-4 bg-white rounded-lg shadow-md">
        <span className="text-lg font-semibold">Payment Method</span>
        <p>By UPI</p>
      </div>
    </div>
  );
}

export { CustomerOrderPreview };
