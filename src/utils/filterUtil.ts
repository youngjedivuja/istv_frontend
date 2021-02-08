export const filterUser = (userId, inputPar: string) => {
  return [userId.personId.name, userId.personId.surname]
    .some(prop => prop.toLowerCase().startsWith(inputPar.toLowerCase()));
};

export const filterProduct = (productId, inputPar: string) => {
  return [productId.productCode, productId.fullName]
    .some(prop => prop.toLowerCase().startsWith(inputPar.toLowerCase()));
};


