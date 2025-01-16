import { Suspense, useState } from 'react'
import './App.css'
import Scene from './components/Scene'
import Info from './components/Info'

function App() {
  const [count, setCount] = useState(0)

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
