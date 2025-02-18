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
                    <img className=' rounded-2xl w-[300px] h-[200px] lg:w-[400px] lg:h-[300px] lg:justify-self-center' src='/EdTech.JPG'></img>
                    <p className="pt-4 lg:text-xl">Viimati eelmine aasta 15.nov osalesid mina ja minu sõbrad võitslusel EdTech2024 kus me pidime looma inovaatilisi õppevahendeid. Peale kolme magamata päeva sündis InternHUB mis on startup millest olen osa veel praegugi.</p>
                </div>
            </details>
        </div>
        <div className='flex justify-center pt-8'>
            <details className='select-none group'>
                <summary className='flex w-[325px] lg:w-[500px] lg:h-[75px] text-xl lg:text-2xl items-center justify-between list-none pr-6 pl-6 p-4 border border-purple-500 bg-purple-200'>
                <span className="text-transparent bg-radial-[at_0%_50%] from-blue-500 via-purple-500 to-pink-500 to-100% bg-clip-text leading-normal relative">StarterTartu</span>
                    <img
                        src='/Chevron right.png'
                        alt='dropdown icon'
                        className='w-5 h-5 transition-transform duration-200 group-open:rotate-90'
                    />
                </summary>
                <div className='w-[325px] lg:w-[500px] pb-8 bg-pink-200 p-4'>
                    <img className='rounded-2xl w-[300px] h-[200px] lg:w-[400px] lg:h-[300px] lg:justify-self-center' src='/StarterTartu.png'></img>
                    <p className="pt-4 lg:text-xl">StarterTartu oli esimest korda kus ma astusin juhirolli kus ma pitchisin oma idee Wisdiphy. Areng kestis sellel umbes 3-4 kuud ja kuigi sellest peale võistlust muud ei saanud õppisin ma palju kuidas meeskonda juhtida.</p>
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
                    <img className='rounded-2xl w-[300px] h-[200px] lg:w-[400px] lg:h-[300px] lg:justify-self-center' src='/Noor_meister.PNG'></img>
                    <p className="pt-4 lg:text-xl">Olen osa võtnud Noor Meistri ettevõtlusalaoskuste alal viimased kaks aastat viimati eelmine aasta sooritasin ma oma klassikaaslasega kõige parema tulemuse.</p>
                </div>
            </details>
        </div>
        <div className='grid grid-cols-2 p-4 pb-8'>
            <a className='justify-self-start' href={`/`}>
                <button type='button' className='rounded-full w-[100px] h-[100px] flex items-center justify-center lg:rounded-lg lg:w-auto lg:h-auto xl:cursor-pointer'>
                    <span className='text-white font-semibold text-2xl bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full w-full h-full flex items-center justify-center lg:rounded-lg lg:w-auto lg:h-auto px-[50px] p-4'>Back</span>
                </button>
            </a>
            <a className='justify-self-end' href={`/projects`}>
                <button type='button' className='rounded-full w-[100px] h-[100px] flex items-center justify-center lg:rounded-lg lg:w-auto lg:h-auto xl:cursor-pointer'>
                    <span className='text-white font-semibold text-2xl bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full w-full h-full flex items-center justify-center lg:rounded-lg lg:w-auto lg:h-auto px-[50px] p-4'>Next</span>
                </button>
            </a>
            </div>
        </>
    )
}

export default Dropdown;