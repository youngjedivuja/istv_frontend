export const filterUser = (userId, inputPar: string) => {
  return [userId.personId.name, userId.personId.surname]
    .some(prop => prop.toLowerCase().startsWith(inputPar.toLowerCase()));
};


/*
export const sortCategoryDate = (categ1: IUserCategory, categ2: IUserCategory): number => {
  if (!(categ1 && categ2)) {
    return 0;
  }


  const timestamp1 = new Date(categ1.startDate).getTime();
  const timestamp2 = new Date(categ2.startDate).getTime();
  if (timestamp1 > timestamp2) {
    return -1;
  } else if (timestamp1 < timestamp2) {
    return 1;
  } else {
    return 0;
  }
};
*/
