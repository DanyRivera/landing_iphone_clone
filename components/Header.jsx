import React from 'react'

const Header = () => {
    return (
        <header className="bg-black">

            {/* Movil Header */}
            <div className="flex justify-between items-center p-2 md:hidden">
                <div>
                    <button>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>
                </div>

                <div>
                    <img src="/img/apple-logo.svg" alt="Apple Logo" />
                </div>

                <div>
                    <button>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                        </svg>
                    </button>
                </div>
            </div>

            {/* PC Header */}
            <div className="hidden md:flex items-center gap-20 px-36 py-1">
                <div>
                    <img className="w-12 h-14" src="/img/apple-logo.svg" alt="Apple Logo" />
                </div>
                <nav className="text-white flex justify-between w-full">
                    <a className="hover:opacity-50 transition-all" href="#">Mac</a>
                    <a className="hover:opacity-50 transition-all" href="#">iPad</a>
                    <a className="hover:opacity-50 transition-all" href="#">iPhone</a>
                    <a className="hover:opacity-50 transition-all" href="#">Watch</a>
                    <a className="hover:opacity-50 transition-all" href="#">TV</a>
                    <a className="hover:opacity-50 transition-all" href="#">Music</a>
                    <a className="hover:opacity-50 transition-all" href="#">Support</a>
                </nav>
                <div>
                    <button className="hover:opacity-50 transition-all">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                    </button>
                </div>

                <div>
                    <button className="hover:opacity-50 transition-all">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                        </svg>
                    </button>
                </div>
            </div>

        </header>
    )
}

export default Header