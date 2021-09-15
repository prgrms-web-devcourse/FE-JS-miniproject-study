const API_END_POINT = 'https://free-quotes-api.herokuapp.com';

export const request = async (url) => {
    try {
        const res = await fetch(`${API_END_POINT}${url}`);
        if (!res.ok) {
            throw new Error('API call fail');
        }

        return await res.json();
    } catch (error) {
        alert(error.message);
    }
};
