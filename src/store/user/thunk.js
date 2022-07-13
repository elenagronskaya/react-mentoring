import { getUserMe } from '../../api';
import { getUserMeSuccess, logoutUser } from './actions';

const getCurrentUser = () => {
	return async function (dispatch) {
		try {
			const response = await getUserMe();
			const user = response.data.result;
			dispatch(getUserMeSuccess(user.name, user.email, user.role));
		} catch (err) {
			dispatch(logoutUser());
		}
	};
};

export default getCurrentUser;
