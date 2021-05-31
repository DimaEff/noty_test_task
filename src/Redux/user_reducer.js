const SET_USER = 'user_reducer/SET_USER';
const DELETE_USER = 'user_reducer/DELETE_USER';

const initialState = {
    user: null,
};

const userReducer = (state=initialState, action) => {
    switch (action.type) {
        case SET_USER:
            return {
                ...state,
                user: {...action.payload},
            }

        case DELETE_USER:
            return {
                ...state,
                user: null,
            }

        default: return state
    }
}

export const loginUser = (userData) => (dispatch) => {
    dispatch(setUser(userData));
}

export const logoutUser = () => (dispatch) => {
    dispatch(deleteUser());
}

const setUser = (payload) => ({type: SET_USER, payload});
const deleteUser = () => ({type: DELETE_USER});

export default userReducer;