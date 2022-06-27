export const validateEmptyString = (value) => {
	return value && value !== '';
};

export const validateMinLength = (value, minLength) => {
	return value.length >= minLength;
};

export const validateEmptyList = (listValue, minLength) => {
	return listValue && listValue.length !== 0 && listValue.length >= minLength;
};
