import React from 'react'
import bgImg from '../components/homeBg.jpg'
function Home() {
    return (
        <main>
            <img src={bgImg} alt="background"
                className="absolute object-cover w-full h-full"
            />
            <section className="relative flex justify-center min-h-screen pt-12 lg:pt-60 px-8">
                <h1 className="text-6xl text-green-400 font-bold cursive leading-none lg:leading-snug home-name"
                >hello. i'm Arif</h1>
            </section>
        </main>
    )
}

export default Home
