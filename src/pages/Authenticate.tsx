import React, { Fragment, useEffect, useState } from 'react'
import { Link, navigate, PageProps } from 'gatsby'
import styled from '@emotion/styled'
import useTimeOut from '../components/Hooks/useTimeOut'
import { ResponseAuth } from './Pag'
import TextPcs from '../components/Elements/Pieces/TextPcs'
import { useMediaQuery } from '@mantine/hooks'
import { Layout } from '../components/Layout/Layout'

const WaitingWrapper = styled.h2`
  margin: 0 2rem;
  text-align: center;
  
`
const LinkEl = styled(Link)`
  text-decoration: none;
`

const initData: ResponseAuth = { statusText: 'Please waiting the authentication...' }

export default function Authenticate({ location: { search } }: PageProps) {
  const desktop = useMediaQuery(`(min-width: ${768 / 16}em`)
  const mode = desktop ? 'desktop' : 'phone'

  const [data, setData] = useState(initData)
  useEffect(() => {
    if (!(data && data.state)) {
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
              setData({
                state: {
                  user: String(data.user.emails[0]?.email ?? data.user_id),
                  session: String(data.session),
                  sessionToken: String(data.session_token),
                },
                statusText: 'Authenticated',
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
    } else {
      console.log('try to go back home')
      navigate('/', { state: data.state })
    }
  }, [search])

  return (
    <Layout>
      <WaitingWrapper>{data.statusText}</WaitingWrapper>
      {data?.state && (
        <WaitingWrapper>
          <LinkEl to='/' {...{state: data.state}} >
            <TextPcs cp='h3' toBig={true} mode={mode}>
              Join Us
            </TextPcs>
          </LinkEl>
        </WaitingWrapper>
      )}
    </Layout>
  )
}
