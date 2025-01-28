function Introduction() {
    return(
        <div className='grid'>
            <div>
                <h1 className='text-5xl pl-6 py-4'>

                <span className='text-transparent bg-radial-[at_0%_50%] from-blue-500 via-purple-500 to-pink-500 to-100% bg-clip-text leading-normal relative'>
                    About me
                    <span className='absolute -bottom-0 left-0 w-[250px] h-[5px] bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500'></span>
                </span>

                </h1>
            </div>
            <div className='w-screen place-self-center pl-6 pr-6 pb-6'>
                <img className='rounded-2xl h-[250px] lg:h-[750px] xl:h-[1000px] w-full object-cover' src='/me.png' alt='me in edtech'></img>
            </div>
            <div className='text-2xl pl-6 pr-6 text-center lg:px-[50px]'>
                <span className='lg:hidden'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</span>
                <span className='hidden lg:inline'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</span>
            </div>
        </div>
    )
}

export default Introduction;