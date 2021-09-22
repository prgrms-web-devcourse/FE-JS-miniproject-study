export const request = async () => {
  try {
    const res = await fetch('https://free-quotes-api.herokuapp.com/')

    if (!res.ok) {
      throw new Error('Fail to fetch API data')
    }

    return await res.json()
  } catch (e) {
    alert(e.message)
  }
}
