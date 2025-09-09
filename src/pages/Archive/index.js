import { Fragment } from "react"
import { Navbar } from "../../components/Navbar"
import { SideBar } from "../../components/SideBar"
import { useNotes } from "../../context/notes-context";
import { NotesCard } from "../../components/NotesCard";

export const Archive = () => {

    const { archive } = useNotes();

    return (
        <Fragment>
            <Navbar />
            <main className="flex bg-gray-900 min-h-screen relative overflow-hidden">
                {/* Background decoration */}
                <div className="absolute inset-0 opacity-20">
                    <div className="absolute inset-0" style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%236366F1' fill-opacity='0.1'%3E%3Crect x='15' y='20' width='30' height='20' rx='2'/%3E%3Crect x='20' y='15' width='20' height='5' rx='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                        backgroundSize: '60px 60px'
                    }}></div>
                </div>
                
                <SideBar />
                <div className="flex-1 relative z-10">
                    {/* Centered Note Editor */}
                    <div className="flex items-center justify-center min-h-screen py-12">
                        <div className="w-full max-w-3xl mx-auto px-8">
                            <div className="text-center mb-8">
                                <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-amber-500 flex items-center justify-center mx-auto mb-6 shadow-lg shadow-orange-500/25">
                                    <span className="material-icons text-white text-3xl">archive</span>
                                </div>
                                <h1 className="text-5xl font-bold text-white tracking-tight mb-4">Archive</h1>
                                <p className="text-xl text-gray-300 font-medium">Your archived notes collection</p>
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
                                    
                                    {/* Empty State for Archive */}
                                    {archive?.length === 0 && (
                                        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                                            <div className="text-center opacity-80">
                                                <div className="w-20 h-20 bg-gradient-to-r from-orange-500/20 to-amber-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                                                    <span className="material-icons-outlined text-orange-400 text-3xl">
                                                        archive
                                                    </span>
                                                </div>
                                                <h4 className="text-xl font-semibold text-white mb-2">No archived notes yet</h4>
                                                <p className="text-gray-400 text-sm">Create your first note and archive it to see it here!</p>
                                            </div>
                                        </div>
                                    )}
                                    
                                    {/* Archive notes preview */}
                                    {archive?.length > 0 && (
                                        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                                            <div className="text-center opacity-80">
                                                <div className="w-20 h-20 bg-gradient-to-r from-orange-500/20 to-amber-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                                                    <span className="material-icons text-orange-400 text-3xl">
                                                        archive
                                                    </span>
                                                </div>
                                                <h4 className="text-xl font-semibold text-white mb-2">{archive.length} Archived Note{archive.length > 1 ? 's' : ''}</h4>
                                                <p className="text-gray-400 text-sm">Scroll down to view your archived notes</p>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    {/* Notes Grid - Only show when there are notes */}
                    {archive?.length > 0 && (
                        <div className="px-8 pb-8">
                            <div className="max-w-7xl mx-auto">
                                <div className="mb-12 text-center">
                                    <h3 className="text-2xl font-bold text-white tracking-tight mb-2">Your Archived Notes</h3>
                                    <p className="text-gray-400">Manage and restore your archived notes</p>
                                </div>
                                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                                    {archive.map(({ id, title, text, isPinned, isImportant }) => (
                                        <NotesCard key={id} id={id} title={title} text={text} isPinned={isPinned} isImportant={isImportant} location="archive" />
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