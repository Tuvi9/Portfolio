function Dropdown() {
    return(
        <>
        <div className='flex justify-center pt-8'>
            <details className='select-none group'>
                <summary className='flex w-[325px] text-xl items-center justify-between list-none pr-6 pl-6 p-4 border border-blue-500 bg-blue-200'>
                EdTech 2024
                    <img
                        src='/Chevron right.png'
                        alt='dropdown icon'
                        className='w-5 h-5 transition-transform duration-200 group-open:rotate-90'
                    />
                </summary>
                <div className='w-[325px] pb-8 bg-purple-200 p-4'>
                    <img className=' rounded-2xl' src='/Image.png'></img>
                    <p className="pt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                </div>
            </details>
        </div>
        <div className='flex justify-center pt-8'>
            <details className='select-none group'>
                <summary className='flex w-[325px] text-xl items-center justify-between list-none pr-6 pl-6 p-4 border border-purple-500 bg-purple-200'>
                Aasta Tegija
                    <img
                        src='/Chevron right.png'
                        alt='dropdown icon'
                        className='w-5 h-5 transition-transform duration-200 group-open:rotate-90'
                    />
                </summary>
                <div className='w-[325px] pb-8 bg-pink-200 p-4'>
                    <img className='rounded-2xl' src='/Image.png'></img>
                    <p className="pt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                </div>
            </details>
        </div>
        <div className='flex justify-center pt-8 pb-8'>
            <details className='select-none group'>
                <summary className='flex w-[325px] text-xl items-center justify-between list-none pr-6 pl-6 p-4 border border-pink-500 bg-pink-200'>
                Noor Meister
                    <img
                        src='/Chevron right.png'
                        alt='dropdown icon'
                        className='w-5 h-5 transition-transform duration-200 group-open:rotate-90'
                    />
                </summary>
                <div className='w-[325px] pb-8 bg-purple-200 p-4'>
                    <img className='rounded-2xl' src='/Image.png'></img>
                    <p className="pt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                </div>
            </details>
        </div>
        </>
    )
}

export default Dropdown;