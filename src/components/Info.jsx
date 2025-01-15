import React from "react";

export default function Info() {
    return (
        <div className='pages'>
            <div className='pages_wrapper'>
                <div
                    id='page-1'
                    className='page page--welcome page--intro'>
                    <h1 className='message'>Volkswagen Jetta 2019</h1>
                </div>
                <div
                    id='page-2'
                    className='page page--headlights page--hidden'>
                    <h1 className='message'>Faros</h1>
                    <p className='message--sub'>
                        Los faros del Volkswagen Jetta 2019 ofrecen un diseño moderno y elegante,
                        combinando tecnología LED de alta eficiencia con un enfoque en visibilidad y seguridad,
                        ideales para cualquier condición de manejo.
                    </p>
                </div>
                <div
                    id='page-3'
                    className='page page--design page--hidden'>
                    <h1 className='message'>Diseño</h1>
                    <p className='message--sub'>
                        El diseño del Volkswagen Jetta 2019 destaca por sus líneas aerodinámicas y modernas,
                        una silueta elegante y detalles que combinan funcionalidad con estilo,
                        reflejando un carácter dinámico y sofisticado.
                    </p>
                </div>


            </div>
        </div>
    )
}
