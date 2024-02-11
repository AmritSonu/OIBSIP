const extraCheeseOptions = [
  { id: 1, label: "Mozzarella cheese ", price: 20 },
  { id: 2, label: "Cheddar cheese", price: 40 },
  { id: 3, label: "Parmesan cheese", price: 60 },
];
function AddExtraCheese() {
  return (
    <ul className="pt-3">
      {extraCheeseOptions.map((option) => (
        <li
          key={option.id}
          className="flex justify-between items-center px-4 py-1.5"
        >
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="radio"
              id={`extraCheeseOption${option.id}`}
              name="extraCheese"
              value={option.id}
            />
            <span className="text-gray-700">{option.label}</span>
          </label>

          <span className="font-semibold text-gray-600 text-sm">
            + ₹{option.price}
          </span>
        </li>
      ))}
    </ul>
  );
}
export { AddExtraCheese };
