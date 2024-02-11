const toppingsData = [
  {
    id: 1,
    name: "Green capsicum",
    iconUrl:
      "https://us.123rf.com/450wm/prettyvectors/prettyvectors2304/prettyvectors230400004/201542383-sweet-pepper-bell-slice-paprika-chopped-concept-vector-graphic-design-illustration.jpg?ver=6",
  },
  {
    id: 2,
    name: "Black olives",
    iconUrl:
      "data:image/png;base64,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",
  },
  {
    id: 3,
    name: "Onion",
    iconUrl:
      "https://icons.veryicon.com/png/o/food--drinks/agricultural-vegetable-icon/onion-32.png",
  },
];
function IncludedToppings() {
  return (
    <ul className="my-2">
      {toppingsData.map((topping) => (
        <li
          key={topping.id}
          className="flex justify-between items-center px-4 p-2"
        >
          <div className="flex items-center gap-2">
            <img
              src={topping.iconUrl}
              className="w-10 h-10 object-cover"
              alt={`${topping.name} icon`}
            />
            <span className="text-gray-700">{topping.name}</span>
          </div>
          <button className="bg-gray-400 rounded-full font-thin">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="white"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18 18 6M6 6l12 12"
              />
            </svg>
          </button>
        </li>
      ))}
    </ul>
  );
}
export { IncludedToppings };
