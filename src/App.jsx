import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TimeCard from './TimeCard'
import UserCard from './UsarCard'

function App() {
  const [count, setCount] = useState(0)

  return (
  
    <div className='pt-5 col-12-sm'>

      <div className="row p-5">

      <div className='col'>
        
        <UserCard imagenusuario="./img/nerfeenelsol.jpeg"  usuario="Jeremy Robson"/>

      </div>

      <div className='col'>

        <TimeCard actividad="Work" horas="24hrs" lw="Last Week - 13hrs" imagen="./img/icon-work.svg" fondo="hsl(15, 100%, 70%)"/>

        <br />

        <TimeCard actividad="Play" horas="15hrs" lw="Last Week - 22hrs" imagen="./img/icon-play.svg" fondo="hsl(195, 74%, 62%)"/>
        
      </div>

      <div className='col'>
        
        <TimeCard actividad="Study" horas="18hrs" lw="Last Week - 27hrs" imagen="./img/icon-study.svg" fondo="hsl(348, 100%, 68%)"/>

        <br />

        <TimeCard actividad="Exercise" horas="4hrs" lw="Last Week - 7hrs" imagen="./img/icon-exercise.svg" fondo="hsl(145, 58%, 55%)"/>
        
      </div>

      <div className='col'>
        
        <TimeCard actividad="Social" horas="9hrs" lw="Last Week - 8hrs" imagen="./img/icon-social.svg" fondo="hsl(264, 64%, 52%)"/>

        <br />

        <TimeCard actividad="Self Care" horas="10hrs" lw="Last Week - 27hrs" imagen="./img/icon-self-care.svg" fondo="hsl(43, 84%, 65%)"/>
        
      </div>
      
      </div>

    </div>

    
        
  )
}

export default App
