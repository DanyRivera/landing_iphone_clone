import Header from "./Header"

const Hero = () => {
    return (

        <>

            <Header />

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

            <div className="bg-black mx-4 md:mx-10 md:mb-10 ">
                <img className="crop mx-auto pt-40 px-10 md:px-0 pb-32 md:pb-0" src="/img/iphone.png" alt="iphone" />
            </div>

        </>

    )
}

export default Hero