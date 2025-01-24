function Skills() {
    return(
    <>
    <div className='bg-gradient-to-b from-white from-50% via-purple-500 via-70% to-pink-500 to-90 max-h-full'>
        <div>
            <h1 className='text-5xl pl-6 py-4'>

                <span className='text-transparent bg-radial-[at_0%_50%] from-blue-500 via-purple-500 to-pink-500 to-100% bg-clip-text leading-normal relative'>
                    Skills
                    <span className='absolute -bottom-1 left-0 w-[150px] h-[5px] bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500'></span>
                </span>
            </h1>
        </div>
        <div className='grid grid-cols-3 grid-rows-4 px-6 gap-x-8 justify-items-center max-h-[1200px]'>
        <div>
            <div className='row-span-4 p-[3px] bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full max-w-[100px] h-fit'>
                <div className='grid grid-rows-4 bg-white rounded-full p-4 max-w-[100px] gap-16'>
                    <img src='/CSS.png'></img>
                    <img src='/Tailwind.png'></img>
                    <img src='/Bootstrap.png'></img>
                    <img src='/HTML.png'></img>
                </div>
            </div>
            <h1 className='text-center text-2xl font-semibold text-transparent bg-radial-[at_0%_50%] from-blue-500 via-purple-500 to-pink-500 to-100% bg-clip-text leading-normal'>Front</h1>
        </div>
        <div>
            <div className='row-span-3 p-[3px] bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full max-w-[100px] h-fit'>
                <div className='grid grid-rows-3 bg-white rounded-full p-4 max-w-[100px] gap-16'>
                <img src='/JS.png'></img>
                <img src='/TS.png'></img>
                <img src='/Java.png'></img>
                </div>
            </div>
            <h1 className='text-center text-2xl font-semibold text-transparent bg-radial-[at_0%_50%] from-blue-500 via-purple-500 to-pink-500 to-100% bg-clip-text leading-normal'>Back</h1>
        </div>
        <div>
            <div className='row-span-2 p-[3px] bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full max-w-[100px] h-fit'>
                <div className='grid grid-rows-2 bg-white rounded-full p-4 max-w-[100px] gap-16'>
                <img src='/REACT.png'></img>
                <img src='/Svelte.png'></img>
                </div>
            </div>
            <h1 className='text-center text-2xl font-semibold text-transparent bg-radial-[at_0%_50%] from-blue-500 via-purple-500 to-pink-500 to-100% bg-clip-text leading-normal'>Misc</h1>
        </div>
        </div>
    </div>
    </>
    )
}

export default Skills;