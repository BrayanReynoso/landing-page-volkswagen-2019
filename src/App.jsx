import { Suspense, useState } from 'react'
import './App.css'
import Scene from './components/Scene'
import Info from './components/Info'

function App() {

  return (
    <>
      <div className='scene_container'>
        <Info/>
        <Suspense fallback={<div>Cargando...</div>}>
          <Scene/>
        </Suspense>
      </div>
    </>
  )
}

export default App
