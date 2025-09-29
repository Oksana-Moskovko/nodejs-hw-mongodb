import Joi from 'joi';

export const contactSchema = Joi.object({
    name: Joi.string().min(3).max(20).required().messages({
    'string.base': 'Username should be a string',
    'string.min': 'Username should have at least {#limit} characters',
    'string.max': 'Username should have at most {#limit} characters',
    'any.required': 'Username is required',
  }),
    phoneNumber: Joi.string().min(3).max(20).required().messages({
    'string.min': 'Phone number should have at least {#limit} characters',
    'string.max': 'Phone number should have at most {#limit} characters',
    'any.required': 'Phone number is required',
  }),
    email: Joi.string().min(3).max(20).messages({
        'string.base': 'Username should be a string',
        'string.min': 'Email should have at least {#limit} characters',
        'string.max': 'Email should have at most {#limit} characters',
    }),
    isFavourite: Joi.boolean().messages({
        'boolean.base': 'The value is either not a boolean or could not be cast to a boolean from one of the truthy or falsy values.',
    }),
    contactType: Joi.string().valid('work', 'home', 'personal').required().messages({
        'string.min': 'Contact type should have at least {#limit} characters',
        'string.max': 'Contact type should have at most {#limit} characters',
        'any.required': 'Contact type is required',
    }),
});

export const updateContactSchema = Joi.object({
  name: Joi.string().min(3).max(20).messages({
    'string.min': 'Username should have at least {#limit} characters',
    'string.max': 'Username should have at most {#limit} characters',
  }),
    phoneNumber: Joi.string().min(3).max(20).messages({
    'string.min': 'Phone number should have at least {#limit} characters',
    'string.max': 'Phone number should have at most {#limit} characters',
  }),
    email: Joi.string().min(3).max(20).messages({
        'string.base': 'Username should be a string',
        'string.min': 'Email should have at least {#limit} characters',
        'string.max': 'Email should have at most {#limit} characters',
    }),
    isFavourite: Joi.boolean().messages({
        'boolean.base': 'The value is either not a boolean or could not be cast to a boolean from one of the truthy or falsy values.',
    }),
    contactType: Joi.string().valid('work', 'home', 'personal').messages({
        'string.min': 'Contact type should have at least {#limit} characters',
        'string.max': 'Contact type should have at most {#limit} characters',
    }),
});