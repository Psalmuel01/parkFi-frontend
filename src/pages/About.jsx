import React from 'react'
import Auth from '../ubertoken/auth'
import Callback from '../ubertoken/callback'

const About = () => {
  return (
    <div>
      <h2>About</h2>
      <Auth />
      <Callback />
    </div>
  )
}

export default About