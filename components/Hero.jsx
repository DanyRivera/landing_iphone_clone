import Header from "./Header"

const Hero = () => {
    return (

        <>

            <Header />

            {/* //TODO:BAR */}
            <div className="flex mx-4 my-4 justify-between items-center md:px-32">
                <h1 className="text-lg text-white font-bold md:text-2xl">iPhone 11 Pro </h1>


                <div className="flex gap-7 items-center">
                    <p className="hidden md:block text-white opacity-50 text-sm">Overview</p>
                    <p className="hidden md:block text-white text-sm">Tech Specs</p>
                    <button
                        className="text-white text-sm bg-[#0071e3] py-1 px-3 rounded-full hover:bg-blue-500 transition-all"
                    >Buy</button>
                </div>

            </div>

            {/* //TODO:Image Hero */}

        </>

    )
}

export default Hero