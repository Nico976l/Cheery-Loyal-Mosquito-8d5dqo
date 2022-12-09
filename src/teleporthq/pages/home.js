import React from 'react'

import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Cheery Loyal Mosquito</title>
        <meta property="og:title" content="Cheery Loyal Mosquito" />
      </Helmet>
    </div>
  )
}

export default Home
