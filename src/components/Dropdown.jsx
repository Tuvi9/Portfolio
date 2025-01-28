function Dropdown() {
    return(
        <>
        <div className='flex justify-center pt-8 lg:pt-[100px]'>
            <details className='select-none group'>
                <summary className='flex w-[325px] lg:w-[500px] lg:h-[75px] text-xl lg:text-2xl items-center justify-between list-none pr-6 pl-6 p-4 border border-blue-500 bg-blue-200'>
                <span className='text-transparent bg-radial-[at_0%_50%] from-blue-500 via-purple-500 to-pink-500 to-100% bg-clip-text leading-normal relative'>EdTech 2024</span>
                    <img
                        src='/Chevron right.png'
                        alt='dropdown icon'
                        className='w-5 h-5 transition-transform duration-200 group-open:rotate-90'
                    />
                </summary>
                <div className='w-[325px] lg:w-[500px] pb-8 bg-purple-200 p-4'>
                    <img className=' rounded-2xl lg:w-[400px] lg:justify-self-center' src='/Image.png'></img>
                    <p className="pt-4 lg:text-xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                </div>
            </details>
        </div>
        <div className='flex justify-center pt-8'>
            <details className='select-none group'>
                <summary className='flex w-[325px] lg:w-[500px] lg:h-[75px] text-xl lg:text-2xl items-center justify-between list-none pr-6 pl-6 p-4 border border-purple-500 bg-purple-200'>
                <span className="text-transparent bg-radial-[at_0%_50%] from-blue-500 via-purple-500 to-pink-500 to-100% bg-clip-text leading-normal relative">Aasta Tegija</span>
                    <img
                        src='/Chevron right.png'
                        alt='dropdown icon'
                        className='w-5 h-5 transition-transform duration-200 group-open:rotate-90'
                    />
                </summary>
                <div className='w-[325px] lg:w-[500px] pb-8 bg-pink-200 p-4'>
                    <img className='rounded-2xl lg:w-[400px] lg:justify-self-center' src='/Image.png'></img>
                    <p className="pt-4 lg:text-xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                </div>
            </details>
        </div>
        <div className='flex justify-center pt-8 pb-8 lg:pb-[200px]'>
            <details className='select-none group'>
                <summary className='flex w-[325px] lg:w-[500px] lg:h-[75px] text-xl lg:text-2xl items-center justify-between list-none pr-6 pl-6 p-4 border border-pink-500 bg-pink-200'>
                <span className='text-transparent bg-radial-[at_0%_50%] from-blue-500 via-purple-500 to-pink-500 to-100% bg-clip-text leading-normal relative'>Noor Meister</span>
                    <img
                        src='/Chevron right.png'
                        alt='dropdown icon'
                        className='w-5 h-5 transition-transform duration-200 group-open:rotate-90'
                    />
                </summary>
                <div className='w-[325px] lg:w-[500px] pb-8 bg-purple-200 p-4'>
                    <img className='rounded-2xl lg:w-[400px] lg:justify-self-center' src='/Image.png'></img>
                    <p className="pt-4 lg:text-xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                </div>
            </details>
        </div>
        <div className='grid grid-cols-2 p-4 pb-8'>
            <a className='justify-self-start' href={`/`}>
                <button type='button'>
                    <span className='text-white font-semibold text-2xl bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full px-[50px] p-4'>Back</span>
                </button>
            </a>
            <a className='justify-self-end' href={`/projects`}>
                <button type='button'>
                    <span className='text-white font-semibold text-2xl bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full px-[50px] p-4'>Next</span>
                </button>
            </a>
            </div>
        </>
    )
}

export default Dropdown;