import React from 'react'
import LoginPcs from '../components/Elements/LoginPcs'
import { SDKProductTypes, Stytch } from "@stytch/stytch-react";


const stytchProps = {
  loginOrSignupView: {
    products: [SDKProductTypes.emailMagicLinks],
    emailMagicLinksOptions: {
      loginRedirectURL: process.env.LOGIN_MAGIC_LINK_URL || '',
      loginExpirationMinutes:30,
      signupRedirectURL:  process.env.CREATE_USER_MAGIC_LINK_URL || '',
      signupExpirationMinutes: 30,
    },
  },
  style: {
    fontFamily: '"Helvetica New", Helvetica, sans-serif',
    button: { backgroundColor: "#106ee9" },
    input: { textColor: "#090909" },
    headerText: {
      visible: true,
    },
  },
  publicToken: process.env.STYTCH_PUBLIC_TOKEN,
  callbacks: {
    onEvent: (data) => {
      console.log(data);
      // TODO: check whether the user exists in your DB
      // const userExists = false;
      // if (data.eventData.type === 'USER_EVENT_TYPE' && !userExists) {
      //   fetch("/users", {
      //     method: "POST",
      //     body: JSON.stringify({
      //       userId: data.eventData.userId,
      //       email: data.eventData.email,
      //     }),
      //   });
      // }
    },
    onSuccess: (data) => console.log(data),
    onError: (data) => console.log(data),
  },
};


export default function Login() {
  return (
    <LoginPcs>
            <Stytch
              publicToken={stytchProps.publicToken}
              loginOrSignupView={stytchProps.loginOrSignupView}
              style={stytchProps.style}
              callbacks={stytchProps.callbacks}
            />      
    </LoginPcs>
  )
}
