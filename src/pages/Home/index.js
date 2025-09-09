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
            <main className="flex bg-gray-50 min-h-screen">
                <SideBar />
                <div className="flex-1">
                    {/* Note Input Area */}
                    <div className="max-w-2xl mx-auto pt-12 pb-8 px-8">
                        <div className="bg-white rounded-2xl border border-gray-200 shadow-xl overflow-hidden">
                            <input 
                                value={title} 
                                onChange={onTitleChange} 
                                className="w-full px-6 py-4 border-b border-gray-100 focus:outline-none focus:ring-0 focus:border-blue-400 text-lg font-medium placeholder-gray-400 bg-transparent" 
                                placeholder="Enter title" 
                            />
                            <div className="relative">
                                <textarea 
                                    value={text} 
                                    onChange={onTextChange} 
                                    className="w-full px-6 py-4 h-40 resize-none focus:outline-none focus:ring-0 text-gray-700 placeholder-gray-400 bg-transparent leading-relaxed" 
                                    placeholder="Enter Text" 
                                />
                                <button 
                                    disabled={title.length === 0} 
                                    onClick={onAddClick} 
                                    className="absolute bottom-4 right-4 w-12 h-12 bg-blue-600 text-white rounded-full hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
                                >
                                    <span className="material-icons text-xl">
                                        add
                                    </span>
                                </button>
                            </div>
                        </div>
                    </div>
                    
                    {/* Notes Sections */}
                    <div className="px-8 pb-8">
                        <div className="max-w-7xl mx-auto space-y-10">
                            {
                                pinnedNotes?.length > 0 && (
                                    <div>
                                        <div className="flex items-center gap-3 mb-6">
                                            <span className="material-icons text-blue-600 text-2xl">push_pin</span>
                                            <h3 className="text-2xl font-bold text-gray-800 tracking-tight">Pinned Notes</h3>
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
                            
                            <div>
                                {
                                    pinnedNotes?.length > 0 && (
                                        <div className="flex items-center gap-3 mb-6">
                                            <span className="material-icons-outlined text-gray-600 text-2xl">note</span>
                                            <h3 className="text-2xl font-bold text-gray-800 tracking-tight">Other Notes</h3>
                                        </div>
                                    )
                                }
                                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                                    {
                                        otherNotes?.length > 0 ? otherNotes.map(({ id, title, text, isPinned, isImportant }) => (
                                            <NotesCard key={id} id={id} title={title} text={text} isPinned={isPinned} isImportant={isImportant} location="notes" />
                                        )) : !pinnedNotes?.length && (
                                            <div className="col-span-full text-center py-16">
                                                <div className="bg-white rounded-2xl p-12 border border-gray-200 shadow-sm max-w-md mx-auto">
                                                    <span className="material-icons-outlined text-gray-300 text-8xl mb-6 block">
                                                        note_add
                                                    </span>
                                                    <h4 className="text-xl font-semibold text-gray-600 mb-3">No notes yet</h4>
                                                    <p className="text-gray-500">Create your first note to get started!</p>
                                                </div>
                                            </div>
                                        )
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </Fragment>
    )
}