import PropTypes from "prop-types";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { setCustomerDetails } from "../../slices/finalorderSlice";

function CheckoutForm({ checkoutPayAndPlace }) {
  const dispatch = useDispatch();
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    // Handle form submission
    checkoutPayAndPlace(data);
    dispatch(setCustomerDetails(data));
  };

  const validateAddress = (value) => {
    const words = value.trim().split(/\s+/).length;
    const minWords = 10;
    const maxWords = 15;

    if (words < minWords || words > maxWords) {
      return `Address must be between ${minWords} and ${maxWords} words.`;
    }

    return true;
  };

  return (
    <div className="bg-white p-4 rounded-md shadow-md">
      <h3 className="text-xl font-semibold mb-4">Customer Information</h3>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-4">
          <label
            htmlFor="fullname"
            className="block text-sm font-semibold mb-1"
          >
            Customer Name
            <span className="text-rose-500"> *</span>
          </label>
          <input
            type="text"
            id="fullname"
            {...register("fullname", { required: "First Name is required" })}
            className="w-full border p-2 rounded-md"
          />
          {errors.fullname && (
            <p className="text-red-600 text-sm">{errors.fullname.message}</p>
          )}
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-semibold mb-1">
            Email
            <span className="text-rose-500"> *</span>
          </label>
          <input
            type="email"
            id="email"
            {...register("email", {
              required: "Email is required.",
              pattern: {
                value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
                message: "Email is not valid.",
              },
            })}
            className="w-full border p-2 rounded-md"
          />
          {errors.email && (
            <p className="text-red-600 text-sm">{errors.email.message}</p>
          )}
        </div>
        <div className="mb-4">
          <label htmlFor="phone" className="block text-sm font-semibold mb-1">
            Phone Number
            <span className="text-rose-500"> *</span>
          </label>
          <input
            type="tel"
            id="phone"
            {...register("phone", {
              required: "Phone Number is required",
              pattern: {
                value: /^\d{10}$/,
                message: "Phone Number must be 10 digits long",
              },
            })}
            className="w-full border p-2 rounded-md"
          />
          {errors.phone && (
            <p className="text-red-600 text-sm">{errors.phone.message}</p>
          )}
        </div>
        <div className="mb-4">
          <label htmlFor="address" className="block text-sm font-semibold mb-1">
            Address
            <span className="text-rose-500"> *</span>
          </label>
          <textarea
            id="address"
            name="address"
            rows="4"
            cols="50"
            {...register("address", {
              required: "Address is required",
              validate: validateAddress,
            })}
            className="border w-full p-2 rounded-md"
          ></textarea>
          {errors.address && (
            <p className="text-red-600 text-sm">{errors.address.message}</p>
          )}
        </div>

        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
        >
          Pay and Place Order
        </button>
      </form>
    </div>
  );
}

CheckoutForm.propTypes = {
  checkoutPayAndPlace: PropTypes.func.isRequired,
};

export { CheckoutForm };
