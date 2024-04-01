import Joi from "joi";

export const productShema = Joi.object({
  name: Joi.string().required(),
  price: Joi.number().required(),
  description: Joi.string(),
  //   gallery: Joi.array().items(Joi.string()),
  image: Joi.string(),
  // category: Joi.string().required(),
  discount: Joi.number(),
  featured: Joi.boolean(),
  countInstock: Joi.number(),
});
