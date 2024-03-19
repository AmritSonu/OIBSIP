import styles from "./order.module.css";
import { useAppNavigate } from "../../../../utils/useAppNavigate";
const trackOrder = [
  "Order succes",
  "Order recieved",
  "In the kitchen",
  "Out For Dilevery",
  "Dilevered Succesfully",
];
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
            <div className="h-[1px] w-48 bg-gray-500 absolute rotate-90 z-2"></div>
            {trackOrder.map((eachTrack, index) => (
              <div
                key={index}
                className={`bg-mainAdditionalcolor-150 rounded-full w-3 h-3 z-20
                ${
                  eachTrack == "Out For Dilevery"
                    ? `ml-2 ${styles.orderDot}`
                    : ""
                }
                `}
              ></div>
            ))}
          </div>
          <div className="flex flex-col justify-start w-1/4 gap-4 -ml-36 z-20">
            {trackOrder.map((eachTrack, index) => (
              <span
                key={index}
                className={`text-gray-700 ${
                  eachTrack == "Out For Dilevery"
                    ? `text-lg ${styles.MyCustomFonts}`
                    : ""
                }`}
              >
                {eachTrack}
              </span>
            ))}
          </div>
        </div>
        <div className="w-3/4">
          <h1 className="text-lg font-semibold my-2">Order Tracking</h1>
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
