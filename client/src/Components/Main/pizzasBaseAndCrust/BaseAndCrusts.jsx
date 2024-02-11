const crustData = [
  {
    name: "Pan",
    imageUrl:
      "https://www.pizzahut.co.in/order/images/products/crust/pan.d81750fc207f75a79efc1db0b9be794a.png",
    description:
      "Original Pan crust. Crunchy on the outside, soft & fluffy on the inside.",
    price: 199,
  },
  {
    name: "Stuffed Crust - Cheese Maxx",
    imageUrl:
      "https://www.pizzahut.co.in/order/images/products/crust/pan.d81750fc207f75a79efc1db0b9be794a.png",
    description:
      "Cheese lovers paradise! Crust stuffed with cheese & creamy Peruvian sauce ",
    price: 234,
  },
  {
    name: "Sausage Crust",
    imageUrl:
      "https://www.pizzahut.co.in/order/images/products/crust/pan.d81750fc207f75a79efc1db0b9be794a.png",
    description:
      "Flavorful sausage-infused crust, bursting with taste, creates a delightful blend of meatiness and perfect dough.",
    price: 239,
  },
  {
    name: "Crispy Thin Crust",
    imageUrl:
      "https://www.pizzahut.co.in/order/images/products/crust/pan.d81750fc207f75a79efc1db0b9be794a.png",
    description:
      "Thin and delicate, our crispy crust offers a light crunch, enhancing the pizza with a focus on rich topping flavors.",
    price: 299,
  },
  {
    name: "Sausage and Cheese Stuffed Crust",
    imageUrl:
      "https://www.pizzahut.co.in/order/images/products/crust/pan.d81750fc207f75a79efc1db0b9be794a.png",
    description:
      "Dive into a cheesy paradise with our stuffed crust, generously filled with sausage and creamy cheese, delivering a rich.",
    price: 379,
  },
];

const BaseAndCrusts = () => {
  return (
    <>
      {crustData.map((crust, index) => (
        <div
          key={index}
          className="flex justify-between items-center hover:cursor-pointer"
        >
          <div className="flex items-center justify-between gap-2 py-5 px-2">
            <img
              src={crust.imageUrl}
              alt={`pizza_crust_${index}`}
              className="w-12 h-12"
            />
            <div className="mr-4">
              <span className="font-semibold text-gray-700">{crust.name}</span>
              <p className="text-sm font-semibold text-gray-500">
                {crust.description}
              </p>
            </div>
            <span className="font-semibold text-gray-500 text-lg">
              ₹{crust.price}
            </span>
          </div>
        </div>
      ))}
    </>
  );
};

export { BaseAndCrusts };
