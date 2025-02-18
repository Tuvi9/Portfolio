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
            <div className='w-full place-self-center pl-6 pr-6 pb-6 xl:w-auto xl:flex'>
                <div className='pt-4'>
                    <img className='rounded-2xl h-[250px] xl:h-[600px] w-full xl:w-[800px] object-cover xl:object-fill' src='/me.png' alt='me in edtech'></img>
                </div>

                <div className='xl:w-[400px] text-xl xl:text-2xl pl-6 pr-6 pt-6 text-center xl:text-left xl:px-[50px]'>
                    <span className='xl:hidden'> <span className='font-extrabold'>Tervist!</span><br></br>Olen Kaspar Pavel ja teie olete jõudnud minu portfoolio peale. siin te tutvute veidi sellega, et kes ma olen, mida olen seniseni saavutanud ja mida mu oskused hõimavad</span>
                    <span className='hidden xl:inline'><span className='font-extrabold'>Tervist!</span><br/><br/> Olen <span className='underline'>Kaspar Pavel</span> õpin praegu Tartu Rakenduslik Kolledžis tarkavaraarendust. <br/><br/> Mul on ülimalt hea meel on olete sattunud minu E-portfoolio peale siin te tutvute veidi kes ma olen, mida olen seniseni saavutanud ja mida mu oskused hõimavad <br/><br/> <span className='font-extrabold'>Enjoy!</span></span>
                </div>
            </div>
        </div>
    )
}

export default Introduction;