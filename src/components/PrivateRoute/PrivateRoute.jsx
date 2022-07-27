import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import PropTypes from 'prop-types';

import { ROUTE_LOGIN } from '../../constants';
import { store } from '../../store';
import getUsersSelector from '../../store/user/selectors';
import { getCurrentUserThunk } from '../../store/user/thunk';

const PrivateRoute = ({ children, requiredRole }) => {
	const { role, isAuth } = useSelector(getUsersSelector);

	useEffect(() => {
		store.dispatch(getCurrentUserThunk());
	}, []);

	if (!isAuth) {
		return <Navigate to={ROUTE_LOGIN} />;
	}

	if (!requiredRole) {
		return children;
	}

	return requiredRole === role ? children : <Navigate to={'/courses'} />;
};

PrivateRoute.propTypes = {
	children: PropTypes.node.isRequired,
	requiredRole: PropTypes.string,
};

PrivateRoute.defaultProps = {
	requiredRole: '',
};

export default PrivateRoute;
