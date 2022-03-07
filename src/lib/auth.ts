interface AccessToken {
  access_token: string
  token_type: string
  expires_in: number
}

export const getAccessToken = async () => {
  const token = Buffer.from(
    `${process.env.NEXT_PUBLIC_CLIENT_ID}:${process.env.NEXT_PUBLIC_CLIENT_SECRET}`
  ).toString('base64')

  const url = new URL('https://accounts.spotify.com/api/token')
  const authOption = {
    method: 'POST',
    body: `grant_type=refresh_token&refresh_token=${process.env.NEXT_PUBLIC_REFRESH_TOKEN}`,
    headers: {
      Authorization: 'Basic ' + token,
      'Content-Type': 'application/x-www-form-urlencoded',
    },
  }

  try {
    const res = await fetch(url.href, authOption)
    const { access_token } = (await res.json()) as AccessToken
    return access_token
  } catch (err) {
    console.error('cannot fetch accessToken due to some reasons')
    console.error('err:', err)
    return ''
  }
}