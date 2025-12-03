import React from 'react'
import Hero from '../components/Hero'
import Items from '../components/items/Items'
import Two from '../components/Two'
import Deal from '../components/Deal'
import Bestsales from '../components/Bestsales'
import Newest from '../components/Newest/Newest'
import Iphone from '../components/Iphone'
const Home = () => {
  return (
    <div>
        <Hero/>
        <Items/>
        <Iphone/>
        <Newest/>
        <Two/>
        <Bestsales/>
        <Deal/>
    </div>
  )
}

export default Home
