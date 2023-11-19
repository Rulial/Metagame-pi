import type { NextPage } from 'next'
import Header from '../components/header'
import ExtLink from '../components/ext-link'
import Features from '../components/features'
import sharedStyles from '../styles/shared.module.css'
import Image from 'next/image'

export default function Index() {
  return (
    <>
    
    <Header />
      
      <div className={sharedStyles.layout}>
        
      <img
          src="/"
          height="640"
          width="640"
          alt="A?I"
        />
        

      
  
        </div>
      
    </>
  )
}
