import React from 'react'
import Categories from '../../components/Categories/Categories'
import Contact from '../../components/Contact/Contact'
import FeatureProducts from '../../components/FeaturedProducts/FeatureProducts'
import Slider from '../../components/Slider/Slider'
import './Home.scss'

const Home = () => {
  return (
    <div className='home'><Slider/>
    <FeatureProducts type='featured'/>
    <Categories/>
    <FeatureProducts type='trending'/>
    <Contact/>
    </div>
  )
}

export default Home