import { NavLink } from 'react-router-dom';

export const SideBar = () => {

    const getStyles = ({ isActive }) => {
        const baseStyles = 'flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200 group'
        return isActive 
            ? `${baseStyles} bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-md` 
            : `${baseStyles} text-gray-600 hover:bg-blue-50 hover:text-blue-700`
    }

    return (
        <aside className='w-64 h-screen bg-white border-r border-gray-200 shadow-sm'>
            <div className='p-4'>
                <nav className='space-y-2'>
                    <NavLink className={getStyles} to='/'>
                        <span className="material-icons-outlined text-xl">
                            home
                        </span>
                        <span>Home</span>
                    </NavLink>
                    <NavLink className={getStyles} to='/archive'>
                        <span className="material-icons-outlined text-xl">
                            archive
                        </span>
                        <span>Archive</span>
                    </NavLink>
                    <NavLink className={getStyles} to='/important'>
                        <span className="material-icons-outlined text-xl">
                            label_important
                        </span>
                        <span>Important</span>
                    </NavLink>
                    <NavLink className={getStyles} to='/bin'>
                        <span className="material-icons-outlined text-xl">
                            delete
                        </span>
                        <span>Bin</span>
                    </NavLink>
                </nav>
            </div>
        </aside>
    )
}