import "animate.css";
import { useForm } from "react-hook-form";
import { NavLink } from "react-router-dom";
import { useAppNavigate } from "../../../utils/useAppNavigate";
import { useLoginMutation } from "../../apis/authAPI";
import { useAuth } from "../../ContextAPIs/useAuthContext";
function Login() {
  const { goTo } = useAppNavigate();
  const { login: isLogin } = useAuth();
  const [login, { data: userLogin, isLoading, error }] = useLoginMutation();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  if (userLogin) {
    const { userId } = userLogin;
    console.log(userId);

    localStorage.setItem("user_info", JSON.stringify(userId));
  }
  const onSubmit = async (data) => {
    try {
      const response = await login(data);
      if (response) {
        isLogin();
      }
    } catch (error) {
      console.error("Login error:", error.message);
    }
    if (isLogin) {
      setTimeout(() => {
        goTo("/pizzas");
      }, 2000);
    }
  };

  return (
    <div>
      {userLogin && (
        <p className="font-bold text-lg my-10 animate__animated animate__backInUp font-serif text-center">
          All set , Login Successfully :)
        </p>
      )}
      <div className="max-w-md relative flex flex-col p-4 rounded-md text-black border mx-auto mt-20">
        <div className="text-2xl font-bold mb-2 text-center">
          Welcome back to
          <span className="text-mainAdditionalcolor-150">App</span>
        </div>

        <div className="text-sm font-bold mb-4 text-center text-mainAdditionalcolor-150">
          Log in to your account
        </div>

        {error && (
          <p className="text-red-600 text-sm my-5 font-bold animate__animated animate__shakeX">
            Error: Check Your Email and Password..
          </p>
        )}

        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-3">
          <div className="block relative">
            <label
              htmlFor="email"
              className="block text-gray-600 cursor-text text-sm leading-[140%] font-normal mb-2"
            >
              Email
            </label>
            <input
              type="text"
              id="email"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
                  message: "Email is not valid",
                },
              })}
              className="rounded border border-gray-200 text-sm w-full font-normal leading-[18px] text-black tracking-[0px] appearance-none block h-11 m-0 p-[11px] focus:ring-2 ring-offset-2  ring-gray-900 outline-0"
              autoComplete="email"
            />
            {errors.email && (
              <p className="text-red-600 text-sm">{errors.email.message}</p>
            )}
          </div>
          <div className="block relative">
            <label
              htmlFor="password"
              className="block text-gray-600 cursor-text text-sm leading-[140%] font-normal mb-2"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Password should be at least 6 characters",
                },
                pattern: {
                  value: /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s)(?=.*[!@#$*])/,
                  message:
                    "Password should contain at least one Uppercase letter, Lowercase letter, Digit, and Special symbol.",
                },
              })}
              className="rounded border border-gray-200 text-sm w-full font-normal leading-[18px] text-black tracking-[0px] appearance-none block h-11 m-0 p-[11px] focus:ring-2 ring-offset-2 ring-gray-900 outline-0"
              autoComplete="current-password"
            />
            {errors.password && (
              <p className="text-red-600 text-sm">{errors.password.message}</p>
            )}
          </div>
          <div>
            <a className="text-sm text-mainAdditionalcolor-150" href="#">
              Forgot your password?
            </a>
          </div>
          <button
            type="submit"
            className="bg-mainAdditionalcolor-150 w-max m-auto px-6 py-2 rounded text-sm font-bold"
          >
            {isLoading ? "Logging..." : "Login"}
          </button>
        </form>
        <NavLink
          className="text-sm text-center mt-[1.6rem] font-semibold"
          to="/signUp"
        >
          Don’t have an account yet?{" "}
          <span className="text-sm text-mainAdditionalcolor-150">
            Sign up for free!
          </span>
        </NavLink>
      </div>
    </div>
  );
}

export { Login };
