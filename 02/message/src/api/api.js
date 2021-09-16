export const getQuote = async () => {
  try {
    const res = await fetch(`https://free-quotes-api.herokuapp.com/`);

    if (!res.ok) {
      throw new Error("API Call Fail");
    }

    return await res.json();
  } catch (e) {
    alert(e.message);
  }
};
