import { Navbar } from "../../components/Navbar";
import { Fragment } from 'react'
import { SideBar } from "../../components/SideBar";
import { NotesCard } from "../../components/NotesCard";
import { useNotes } from "../../context/notes-context";

export const Home = () => {

    const { title, text, notes, archive, notesDispatch } = useNotes();

    const onTitleChange = (e) => {
        notesDispatch({
            type: 'TITLE',
            payload: e.target.value
        })
    }
    const onTextChange = (e) => {
        notesDispatch({
            type: 'TEXT',
            payload: e.target.value
        })
    }

    const onAddClick = () => {
        notesDispatch({
            type: 'ADD_NOTE'
        })
        notesDispatch({
            type: 'CLEAR_INPUT'
        })
    }

    const pinnedNotes = notes?.length > 0 && notes.filter(({ isPinned }) => isPinned);
    const otherNotes = notes?.length > 0 && notes.filter(({ isPinned }) => !isPinned);

    console.log(archive)

    return (
        <Fragment>
            <Navbar />
            <main className="flex bg-gray-900 min-h-screen relative overflow-hidden">
                {/* Background decoration */}
                <div className="absolute inset-0 opacity-20">
                    <div className="absolute inset-0" style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%234F46E5' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                        backgroundSize: '60px 60px'
                    }}></div>
                </div>
                
                <SideBar />
                <div className="flex-1 relative z-10">
                    {/* Centered Note Editor */}
                    <div className="flex items-center justify-center min-h-screen py-12">
                        <div className="w-full max-w-3xl mx-auto px-8">
                            <div className="bg-gray-800/50 backdrop-blur-xl rounded-3xl border border-gray-700/30 shadow-2xl p-8 ring-1 ring-gray-600/10">
                                {/* Title Input */}
                                <input 
                                    value={title} 
                                    onChange={onTitleChange} 
                                    className="w-full mb-6 bg-transparent focus:outline-none text-3xl font-semibold placeholder-gray-500 text-white transition-all duration-300 focus:placeholder-gray-400" 
                                    placeholder="Untitled Note" 
                                />
                                
                                {/* Content Area */}
                                <div className="relative">
                                    <textarea 
                                        value={text} 
                                        onChange={onTextChange} 
                                        className="w-full h-80 resize-none bg-transparent focus:outline-none text-gray-200 placeholder-gray-500 leading-relaxed text-lg transition-all duration-300 focus:placeholder-gray-400" 
                                        placeholder="Start writing your thoughts..." 
                                    />
                                    
                                    {/* Empty State Hint - Inside the box */}
                                    {!title && !text && (
                                        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                                            <div className="text-center opacity-60">
                                                <div className="w-16 h-16 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                                                    <span className="material-icons-outlined text-gray-400 text-2xl">
                                                        edit_note
                                                    </span>
                                                </div>
                                                <p className="text-gray-500 text-sm">Ready to start writing? Just click above and begin.</p>
                                            </div>
                                        </div>
                                    )}
                                    
                                    {/* Add Button */}
                                    <button 
                                        disabled={title.length === 0} 
                                        onClick={onAddClick} 
                                        className="absolute bottom-4 right-4 w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full hover:from-blue-600 hover:to-purple-700 disabled:opacity-30 disabled:cursor-not-allowed flex items-center justify-center transition-all duration-300 shadow-lg shadow-blue-500/30 hover:shadow-xl hover:shadow-blue-500/40 transform hover:scale-110 active:scale-95"
                                    >
                                        <span className="material-icons text-lg">
                                            add
                                        </span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    {/* Notes Sections - Only show when there are notes */}
                    {(pinnedNotes?.length > 0 || otherNotes?.length > 0) && (
                        <div className="px-8 pb-8">
                            <div className="max-w-7xl mx-auto space-y-12">
                                {
                                    pinnedNotes?.length > 0 && (
                                        <div>
                                            <div className="flex items-center gap-3 mb-8">
                                                <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                                                    <span className="material-icons text-white text-lg">push_pin</span>
                                                </div>
                                                <h3 className="text-2xl font-bold text-white tracking-tight">Pinned</h3>
                                            </div>
                                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                                                {
                                                    pinnedNotes.map(({ id, title, text, isPinned, isImportant }) => (
                                                        <NotesCard key={id} id={id} title={title} text={text} isPinned={isPinned} isImportant={isImportant} location="notes" />
                                                    ))
                                                }
                                            </div>
                                        </div>
                                    )
                                }
                                
                                {
                                    otherNotes?.length > 0 && (
                                        <div>
                                            {
                                                pinnedNotes?.length > 0 && (
                                                    <div className="flex items-center gap-3 mb-8">
                                                        <div className="w-8 h-8 bg-gradient-to-r from-gray-600 to-gray-700 rounded-lg flex items-center justify-center">
                                                            <span className="material-icons-outlined text-white text-lg">note</span>
                                                        </div>
                                                        <h3 className="text-2xl font-bold text-white tracking-tight">Notes</h3>
                                                    </div>
                                                )
                                            }
                                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                                                {
                                                    otherNotes.map(({ id, title, text, isPinned, isImportant }) => (
                                                        <NotesCard key={id} id={id} title={title} text={text} isPinned={isPinned} isImportant={isImportant} location="notes" />
                                                    ))
                                                }
                                            </div>
                                        </div>
                                    )
                                }
                            </div>
                        </div>
                    )}
                </div>
            </main>
        </Fragment>
    )
}
