export default function handler(req, res) {
  const clientId = process.env.OAUTH_CLIENT_ID
  const protocol = req.headers.host?.includes('localhost') ? 'http' : 'https'
  const redirectUri = `${protocol}://${req.headers.host}/api/callback`
  const state = Math.random().toString(36).slice(2)

  const authorizeUrl = new URL('https://github.com/login/oauth/authorize')
  authorizeUrl.searchParams.set('client_id', clientId)
  authorizeUrl.searchParams.set('redirect_uri', redirectUri)
  authorizeUrl.searchParams.set('scope', 'repo,user')
  authorizeUrl.searchParams.set('state', state)

  res.writeHead(302, { Location: authorizeUrl.toString() })
  res.end()
}
