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
        <a href="https://pathintegral0.notion.site/Ventures-f538ee0d88a44ed8ab2130cf692084bd?pvs=4">
      <img
          src="/mg01.png"
          height="640"
          width="640"
          alt="A?I"
        />
        </a>

      
  
        </div>
      
    </>
  )
}
