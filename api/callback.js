export default async function handler(req, res) {
  const { code } = req.query

  if (!code) {
    res.status(400).send('Missing OAuth code')
    return
  }

  const tokenRes = await fetch('https://github.com/login/oauth/access_token', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
    body: JSON.stringify({
      client_id: process.env.OAUTH_CLIENT_ID,
      client_secret: process.env.OAUTH_CLIENT_SECRET,
      code,
    }),
  })

  const tokenData = await tokenRes.json()

  if (tokenData.error) {
    res.status(400).send(`OAuth error: ${tokenData.error_description || tokenData.error}`)
    return
  }

  const payload = JSON.stringify({ token: tokenData.access_token, provider: 'github' }).replace(
    /</g,
    '\\u003c',
  )

  res.setHeader('Content-Type', 'text/html')
  res.status(200).send(`<!doctype html>
<html>
  <body>
    <script>
      (function () {
        var payload = ${payload}
        function receiveMessage(e) {
          window.removeEventListener('message', receiveMessage, false)
          window.opener.postMessage(
            'authorization:github:success:' + JSON.stringify(payload),
            e.origin,
          )
        }
        window.addEventListener('message', receiveMessage, false)
        window.opener.postMessage('authorizing:github', '*')
      })()
    </script>
  </body>
</html>`)
}
