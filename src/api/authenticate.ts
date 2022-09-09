import * as stytch from 'stytch'

export default function handler(req, res) {
  const client = new stytch.Client({
    // eslint-disable-next-line camelcase
    project_id: process.env.STYTCH_PROJECT_ID || '',
    secret: process.env.STYTCH_SECRET || '',
    env: process.env.NODE_ENV == 'production' ? stytch.envs.live : stytch.envs.test,
  })

  const token = req.query.token
  client.magicLinks
    .authenticate(token, {
      // eslint-disable-next-line camelcase
      session_duration_minutes: 60,
    })
    .then((response) => {
      res.status(200).json(response)
    })
    .catch((error) => {
      console.log(error)
      res.send('There was an error authenticating the user.')
    })
}
