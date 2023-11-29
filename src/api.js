export async function getAllTracks() {
  const response = await fetch(
    'https://skypro-music-api.skyeng.tech/catalog/track/all/',
  )
  const data = await response.json()
  return data
}

export async function fetchRegister({ email, password, username}) {
  const response = await fetch(
    'https://skypro-music-api.skyeng.tech/user/signup/',
    {
      method: 'POST',
      body: JSON.stringify({
        email: email,
        password: password,
        username: username,
      }),
      headers: {
        'content-type': 'application/json',
      },
    },
  )
  if (!response.ok) {
    const errorData = await response.json()
    console.log(errorData)
    throw new Error('Ошибка регистрации')
  }
  const data = await response.json()
  return data
}

export async function fetchLogin({ email, password }) {
  const response = await fetch(
    'https://skypro-music-api.skyeng.tech/user/login/',
    {
      method: 'POST',
      body: JSON.stringify({
        email: email,
        password: password,
      }),
      headers: {
        'content-type': 'application/json',
      },
    },
  )
  if (!response.ok) {
    const errorData = await response.json()
    console.log(errorData)
    throw new Error('Ошибка входа')
  }
  const data = await response.json()
  return data;
}
