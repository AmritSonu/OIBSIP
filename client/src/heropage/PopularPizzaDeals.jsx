import { NavLink } from "react-router-dom";

function PopularPizzaDeals() {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-8">Popular Pizza Deals</h1>

      {/* Pizza Deals List */}
      <div className="flex gap-5 justify-start items-center flex-wrap w-9/12 mx-auto">
        <img
          src="https://img.freepik.com/free-psd/food-menu-delicious-pizza-web-banner-template_106176-419.jpg?w=900&t=st=1707827023~exp=1707827623~hmac=8c6812d0b863ac6d0f54049891d53f3c0421d3f85e797cb5616e7499ba7f2a0a"
          className="h-60 w-30 object-cover"
          alt="heropageimg"
        />
        <img
          src="https://img.freepik.com/free-psd/food-menu-delicious-pizza-web-banner-template_106176-419.jpg?w=900&t=st=1707827023~exp=1707827623~hmac=8c6812d0b863ac6d0f54049891d53f3c0421d3f85e797cb5616e7499ba7f2a0a"
          className="h-60 w-30 object-cover"
          alt="heropageimg"
        />
        <img
          src="https://img.freepik.com/free-psd/food-menu-delicious-pizza-web-banner-template_106176-419.jpg?w=900&t=st=1707827023~exp=1707827623~hmac=8c6812d0b863ac6d0f54049891d53f3c0421d3f85e797cb5616e7499ba7f2a0a"
          className="h-60 w-30 object-cover"
          alt="heropageimg"
        />
      </div>
      <div className="text-center my-6">
        <NavLink
          to="/pizzas"
          className="bg-mainAdditionalcolor-150 px-5 py-2 font-bold mx-auto w-6/12 rounded-full hover:bg-green-500 hover:text-white"
        >
          View All deals
        </NavLink>
      </div>
    </div>
  );
}
export { PopularPizzaDeals };
