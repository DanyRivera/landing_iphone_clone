import Hero from "../components/Hero"

function App() {

  return (
    <>
      <Hero />

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
            <img className="h-full w-full pl-12 pt-20" src="/img/medio_iphone.jpeg" alt="iphone" />
          </div>
          <div className=" mx-5 md:mx-0 h-[780px]">
            <img className=" w-full h-full" src="/img/zoom_camara.jpg" alt="Zoom Camera" />
          </div>
          <div className=" mx-5 md:mx-0 h-[780px] bg-black py-24 px-7">
            <img className=" w-full h-full" src="/img/iphone.png" alt="iphone" />
          </div>
        </section>

        <section className="mx-5 grid md:grid-cols-3 mb-14 gap-8">
          <div className="bg-black md:order-2 md:col-span-2">
            <img className="pt-32" src="/img/camara_inclinada.jpg" alt="Camara Inclinada" />
          </div>
          <div className="my-12 bg-black text-white py-28 md:py-0 md:pt-28 px-14 md:my-0">
            <h2 className="text-4xl font-bold">Take a closer look.</h2>
            <p className="text-2xl opacity-80">
              Two sizes. Four finishes. Stainless steel and glass design.
            </p>
          </div>
        </section>

      </main>

    </>
  )
}

export default App
