import { Joi } from "celebrate";

const bodySchema = {
  objDetails: {
    name: Joi.string().required(),
    slug: Joi.string().required(),
    price: Joi.number().required(),
    description: Joi.string().required(),
    release_date: Joi.string().required(),
    cpumin: Joi.string().required(),
    videocardmin: Joi.string().required(),
    rammemorymin: Joi.string().required(),
    storagemin: Joi.string().required(),
    cpurec: Joi.string().required(),
    videocardrec: Joi.string().required(),
    rammemoryrec: Joi.string().required(),
    storagerec: Joi.string().required(),
    category: Joi.string().required(),
    media: Joi.array().items(
      { mediaurl: Joi.string().required() }, // media = [{},{},{},{},{}]
      { mediaurl: Joi.string().required() },
      { mediaurl: Joi.string().required() },
      { mediaurl: Joi.string().required() },
      { mediaurl: Joi.string().required() }
    ),
  },
};

export default bodySchema;
