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
                <div id="page-4" class="page page--tires page--hidden">
                    <h1 class="message">Llantas</h1>
                    <p class="message--sub">
                        Las llantas del Volkswagen Jetta 2019 están diseñadas para ofrecer una excelente tracción y durabilidad en diversos terrenos. Con un diseño deportivo, las llantas garantizan una conducción estable y un estilo moderno que complementa la estética del vehículo.
                    </p>
                </div>

                <div id="page-5" class="page page--interiors page--hidden">
                    <h1 class="message">Interiores</h1>
                    <p class="message--sub">
                        El interior del Volkswagen Jetta 2019 fusiona lujo y tecnología. Con asientos de alta calidad, detalles en piel y una pantalla táctil de última generación, cada viaje se convierte en una experiencia placentera y cómoda. Además, cuenta con un sistema de sonido premium y un diseño ergonómico que se adapta a las necesidades del conductor y los pasajeros.
                    </p>
                </div>

                <div id="page-6" class="page page--purchase page--hidden">
                    <h1 class="message">Compra el Volkswagen Jetta 2019</h1>
                    <p class="message--sub">
                        No esperes más para tener el Volkswagen Jetta 2019. Conoce nuestras opciones de financiamiento y realiza tu compra de forma fácil y rápida. Visita nuestro concesionario para más detalles o compra directamente en línea y haz tu sueño realidad.
                    </p>
                    <a href="https://www.volkswagen.com.mx" class="button">Comprar Ahora</a>
                </div>



            </div>
        </div>
    )
}
