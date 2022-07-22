import React from 'react'

const Main = () => {
    return (
        <main>

            <section className="bg-black text-white my-8 mx-4 py-16 px-4 md:text-center md:py-32 md:mx-10">
                <h2 className="text-5xl font-bold mb-5 md:text-8xl md:px-32">And then there was Pro.</h2>
                <p className="text-2xl opacity-80 mb-5 md:text-3xl md:px-24">
                    A transformative triple‑camera system that adds tons of capability without complexity. An unprecedented leap in battery life. And a mind‑blowing chip that doubles down on machine learning and pushes the boundaries of what a smartphone can do. Welcome to the first iPhone powerful enough to be called Pro.
                </p>
                <p className="text-2xl opacity-80 mb-8">
                    From $24.95/mo. or $599 with trade-in.*
                </p>
                <nav className="flex flex-col gap-5 md:flex-row md:justify-center md:gap-20">
                    <a className="text-2xl font-bold hover:underline" href="#">Watch the keynote</a>
                    <a className="text-2xl font-bold hover:underline" href="#">Watch the film</a>
                </nav>
            </section>

            <section className="grid md:grid-cols-3 gap-10 md:px-10 mb-12">
                <div className=" mx-5 md:mx-0 crop2 h-[800px] bg-black">
                    <img className="h-full w-full pl-28 pt-20" src="/img/medio_iphone.jpeg" alt="iphone" />
                </div>
                <div className=" mx-5 md:mx-0 h-[780px]">
                    <img className=" w-full h-full" src="/img/zoom_camara.jpg" alt="Zoom Camera" />
                </div>
                <div className=" mx-5 md:mx-0 md:px-16 h-[780px] bg-black py-24 px-7">
                    <img className=" w-full h-full" src="/img/iphone.png" alt="iphone" />
                </div>
            </section>

            <section className="mx-5 grid md:grid-cols-2 items-center mb-16 gap-8 h-[500px]">
                <div className="bg-black md:order-2 h-full ">
                    <img className="pt-32 h-full" src="/img/camara_inclinada.jpg" alt="Camara Inclinada" />
                </div>
                <div className="items-center h-full bg-black text-white md:px-28 py-28 md:py-0 md:pt-28 px-14 md:my-0">
                    <h2 className="text-4xl font-bold md:text-6xl md:mb-5">Take a closer look.</h2>
                    <p className="text-2xl opacity-80 md:text-[25px]">
                        Two sizes. Four finishes. Stainless steel and glass design.
                    </p>
                </div>
            </section>

            <section className="bg-black mt-[16rem]  md:mt-0 pt-16 relative md:pb-20">
                <div>
                    <img className="w-48 md:w-[600px] md:ml-[10rem] md:mb-[-15rem]" src="/img/lente.jpg" alt="lente iphone" />
                </div>
                <div className="flex justify-end">
                    <img className="w-52 md:w-[600px] md:mr-32" src="/img/lente.jpg" alt="lente iphone" />
                </div>
                <div>
                    <img className="w-48 md:w-[600px] md:ml-[10rem] md:mt-[-18rem]" src="/img/lente.jpg" alt="lente iphone" />
                </div>

                <div className="absolute px-9 top-1/4 md:px-32 md:top-1/3">
                    <p className="text-white text-6xl mb-5 opacity-50 md:text-8xl md:w-[50%]">Pro camera system</p>
                    <p className="text-white font-bold text-4xl md:text-8xl md:w-[30%]">We’ve three‑upped ourselves.</p>
                </div>

            </section>

            <section className="bg-black pt-12 md:pt-24">

                <p className="px-10 md:mx-32 text-white text-xl md:text-3xl mb-24">Expanded field of view. <span className="opacity-70">iPhone 11 Pro lets you zoom from the Telephoto all the way out to the new Ultra Wide camera, for an impressive 4x optical zoom range.</span></p>

                <img className="px-5 md:w-[50%] md:mx-auto" src="/img/ultrawide.jpg" alt="Ultrawide" />

                <div className="text-white flex py-24 justify-center ">
                    <div className="border-b-2 border-white flex gap-10 pb-5">
                        <button>Telephoto</button>
                        <button>Wide</button>
                        <button>Ultra Wide</button>
                    </div>
                </div>

            </section>

        </main>
    )
}

export default Main