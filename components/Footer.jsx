
const Footer = () => {
    return (
        <footer className="bg-white py-24">
            <div className="text-center">
                <p className=" text-4xl mb-8">Projects You Might Like</p>
                <a className="text-blue-600 font-bold text-2xl md:text-3xl" target="_blank" rel="noreferrer" href="https://dany-rivera.vercel.app/projects">Portfolio - Projects</a>
            </div>

            <div className="mt-20 text-center">
                <p className="text-5xl md:text-6xl mb-10 font-bold">Thanks for scrolling through</p>
                <nav className="flex flex-col justify-center gap-10">
                    <a className="text-3xl md:text-5xl underline" target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/dany-rivera/">Dany Rivera</a>
                    <a className="text-2xl md:text-3xl underline" target="_blank" rel="noreferrer" href="https://github.com/DanyRivera/landing_iphone_clone">View Repository of this project</a>
                </nav>
            </div>
        </footer>
    )
}

export default Footer