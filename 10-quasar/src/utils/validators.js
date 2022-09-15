import { date } from 'quasar';

export const firstDayTerm = '01/01/2022';
export const lastDayTerm = '31/12/2023';
export const maximumTerm = 18;
export const minMonthsAids = 3;
export const maxCaracters = 18;
export const minCaracters = 3;
export const postalCodeLength = 5;

export const emailPattern =
  /^(?=[a-zA-Z0-9@._%+-]{6,254}$)[a-zA-Z0-9._%+-]{1,64}@(?:[a-zA-Z0-9-]{1,63}\.){1,8}[a-zA-Z]{2,63}$/;

export const dateFormatPattern = /^([0-2][0-9]|3[0-1])(\/|-)(0[1-9]|1[0-2])\2(\d{4})$/;

export const phonePattern = /^\d{9}$/;

export const numericPattern = /^[0-9]+([.,][0-9]{1,2})?$/;

export const integerPattern = /^[0-9]+$/;

export const numberBetween1And100Pattern = /(^100([.]0{1,2})?)$|(^\d{1,2}([.]\d{1,2})?)$/;

export const email = (val) => {
  if (!val || emailPattern.test(val)) {
    return true;
  } else {
    return 'Please enter a valid email address';
  }
};

export const percentage = (val) => {
  if (!val || numberBetween1And100Pattern.test(val)) {
    return true;
  } else {
    return 'The value must be between 1 and 100';
  }
};

export const nummericAndPerct = (val) => {
  if (!val || numericPattern.test(val) || numberBetween1And100Pattern.test(val)) {
    return true;
  } else {
    return `The value must be a number or a percentage (between 1 and 100 and ending with ' % ')`;
  }
};

export const required = (val) => !!val || val === 0 || 'Required field';

export const smallerTerm = (val) =>
  val <= maximumTerm || `The field must be less than or equal to ${maximumTerm}`;

export const noNegative = (val) => {
  if (val < 0) {
    return 'The field cannot contain negative values';
  } else {
    return true;
  }
};

export const higherThanMinMonthsAids = (val) =>
  val >= minMonthsAids || `The field must be greater than or equal to ${minMonthsAids}`;

export const postalCode = (val) =>
  val.length === postalCodeLength ||
  `The field must have a length of ${postalCodeLength} characters`;

export const validDate = (val) =>
  dateFormatPattern.test(val) || 'Please enter a valid date (dd/mm/yyyy)';

export const phone = (val) => {
  if (!val || phonePattern.test(val)) {
    return true;
  } else {
    return 'Invalid phone number (9 digits without spaces)';
  }
};

export const checkLessFirstDayTerm = (val) => {
  var datearray = val.split('/');
  var dateStart = datearray[1] + '/' + datearray[0] + '/' + datearray[2];
  dateStart = new Date(dateStart);
  const formatDateFirstDayTerm = new Date(firstDayTerm);
  if (dateStart >= formatDateFirstDayTerm) {
    return true;
  } else {
    return `Date less than ${firstDayTerm}`;
  }
};

export const checkHigherLastDayTerm = (val) => {
  let dateEndDate = date.extractDate(val, 'DD/MM/YYYY');
  dateEndDate = new Date(dateEndDate);

  let formatDateLastDayTerm = date.extractDate(lastDayTerm, 'DD/MM/YYYY');
  formatDateLastDayTerm = new Date(formatDateLastDayTerm);

  if (dateEndDate <= formatDateLastDayTerm) {
    return true;
  } else {
    return `Date higher than ${lastDayTerm}`;
  }
};

export const numeric = (val) =>
  !val || numericPattern.test(val) || 'Numeric field (with 2 decimal places)';

export const integer = (val) => !val || integerPattern.test(val) || 'Numeric field (no decimals)';

export const requiredOption = (val) => (val && val.length > 0) || 'Select at least one option';

export const maxLength = (val) => {
  if (val.length <= maxCaracters) return true;
  else return `The field must be less than or equal to ${maxCaracters} characters`;
};

export const nomLength = (val) => {
  if (val.length >= minCaracters) return true;
  else return `The name or address must contain at least ${minCaracters} characters`;
};

export const isValidUrl = (val) => {
  const urlPattern = new RegExp(
    '^(https?:\\/\\/)?' + // validate protocol
      '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // validate domain name
      '((\\d{1,3}\\.){3}\\d{1,3}))' + // validate OR ip (v4) address
      '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // validate port and path
      '(\\?[;&a-z\\d%_.~+=-]*)?' + // validate query string
      '(\\#[-a-z\\d_]*)?$',
    'i'
  ); // validate fragment locator

  if (urlPattern.test(val)) {
    return true;
  } else {
    return 'This url is not properly formatted, please check it';
  }
};
