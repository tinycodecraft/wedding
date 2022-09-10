import React, { Fragment, useEffect } from 'react'
import { navigate, PageProps } from 'gatsby'


export default function Authenticate({ location: { search} }: PageProps) {
  useEffect(() => {
    
    const token = new URLSearchParams(search).get('token')
    if (typeof token !== 'string') {
      throw new Error('No valid token provided.')
    }
    const authenticate = async () => {
      try {
        const response = await fetch(`/api/authenticate?token=${token}`)
        if (response.ok) {
          response.json().then((data) => {
            
            // TODO: You could add a call to your database to get additional user data here
            
            navigate('/', {
              state: {
                user: data.user_id,
                session: data.session,
                sessionToken: data.session_token,
              },
            })
          })
        } else {
          navigate('/Login')
        }
      } catch (err) {
        console.error('Error authenticating magic link')
        navigate('/Login')
      }
    }
    authenticate()
  }, [search])

  return (<Fragment />)
}
