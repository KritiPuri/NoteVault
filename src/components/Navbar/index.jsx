export const Navbar = () => {
    return (
        <header className='flex items-center justify-between px-8 py-5 bg-white border-b border-gray-100 shadow-sm'>
            <div className='flex items-center gap-4'>
                <div className='w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center shadow-lg'>
                    <span className='text-white text-lg font-bold'>📝</span>
                </div>
                <h1 className='text-blue-600 text-2xl font-bold tracking-tight'>Hyper Notes</h1>
            </div>
        </header>
    )
}