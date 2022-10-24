import { Joi } from "celebrate";

const profileRouterSchema = {
  objDetails: {
    name: Joi.string().required(),
    email: Joi.string().email().required(),
    oldpassword: Joi.string().required(),
    password: Joi.string().optional(),
    password_confirmation: Joi.string()
      .valid(Joi.ref("password"))
      .when("password", {
        is: Joi.exist(),
        then: Joi.required(),
      }),
  },
};

const createMarketplace = {
  objDetails: {
    name: Joi.string().required(),
    cnpj: Joi.string().required(),
  },
};

export default { profileRouterSchema, createMarketplace };
