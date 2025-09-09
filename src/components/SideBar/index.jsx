import { NavLink } from 'react-router-dom';

export const SideBar = () => {

    const getStyles = ({ isActive }) => {
        const baseStyles = 'flex items-center gap-4 px-6 py-4 rounded-r-full text-base font-medium transition-all duration-200 mr-4'
        return isActive 
            ? `${baseStyles} bg-blue-600 text-white shadow-lg` 
            : `${baseStyles} text-gray-700 hover:bg-blue-50 hover:text-blue-600`
    }

    return (
        <aside className='w-72 h-screen bg-white border-r border-gray-100'>
            <div className='pt-8 pb-4'>
                <nav className='space-y-3'>
                    <NavLink className={getStyles} to='/'>
                        <span className="material-icons-outlined text-2xl">
                            home
                        </span>
                        <span className='text-lg'>Home</span>
                    </NavLink>
                    <NavLink className={getStyles} to='/archive'>
                        <span className="material-icons-outlined text-2xl">
                            archive
                        </span>
                        <span className='text-lg'>Archive</span>
                    </NavLink>
                    <NavLink className={getStyles} to='/important'>
                        <span className="material-icons-outlined text-2xl">
                            label_important
                        </span>
                        <span className='text-lg'>Important</span>
                    </NavLink>
                    <NavLink className={getStyles} to='/bin'>
                        <span className="material-icons-outlined text-2xl">
                            delete
                        </span>
                        <span className='text-lg'>Bin</span>
                    </NavLink>
                </nav>
            </div>
        </aside>
    )
}