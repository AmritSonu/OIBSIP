import Validator from "validatorjs";

const registerValidation = (req, res, next) => {
  const validationRules = {
    firstname: "required|string|min:3",
    lastname: "required|string|min:2",
    email: "required|email",
    password: "required|min:6",
  };

  const validation = new Validator(req.body, validationRules);

  if (validation.fails()) {
    res.status(412).send({
      success: false,
      message: "Validation failed",
      data: validation.errors.all(),
    });
  } else {
    next();
  }
};

const loginValidation = (req, res, next) => {
  const validationRules = {
    email: "required|email",
    password: "required|min:6",
  };

  const validation = new Validator(req.body, validationRules);

  if (validation.fails()) {
    res.status(412).send({
      success: false,
      message: "Validation failed",
      data: validation.errors.all(),
    });
  } else {
    next();
  }
};

export { registerValidation, loginValidation };
