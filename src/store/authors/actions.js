import AUTHORS_TYPES from './types';

export const authorListSuccess = (authors) => {
	return { type: AUTHORS_TYPES.LIST_SUCCESS, payload: authors };
};

export const authorCreateSuccess = (author) => {
	return { type: AUTHORS_TYPES.LIST_CREATE_SUCCESS, payload: author };
};

export const authorListError = (errorText) => {
	return { type: AUTHORS_TYPES.LIST_ERROR, payload: errorText };
};

export const authorCreateError = (errorText) => {
	return { type: AUTHORS_TYPES.CREATE_ERROR, payload: errorText };
};
