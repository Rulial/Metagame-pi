import type { NextPage } from 'next'
import Header from '../components/header'
import ExtLink from '../components/ext-link'
import Features from '../components/features'
import sharedStyles from '../styles/shared.module.css'
import Image from 'next/image'

export default function Index() {
  return (
    <>
      <Header titlePre="METAGAME" />
      
      <div className={sharedStyles.layout}>
        
        <img
          src="/metaverse02.png"
          height="1080"
          width="1920"
          alt="metaverse"
        />
      
        <h2>
          A GAME THAT IS PLAYING ITSELF
          
        </h2>

        <Features />

    <img
          src="/metafow03.png"
          height="689"
          width="1920"
          alt="metaverse"
        />

        <div className="explanation">
          
            
          <p>
        ALL WORK AND NO PLAY MAKES JACK A DULL BOY / ALL WORK AND NO PLAY MAKES JILL A LAZY GIRL / ALL WORK AND NO PLAY MAKES JACK A DULL BOY / ALL WORK AND NO PLAY MAKES JILL A LAZY GIRL / ALL WORK AND NO PLAY MAKES JACK A DULL BOY / ALL WORK AND NO PLAY MAKES JILL A LAZY GIRL / ALL WORK AND NO PLAY MAKES JACK A DULL BOY / ALL WORK AND NO PLAY MAKES JILL A LAZY GIRL / ALL WORK AND NO PLAY MAKES JACK A DULL BOY / ALL WORK AND NO PLAY MAKES JILL A LAZY GIRL / ALL WORK AND NO PLAY MAKES JACK A DULL BOY / ALL WORK AND NO PLAY MAKES JILL A LAZY GIRL / ALL WORK AND NO PLAY MAKES JACK A DULL BOY / ALL WORK AND NO PLAY MAKES JILL A LAZY GIRL / ALL WORK AND NO PLAY MAKES JACK A DULL BOY / ALL WORK AND NO PLAY MAKES JILL A LAZY GIRL / ALL WORK AND NO PLAY MAKES JACK A DULL BOY / ALL WORK AND NO PLAY MAKES JILL A LAZY GIRL / ALL WORK AND NO PLAY MAKES JACK A DULL BOY / ALL WORK AND NO PLAY MAKES JILL A LAZY GIRL /
          </p>
        </div>
      </div>
    </>
  )
}
