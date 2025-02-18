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

        <div className="relative pt-[50px] h-full pb-[50px]">
            <div className='flex flex-col justify-center items-center'>
                <div>
                    <div className='justify-self-center'>
                        <a href='https://github.com/Tuvi9/Portfolio' className=''>
                            <button>
                                <img className='w-[250px] h-[250px] rounded-tl-xl rounded-tr-xl border border-blue-500' src='/E-portfoolio.png'></img>
                            </button>
                        </a>
                    <div>
                        <div className='flex justify-center  pb-8'>
                            <details className='select-none group'>
                                <summary className='flex w-[250px] text-xl items-center justify-between list-none pr-6 pl-6 p-4 border border-blue-500 rounded-b-xl  bg-white  group-open:border-b-0 group-open:rounded-b-none'>
                                <span className='text-transparent bg-radial-[at_0%_50%] from-blue-500 via-purple-500 to-pink-500 to-100% bg-clip-text leading-normal  relative'>E-portfoolio</span>
                                    <img
                                        src='/Chevron right.png'
                                        alt='dropdown icon'
                                        className='w-5 h-5 transition-transform duration-200 group-open:rotate-90'
                                    />
                                </summary>
                                <div className='w-[250px] border-t-0 border bg-white border-blue-500 px-4 group-open: rounded-b-2xl'>
                                    <p className=''>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                    <div className='flex py-4'>
                                        <img className='w-[50px] h-[50px]' src='/REACT.png'/>
                                        <img className='w-[50px] h-[50px]' src='/Vite.png'/>
                                    </div>
                                </div>
                            </details>
                        </div>
                    </div>
                </div>

                </div>
                <div className='justify-self-center -mt-4'>
                    <a href='https://github.com/Tuvi9/Kedi-raamatupidamine' className='place-self-center '>
                        <button>
                            <img className='w-[250px] h-[250px] rounded-tl-xl rounded-tr-xl border border-purple-500' src='/Raamatupidamine.png'></img>
                        </button>
                    </a>
                    <div className='flex justify-center  pb-8'>

                    <details className='select-none group'>
                        <summary className='flex w-[250px] text-xl items-center justify-between list-none pr-6 pl-6 p-4 border border-purple-500 rounded-b-xl  bg-white  group-open:border-b-0 group-open:rounded-b-none'>
                        <span className='text-transparent bg-radial-[at_0%_50%] from-blue-500 via-purple-500 to-pink-500 to-100% bg-clip-text leading-normal  relative'>Kedi-Raamatupidamine</span>
                            <img
                                src='/Chevron right.png'
                                alt='dropdown icon'
                                className='w-5 h-5 transition-transform duration-200 group-open:rotate-90'
                            />
                        </summary>
                        <div className='w-[250px] border-t-0 border bg-white border-purple-500 px-4 group-open: rounded-b-2xl'>
                            <p className=''>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            <div className='flex py-4'>
                                <img className='w-[50px] h-[50px]' src='/REACT.png'/>
                                <img className='w-[50px] h-[50px]' src='/Vite.png'/>
                            </div>
                        </div>
                    </details>

                </div>
                </div>

                <div className='justify-self-center'>
                    <a href='https://github.com/Tuvi9/AnimeRanked.git' className='place-self-center '>
                        <button>
                            <img className='w-[250px] h-[250px] rounded-tl-xl rounded-tr-xl border border-pink-500' src='/Anime.png'></img>
                        </button>
                    </a>
                    <div className='flex justify-center  pb-8'>

                    <details className='select-none group'>
                        <summary className='flex w-[250px] text-xl items-center justify-between list-none pr-6 pl-6 p-4 border border-red-500 rounded-b-xl  bg-white  group-open:border-b-0 group-open:rounded-b-none'>
                        <span className='text-transparent bg-radial-[at_0%_50%] from-blue-500 via-purple-500 to-pink-500 to-100% bg-clip-text leading-normal  relative'>AnimeRanked</span>
                            <img
                                src='/Chevron right.png'
                                alt='dropdown icon'
                                className='w-5 h-5 transition-transform duration-200 group-open:rotate-90'
                            />
                        </summary>
                        <div className='w-[250px] border-t-0 border bg-white border-red-500 px-4 group-open: rounded-b-2xl'>
                            <p className=''>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            <div className='flex py-4'>
                                <img className='w-[50px] h-[50px]' src='../../public/CSS.png'/>
                                <img className='w-[50px] h-[50px]' src='/JS.png'/>
                                <img className='w-[50px] h-[50px]' src='/Supabase.png'/>
                            </div>
                        </div>
                    </details>
                </div>
                </div>
            </div>
        </div>
            <div className='grid grid-cols-2 p-4 pb-8'>
            <a className='justify-self-start' href={`/about`}>
                <button type='button' className='rounded-full w-[100px] h-[100px] flex items-center justify-center lg:rounded-lg lg:w-auto lg:h-auto'>
                    <span className='text-white font-semibold text-2xl bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full w-full h-full flex items-center justify-center lg:rounded-lg lg:w-auto lg:h-auto px-[50px] p-4'>Back</span>
                </button>
            </a>
            <a className='justify-self-end' href={`/skills`}>
                <button type='button' className='rounded-full w-[100px] h-[100px] flex items-center justify-center lg:rounded-lg lg:w-auto lg:h-auto'>
                    <span className='text-white font-semibold text-2xl bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full w-full h-full flex items-center justify-center lg:rounded-lg lg:w-auto lg:h-auto px-[50px] p-4'>Next</span>
                </button>
            </a>
            </div>
        </>
    )
}

export default Projects;