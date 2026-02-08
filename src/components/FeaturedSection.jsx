import React from 'react'
import Title from './Title'
import { dummyCarData } from '../assets/assets'

const FeaturedSection = () => {
  return (
    <div>
        <div>
        <Title title="Featured Vehicles" subTitle="Explore our selection of premium vehicles available for your next adventures."/>
        </div>
   <div className='grid'>
    {
    dummyCarData.map()
    }
   </div>
    </div>
  )
}

export default FeaturedSection

