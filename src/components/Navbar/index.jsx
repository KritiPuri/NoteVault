export const Navbar = () => {
    return (
        <header className='flex items-center justify-center px-8 py-8 bg-gray-900/95 backdrop-blur-xl border-b border-gray-800/30'>
            <div className='text-center'>
                <h1 className='text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 text-4xl font-bold tracking-tight mb-2'>Hyper Notes</h1>
                <p className='text-gray-400 text-lg font-medium'>Distraction-free note taking</p>
            </div>
        </header>
    )
}