import { ItemsPage } from "./ItemsPage";
import { PizzaSelectorViewBar } from "./PizzaSelectorViewBar";

// local backend URl = http://localhost:3000/demo
// backend URL = https://pizza-psi-two.vercel.app/demo

function MainContainer() {
  return (
    <div className="p-5 ">
      
      {/* <HeroPage/> */}

      <ItemsPage />
      <PizzaSelectorViewBar />
    </div>
  );
}

export { MainContainer };
