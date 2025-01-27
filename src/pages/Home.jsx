function Home () {
    return(
        <div className='grid min-h-screen justify-center items-center content-center'>
            <h1 className='text-5xl text-center text-transparent bg-radial-[at_0%_50%] from-blue-500 via-purple-500 to-pink-500 to-100% bg-clip-text leading-normal'>Kaspar Pavel</h1>
            <div className='text-center p-8'>
            <a href={`/about`}>
                <button type='button'>
                    <span className='text-white font-semibold text-2xl bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full px-[75px] p-3'>Click me!</span>
                </button>
            </a>
            </div>
        </div>
    )
}

export default Home;