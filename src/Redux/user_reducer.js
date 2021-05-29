const SET_USER = 'user_reducer/SET_USER';
const DELETE_USER = 'user_reducer/DELETE_USER';

const initialState = {
    isAuth: false,
    username: null,
    email: null,
    password: null,
};

const userReducer = (state=initialState, action) => {
    switch (action.type) {
        case SET_USER:
            return {
                ...state,
                isAuth: true,
                ...action.payload,
            }

        case DELETE_USER:
            return {
                ...state,
                isAuth: false,
                username: null,
                email: null,
                password: null,
            }

        default: return state
    }
}

export const login_user = (username, email, password) => (dispatch) => {
    dispatch(setUser({username, email, password}));
}

export const logout_user = () => (dispatch) => {
    dispatch(deleteUser());
}

const setUser = (payload) => ({type: SET_USER, payload});
const deleteUser = () => ({type: DELETE_USER});

export default userReducer;