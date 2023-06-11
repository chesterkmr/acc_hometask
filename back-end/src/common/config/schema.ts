import * as Joi from 'joi';

export const configSchema = Joi.object({
  DB_HOST: Joi.string().required(),
  DB_PORT: Joi.number().required(),
  DB_NAME: Joi.string().required(),
  DB_USERNAME: Joi.string().required(),
  DB_PASSWORD: Joi.string().required(),
  PORT: Joi.number().required(),
  JWT_SECRET: Joi.string().required(),
});
