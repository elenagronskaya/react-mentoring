import { configureStore } from '@reduxjs/toolkit';

import rootReducer from './rootReducer';

// const initialStore = {
//     user: {
//         isAuth: boolean, // default value - false. After success login - true
//         name: string, // default value - empty string. After success login - name of user
//         email: string, // default value - empty string. After success login - email of user
//         token: string, // default value - empty string or token value from localStorage. After success login - value from API /login response. See Swagger.
//     },
//     courses: [], // list of courses. Default value - empty array. After success getting courses - value from API /courses/all response. See Swagger.
//     authors: [] //  list of authors. Default value - empty array. After success getting authors - value from API /authors/all response. See Swagger.
// }
const store = configureStore({ reducer: rootReducer, devTools: true });

export default store;
