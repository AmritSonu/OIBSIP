import { useNavigate } from "react-router-dom";
import { PizzaCardItem } from "./PizzaCardItem";
import { PizzaInfoPageDialogBox } from "./PizzaInfoShow";
import { useState } from "react";

function PizzaBox() {
  const navigate = useNavigate(); // Import the useNavigate hook
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleButtonClick = () => {
    setIsDialogOpen(true);
    console.log(true);

    // Change the route path when opening the dialog box
    navigate("/pizzas??kind=pizza_name");
  };

  const handleCloseDialog = () => {
    setIsDialogOpen(false);
    navigate(-1);
  };

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        <PizzaCardItem handleButtonClick={handleButtonClick} />
        <PizzaCardItem handleButtonClick={handleButtonClick} />
        <PizzaCardItem handleButtonClick={handleButtonClick} />

        <div>
          <PizzaInfoPageDialogBox
            isOpen={isDialogOpen}
            handleClose={handleCloseDialog}
          />
        </div>
      </div>
    </>
  );
}

export { PizzaBox };
