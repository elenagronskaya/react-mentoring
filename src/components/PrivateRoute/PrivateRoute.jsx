import React from 'react';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

import { ROUTE_LOGIN } from '../../constants';
import store from '../../store';
import getUsersSelector from '../../store/user/selectors';
import { getCurrentUserThunk } from '../../store/user/thunk';

const PrivateRoute = ({ children, requiredRole }) => {
	const userData = useSelector(getUsersSelector);

	useEffect(() => {
		store.dispatch(getCurrentUserThunk());
	}, []);

	const { role } = userData;
	if (!userData.isAuth) {
		return <Navigate to={ROUTE_LOGIN} />;
	}

	if (!requiredRole) {
		return children;
	}

	return requiredRole === role ? children : <Navigate to={'/'} />;
};

export default PrivateRoute;
