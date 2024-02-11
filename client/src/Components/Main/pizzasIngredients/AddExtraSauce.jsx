const sauces = [
  {
    id: 1,
    name: "Classic Tomato Sauce",
    price: 10,
    sauceUrl:
      "https://www.pngkey.com/png/detail/308-3085628_pizza-clipart-pizza-sauce-cartoon-pizza-sauce.png",
  },
  {
    id: 2,
    name: "Pesto Sauce",
    price: 15,
    sauceUrl:
      "https://www.pngkey.com/png/detail/308-3085628_pizza-clipart-pizza-sauce-cartoon-pizza-sauce.png",
  },
  {
    id: 3,
    name: "Alfredo Sauce",
    price: 20,
    sauceUrl:
      "https://www.pngkey.com/png/detail/308-3085628_pizza-clipart-pizza-sauce-cartoon-pizza-sauce.png",
  },
  {
    id: 4,
    name: "Grill Sauce",
    price: 32,
    sauceUrl:
      "https://www.pngkey.com/png/detail/308-3085628_pizza-clipart-pizza-sauce-cartoon-pizza-sauce.png",
  },
  {
    id: 5,
    name: "White Sauce (Garlic and Olive Oil)",
    price: 39,
    sauceUrl:
      "https://www.pngkey.com/png/detail/308-3085628_pizza-clipart-pizza-sauce-cartoon-pizza-sauce.png",
  },
];

function AddExtraSauce() {
  return (
    <>
      <ul className="my-2">
        <div className="px-4 py-2">
          {sauces.map((sauce) => (
            <li
              key={sauce.id}
              className="flex justify-between items-center hover:cursor-pointer mb-3"
            >
              <div className="flex items-center gap-2">
                <img
                  src={sauce.sauceUrl}
                  className="w-10 h-10 object-cover rounded-full"
                  alt={`${sauce.name} icon`}
                />
                <span className="text-gray-700">{sauce.name}</span>
              </div>
              <div className="flex items-center gap-4 font-semibold text-gray-600">
                <span className="text-sm">₹{sauce.price}</span>
                <button type="button">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="2.5"
                    stroke="green"
                    className="w-6 h-6"
                  >
                    <path strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                  </svg>
                </button>
              </div>
            </li>
          ))}
        </div>
      </ul>
    </>
  );
}
export { AddExtraSauce };
