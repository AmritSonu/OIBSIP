import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { PizzaCardItem } from "./PizzaCardItem";
import { CustomDialogBox } from "../pizzaCustomDialogBox/CustomDialogBox";

function PizzaBox() {
  const navigate = useNavigate();
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleButtonClick = () => {
    setIsDialogOpen(true);
    navigate("/pizzas?kind=pizza_name");  
  };

  const handleCloseDialog = () => {
    setIsDialogOpen(false);
    navigate(-1);
  };
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        <PizzaCardItem handleButtonClick={handleButtonClick} />

        <div>
          <CustomDialogBox
            isOpen={isDialogOpen}
            handleClose={handleCloseDialog}
          />
        </div>
      </div>
    </>
  );
}

export { PizzaBox };
