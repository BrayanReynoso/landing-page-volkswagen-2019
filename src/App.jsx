import { Suspense, useState } from 'react'
import './App.css'
import Scene from './components/Scene'
import Info from './components/Info'
import useSEO from './hooks/useSEO';

function App() {
  useSEO(
    'Volkswagen Jetta 2019',
    'Descubre las características del Volkswagen Jetta 2019, un vehículo moderno y elegante con un diseño aerodinámico y tecnología de vanguardia.'
);
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
