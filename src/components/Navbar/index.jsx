export const Navbar = () => {
    return (
        <header className='flex items-center px-6 py-4 bg-gradient-to-r from-blue-600 to-blue-700 shadow-lg'>
            <div className='flex items-center gap-3'>
                <div className='w-9 h-9 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center border border-white/30'>
                    <span className='text-white text-lg'>📝</span>
                </div>
                <h1 className='text-white text-2xl font-bold tracking-tight'>Hyper Notes</h1>
            </div>
        </header>
    )
}