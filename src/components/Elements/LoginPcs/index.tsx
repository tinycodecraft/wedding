import React, { PropsWithChildren } from 'react'
import styled from '@emotion/styled'

const LoginWrapEl = styled.div`
  color: '#232129';
  padding: 96;
`
const LoginHeadEl = styled.h1`
  margin-top: 0;
  margin-bottom: 64;
`
const LoginContentEl = styled.div`
  display: flex;
  justify-content: space-around;
`
const SignInWrapEl = styled.div`
  border: 2px solid #666;
  border-radius: 16px;
  margin: 8px;
  padding: 16px;
`

export default function LoginPcs({ children }: PropsWithChildren) {
  return (
    <LoginWrapEl>
      <LoginHeadEl>Intend to Share our Joy</LoginHeadEl>
      <LoginContentEl>
        <div className='welcome-container'>
          <p>Please leave your email and verify by passwordless login. Many Thanks!</p>
        </div>
        <SignInWrapEl>{children}</SignInWrapEl>
      </LoginContentEl>
    </LoginWrapEl>
  )
}
