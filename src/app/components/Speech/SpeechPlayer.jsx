import React from 'react'
import {IconVolume} from '@tabler/icons-react'
import { u } from 'framer-motion/client'

function SpeechPlayer({value}) {

  function handleClick(){
    const utterance = new SpeechSynthesisUtterance(value);
    window.speechSynthesis.speak(utterance);
  }
  return (
    <IconVolume size={22} className='' onClick={handleClick}/>
  )
}

export default SpeechPlayer;