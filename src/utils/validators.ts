import {FormControl, ValidatorFn} from "@angular/forms";

export const convertTimeToFloat = (data: string): number => {
  const hoursMinutes = data.split(/[.:]/);
  const hours = parseInt(hoursMinutes[0] + hoursMinutes[1], 10);
  return hours;
};

export const getTime = (time) => {
  const hours = time.split(/[.:]/);
  return Date.parse("01/01/2011 " + hours[0] + ":" + hours[1] + ":00");
};

export const minFloat = (min: number): ValidatorFn => {
  return (control: FormControl): { [key: string]: boolean } => {
    const val: number = Number(convertTimeToFloat(control.value));
    if (isNaN(val)) {
      return {min: true};
    } else if (!isNaN(min)) {
      return val < min ? {min: true} : null;
    } else {
      return null;
    }
  };
};
