import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useState } from "react";

const Signup = () => {
  const [isSuccess, setIsSuccess] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = async (data) => {
    // Simulate a server response delay
    await new Promise((resolve) => setTimeout(resolve, 2000));
    console.log(data);
    setIsSuccess(true);
    // Reset the form after a successful submission
    reset();
  };

  return (
    <div className="flex items-center justify-center mt-6 mb-6">
      <div className="w-full max-w-md rounded-lg p-6 bg-white shadow-md">
        <h2 className="text-2xl font-bold text-mainAdditionalcolor-150 mb-4">
          Sign Up
        </h2>

        {isSuccess && (
          <p className="bg-green-200 text-green-800 font-semibold p-3 mb-4">
            User registered successfully!
          </p>
        )}

        <form className="flex flex-col" onSubmit={handleSubmit(onSubmit)}>
          <div className="grid grid-cols-2 gap-4 mb-4">
            <input
              placeholder="First Name"
              name="firstname"
              type="text"
              className="border-2 rounded-md p-2 focus:outline-none placeholder:text-sm"
              {...register("firstname", {
                required: "First name is required.",
              })}
            />
            {errors.firstname && (
              <p className="my-5 font-semibold text-red-800">
                {errors.firstname.message}
              </p>
            )}
            <input
              placeholder="Last Name"
              name="lastname"
              type="text"
              className="border-2 rounded-md p-2 focus:outline-none placeholder:text-sm"
              {...register("lastname", {
                required: "Last name is required.",
              })}
            />
            {errors.lastname && (
              <p className="my-5 font-semibold text-red-800">
                {errors.lastname.message}
              </p>
            )}
          </div>
          <input
            placeholder="Email"
            name="email"
            type="email"
            className="border-2 rounded-md p-2 mb-4 focus:outline-none placeholder:text-sm"
            {...register("email", {
              required: "Email is required.",
              pattern: {
                value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
                message: "Email is not valid.",
              },
            })}
          />
          {errors.email && (
            <p className="my-5 font-semibold text-red-800">
              {errors.email.message}
            </p>
          )}

          <input
            placeholder="Password"
            name="password"
            type="password"
            className="border-2 rounded-md p-2 mb-4 focus:outline-none placeholder:text-sm"
            {...register("password", {
              required: "Password is required.",
              minLength: {
                value: 6,
                message: "Password should be at least 6 characters.",
              },
              pattern: {
                value: /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s)(?=.*[!@#$*])/,
                message:
                  "Password should contain at least one Uppercase letter, Lowercase letter, Digit, and Special symbol.",
              },
            })}
          />
          {errors.password && (
            <p className="my-5 font-semibold text-red-800">
              {errors.password.message}
            </p>
          )}

          <p className="mt-2 text-gray-600 text-sm">
            By signing up, you agree to our{" "}
            <Link to="/terms" className="text-blue-500 underline">
              Terms of Service
            </Link>{" "}
            and{" "}
            <Link to="/privacy" className="text-blue-500 underline">
              Privacy Policy
            </Link>
          </p>

          <div className="mt-4">
            <p className="font-semibold">
              Already have an account?
              <Link to="/login" className="text-blue-500 ml-2 hover:underline">
                Login
              </Link>
            </p>
          </div>

          <button
            className="bg-mainAdditionalcolor-150 text-white font-bold py-2 px-4 rounded-md mt-4 hover:bg-indigo-600 transition ease-in-out duration-150"
            type="submit"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Signing Up..." : "Sign Up"}
          </button>
        </form>
      </div>
    </div>
  );
};
export { Signup };
