import axios from 'axios';
import { AVATAR_REQUEST, AVATAR_SUCCESS, AVATAR_FAIL } from '../Constants/AvatarConstants';
const url_new = 'https://dp-balo-store-api.vercel.app';

export const ListAvatar = () => async (dispatch) => {
    try {
        dispatch({ type: AVATAR_REQUEST });
        const { data } = await axios.get(`${url_new}/api/avatar`);
        dispatch({ type: AVATAR_SUCCESS, payload: data });
    } catch (error) {
        dispatch({
            type: AVATAR_FAIL,
            payload: error.response && error.response.data.message ? error.response.data.message : error.message,
        });
    }
};
