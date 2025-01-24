function Projects() {
    return(
        <>
        <div>
                <h1 className='text-5xl pl-6 py-4'>

                <span className='text-transparent bg-radial-[at_0%_50%] from-blue-500 via-purple-500 to-pink-500 to-100% bg-clip-text leading-normal relative'>
                    Projects
                    <span className='absolute -bottom-2 left-0 w-[250px] h-[5px] bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500'></span>
                </span>

                </h1>
        </div>
        <div className="relative pt-[50px]">
            <div className='grid grid-cols-3 relative'>
                <a href='https://github.com/Tuvi9/Portfolio' className='place-self-center'>
                    <button>
                        <img className='max-w-[50px] min-h-[50px]' src='/Portfolio.png'></img>
                    </button>
                </a>
                <a href='https://github.com/Tuvi9/Kedi-raamatupidamine' className='place-self-center'>
                    <button>
                        <img className='min-w-[50px] max-h-[50px]' src='/Kedi.png'></img>
                    </button>
                </a>
                <a href='https://github.com/Tuvi9/AnimeRanked.git' className='place-self-center'>
                    <button>
                        <img className='max-w-[50px] min-h-[50px]' src='/AnimeRanked.png'></img>
                    </button>
                </a>
            </div>
                <span className='absolute -bottom-8 left-1/2 -translate-x-1/2 w-[300px] h-[5px] bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500'></span>
        </div>
        <div className="relative pt-24">
            <div className='grid grid-cols-3 relative'>
            <a className='place-self-center'>
                    <button>
                        <img src='/Project.png'></img>
                    </button>
                </a>
                <a className='place-self-center'>
                    <button>
                        <img src='/Project.png'></img>
                    </button>
                </a>
                <a className='place-self-center'>
                    <button>
                        <img src='/Project.png'></img>
                    </button>
                </a>
            </div>
                <span className='absolute -bottom-8 left-1/2 -translate-x-1/2 w-[300px] h-[5px] bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500'></span>
        </div>
        <div className="relative pt-24">
            <div className='grid grid-cols-3 relative'>
                <a className='place-self-center'>
                    <button>
                        <img src='/Project.png'></img>
                    </button>
                </a>
                <a className='place-self-center'>
                    <button>
                        <img src='/Project.png'></img>
                    </button>
                </a>
                <a className='place-self-center'>
                    <button>
                        <img src='/Project.png'></img>
                    </button>
                </a>
            </div>
                <span className='absolute -bottom-8 left-1/2 -translate-x-1/2 w-[300px] h-[5px] bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500'></span>
        </div>
        <div className="relative pt-24">
            <div className='grid grid-cols-3 relative'>
                <a className='place-self-center'>
                    <button>
                        <img src='/Project.png'></img>
                    </button>
                </a>
                <a className='place-self-center'>
                    <button>
                        <img src='/Project.png'></img>
                    </button>
                </a>
                <a className='place-self-center'>
                    <button>
                        <img src='/Project.png'></img>
                    </button>
                </a>
            </div>
                <span className='absolute -bottom-8 left-1/2 -translate-x-1/2 w-[300px] h-[5px] bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500'></span>
        </div>
            <div className='pb-16'/>
        </>
    )
}

export default Projects;