import validator from "validator";

export const isEmpty = (chain) => {
  return chain.length > 0;
};
export const isNumber = (chain) => {
  return /^\d+(\.\d+)?$/.test(chain);
};
export const isString = (chain) => {
  return validator.isAlpha(chain);
};
export const isAlphaNumeric = (chain) => {
  return /^[a-zA-Z0-9!@#$%^&*(),.?":{}|<>_-]+$/.test(chain);
};

export const isPositiveInteger = (number) => {
  return typeof number === "number" && number >= 0 && Number.isInteger(number);
};
