const request = async (url, options = {}) => {
  try {
    const res = await fetch(url, {
      header: {
        'Content-Type': 'application/json',
      },
      ...options,
    })

    if (res.ok) {
      return await res.json()
    }

    throw new Error('API 요청 에러')
  } catch (e) {
    console.log(e.messages)
  }
}

export const requestGet = async (url, options = {}) =>
  await request(url, options)
