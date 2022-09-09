import * as stytch from 'stytch'

export default function handler(req, res) {
  const client = new stytch.Client({
    // eslint-disable-next-line camelcase
    project_id: process.env.STYTCH_PROJECT_ID || '',
    secret: process.env.STYTCH_SECRET || '',
    env: process.env.NODE_ENV == 'production' ? stytch.envs.live : stytch.envs.test,
  })

  const userid = req.query.userid
  client.users
    .get(userid)
    .then((response) => {
      
      console.log(response)
      res.status(200).json(response)
    })
    .catch((err) => {
      console.log(err)
      res.send('There was an error when querying the user.')
    })
}
