
export const isEmpty = (chain) => {
  return chain.length > 0;
};
export const isNumber = (chain) => {
  return /^\d+(\.\d+)?$/.test(chain);
};
export const isString = (chain) => {
  return /^[a-zA-Z\s]+$/.test(chain);
};

export const isAlphaNumeric = (chain) => {
  // Verificar si la cadena contiene solo números
  if (/^\d+$/.test(chain)) {
    return false;
  }

  // Verificar si la cadena contiene solo espacios
  if (/^\s+$/.test(chain)) {
    return false;
  }

  // Verificar si la cadena contiene al menos un carácter alfanumérico o espacio
  return /[a-zA-Z0-9\s]/.test(chain);
}
export const isPhone=(chain)=>{
  return  /^\d{10}$/.test(chain);
}


export const isPositiveInteger = (number) => {
  return typeof number === "number" && number >= 0 && Number.isInteger(number);
};
export const isEmail = (email) => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
};

