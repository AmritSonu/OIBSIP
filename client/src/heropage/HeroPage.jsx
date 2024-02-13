import { PopularPizzaDeals } from "./PopularPizzaDeals";

function HeroPage() {
  return (
    <>
      <div>
        <img
          src="https://img.freepik.com/free-psd/food-menu-delicious-pizza-web-banner-template_106176-419.jpg?w=900&t=st=1707827023~exp=1707827623~hmac=8c6812d0b863ac6d0f54049891d53f3c0421d3f85e797cb5616e7499ba7f2a0a"
          className="h-64 w-full object-cover"
          alt="heropageimg"
        />
      </div>
      <>
        <PopularPizzaDeals />
      </>
    </>
  );
}

export { HeroPage };
