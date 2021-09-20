export const API_END_POINT = "https://free-quotes-api.herokuapp.com/";

export const request = async () => {
  try {
    const res = await fetch(API_END_POINT);

    if (!res.ok) {
      throw new Error("API 호출 에러");
    }
    return await res.json();
  } catch (e) {
    console.error(e.message);
  }
};
