import { useState } from "react";
import slugify from "slugify";
import { useNavigate } from "react-router-dom";
import { PizzaCardItem } from "./PizzaCardItem";
import { CustomDialogBox } from "../pizzaCustomDialogBox/CustomDialogBox";
import { useDispatch } from "react-redux";
import { setCrustId } from "../../../slices/orderSlice";

function PizzaBox() {
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleButtonClick = (eachPizzaId, eachPizzaName) => {
    setIsDialogOpen(true);
    const slug = slugify(eachPizzaName, { lower: true });
    const queryString = `/pizzas?_kind=${slug}`;
    navigate(queryString, { state: { pizzaId: eachPizzaId } });
  };

  const handleCloseDialog = () => {
    dispatch(setCrustId(null));
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
