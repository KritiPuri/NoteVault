import { NavLink } from 'react-router-dom';

export const SideBar = () => {

    const getStyles = ({ isActive }) => {
        const baseStyles = 'flex items-center justify-center w-12 h-12 rounded-xl transition-all duration-300 group relative overflow-hidden mx-auto mb-4'
        return isActive 
            ? `${baseStyles} bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg shadow-blue-500/30 scale-110` 
            : `${baseStyles} text-gray-400 hover:text-white hover:bg-gray-800/50 hover:scale-105 hover:shadow-lg hover:shadow-gray-700/20`
    }

    return (
        <aside className='w-20 h-screen bg-gray-900/95 backdrop-blur-xl border-r border-gray-800/30'>
            <div className='pt-8 pb-4'>
                <nav className='space-y-3 px-4'>
                    <NavLink className={getStyles} to='/' title="Home">
                        <span className="material-icons-outlined text-xl group-hover:scale-110 transition-transform duration-300">
                            home
                        </span>
                    </NavLink>
                    <NavLink className={getStyles} to='/archive' title="Archive">
                        <span className="material-icons-outlined text-xl group-hover:scale-110 transition-transform duration-300">
                            archive
                        </span>
                    </NavLink>
                    <NavLink className={getStyles} to='/important' title="Important">
                        <span className="material-icons-outlined text-xl group-hover:scale-110 transition-transform duration-300">
                            label_important
                        </span>
                    </NavLink>
                    <NavLink className={getStyles} to='/bin' title="Bin">
                        <span className="material-icons-outlined text-xl group-hover:scale-110 transition-transform duration-300">
                            delete
                        </span>
                    </NavLink>
                </nav>
            </div>
        </aside>
    )
}