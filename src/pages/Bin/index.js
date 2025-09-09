import { Fragment } from "react"
import { Navbar } from "../../components/Navbar"
import { SideBar } from "../../components/SideBar"
import { useNotes } from "../../context/notes-context";
import { NotesCard } from "../../components/NotesCard";

export const Bin = () => {

    const { bin, notesDispatch } = useNotes();

    const onRestoreClick = (id) => {
        notesDispatch({
            type: 'RESTORE_FROM_BIN',
            payload: { id }
        })
    }

    const onPermanentDeleteClick = (id) => {
        notesDispatch({
            type: 'PERMANENT_DELETE',
            payload: { id }
        })
    }

    return (
        <Fragment>
            <Navbar />
            <main className="flex bg-gray-900 min-h-screen relative overflow-hidden">
                {/* Background decoration */}
                <div className="absolute inset-0 opacity-20">
                    <div className="absolute inset-0" style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23EF4444' fill-opacity='0.1'%3E%3Crect x='25' y='15' width='10' height='30' rx='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                        backgroundSize: '60px 60px'
                    }}></div>
                </div>
                
                <SideBar />
                <div className="flex-1 relative z-10">
                    {/* Centered Note Editor */}
                    <div className="flex items-center justify-center min-h-screen py-12">
                        <div className="w-full max-w-3xl mx-auto px-8">
                            <div className="text-center mb-8">
                                <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-pink-500 flex items-center justify-center mx-auto mb-6 shadow-lg shadow-red-500/25">
                                    <span className="material-icons text-white text-3xl">delete</span>
                                </div>
                                <h1 className="text-5xl font-bold text-white tracking-tight mb-4">Bin</h1>
                                <p className="text-xl text-gray-300 font-medium">Deleted notes (can be restored)</p>
                            </div>
                            
                            <div className="bg-gray-800/50 backdrop-blur-xl border border-gray-700/30 shadow-2xl p-8 ring-1 ring-gray-600/10">
                                {/* Title Input */}
                                <input 
                                    className="w-full mb-6 bg-transparent focus:outline-none text-3xl font-bold placeholder-gray-500 text-white transition-all duration-300 focus:placeholder-gray-400" 
                                    placeholder="" 
                                    disabled
                                />
                                
                                {/* Content Area */}
                                <div className="relative">
                                    <textarea 
                                        className="w-full h-80 resize-none bg-transparent focus:outline-none text-gray-200 placeholder-gray-500 leading-relaxed text-lg transition-all duration-300 focus:placeholder-gray-400" 
                                        placeholder="" 
                                        disabled
                                    />
                                    
                                    {/* Empty State for Bin */}
                                    {bin?.length === 0 && (
                                        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                                            <div className="text-center opacity-80">
                                                <div className="w-20 h-20 bg-gradient-to-r from-red-500/20 to-pink-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                                                    <span className="material-icons-outlined text-red-400 text-3xl">
                                                        delete
                                                    </span>
                                                </div>
                                                <h4 className="text-xl font-semibold text-white mb-2">Bin is empty</h4>
                                                <p className="text-gray-400 text-sm">Create your first note to get started!</p>
                                            </div>
                                        </div>
                                    )}
                                    
                                    {/* Bin notes preview */}
                                    {bin?.length > 0 && (
                                        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                                            <div className="text-center opacity-80">
                                                <div className="w-20 h-20 bg-gradient-to-r from-red-500/20 to-pink-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                                                    <span className="material-icons text-red-400 text-3xl">
                                                        delete
                                                    </span>
                                                </div>
                                                <h4 className="text-xl font-semibold text-white mb-2">{bin.length} Deleted Note{bin.length > 1 ? 's' : ''}</h4>
                                                <p className="text-gray-400 text-sm">Scroll down to restore or permanently delete</p>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    {/* Notes Grid - Only show when there are notes */}
                    {bin?.length > 0 && (
                        <div className="px-8 pb-8">
                            <div className="max-w-7xl mx-auto">
                                <div className="mb-12 text-center">
                                    <h3 className="text-2xl font-bold text-white tracking-tight mb-2">Deleted Notes</h3>
                                    <p className="text-gray-400 mb-6">Restore notes or delete them permanently</p>
                                    <div className="flex justify-center gap-3">
                                        <button 
                                            onClick={() => bin.forEach(note => onRestoreClick(note.id))}
                                            className="px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-2xl hover:from-green-600 hover:to-emerald-600 transition-all duration-300 font-medium shadow-lg shadow-green-500/25 hover:shadow-xl hover:shadow-green-500/30 transform hover:scale-105"
                                        >
                                            Restore All
                                        </button>
                                        <button 
                                            onClick={() => bin.forEach(note => onPermanentDeleteClick(note.id))}
                                            className="px-6 py-3 bg-gradient-to-r from-red-500 to-pink-500 text-white rounded-2xl hover:from-red-600 hover:to-pink-600 transition-all duration-300 font-medium shadow-lg shadow-red-500/25 hover:shadow-xl hover:shadow-red-500/30 transform hover:scale-105"
                                        >
                                            Empty Bin
                                        </button>
                                    </div>
                                </div>
                                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                                    {bin.map(({ id, title, text }) => (
                                        <div key={id} className="bg-gray-800/60 backdrop-blur-sm rounded-2xl border border-gray-700/50 shadow-xl hover:shadow-2xl hover:shadow-red-500/10 transition-all duration-500 transform hover:-translate-y-1 hover:scale-[1.02] p-6 relative overflow-hidden group">
                                            {/* Gradient overlay */}
                                            <div className="absolute inset-0 bg-gradient-to-br from-red-500/10 via-transparent to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                                            
                                            <div className="relative z-10">
                                                <div className="absolute top-2 right-2 bg-gradient-to-r from-red-500 to-pink-500 text-white px-3 py-1.5 rounded-xl text-xs font-medium shadow-lg">
                                                    Deleted
                                                </div>
                                                <div className="mb-4 pt-8">
                                                    <h3 className="font-bold text-white text-lg truncate group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-red-400 group-hover:to-pink-400 transition-all duration-300">{title}</h3>
                                                </div>
                                                <div className="space-y-4">
                                                    <p className="text-gray-300 text-sm leading-relaxed line-clamp-3 group-hover:text-gray-200 transition-colors duration-300">{text}</p>
                                                    <div className="flex justify-end space-x-2 pt-4 border-t border-gray-700/50">
                                                        <button 
                                                            onClick={() => onRestoreClick(id)}
                                                            className="p-2 rounded-xl text-gray-400 hover:text-green-400 hover:bg-green-500/20 hover:shadow-lg hover:shadow-green-500/20 transition-all duration-300 hover:scale-110"
                                                            title="Restore"
                                                        >
                                                            <span className="material-icons text-xl">restore_from_trash</span>
                                                        </button>
                                                        <button 
                                                            onClick={() => onPermanentDeleteClick(id)}
                                                            className="p-2 rounded-xl text-gray-400 hover:text-red-400 hover:bg-red-500/20 hover:shadow-lg hover:shadow-red-500/20 transition-all duration-300 hover:scale-110"
                                                            title="Delete Forever"
                                                        >
                                                            <span className="material-icons text-xl">delete_forever</span>
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                            
                                            {/* Bottom glow effect */}
                                            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-red-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </main>
        </Fragment>
    )
}
