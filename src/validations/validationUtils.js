const Joi = require('joi');

const asyncValidateData = async (data, schema) => {
  try {
    await schema.validateAsync(data, { abortEarly: false, warnings: true});
    // Validation successful
  } catch (error) {
    throw error;
  }
};

module.exports = {
  asyncValidateData,
};
