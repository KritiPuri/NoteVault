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
            <main className="flex bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50 min-h-screen">
                <SideBar />
                <div className="flex-1 p-6">
                    {/* Note Input Area */}
                    <div className="max-w-lg mx-auto mb-8">
                        <div className="bg-white rounded-xl border border-gray-200 shadow-lg overflow-hidden">
                            <input 
                                value={title} 
                                onChange={onTitleChange} 
                                className="w-full px-4 py-3 border-b border-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-base placeholder-gray-500" 
                                placeholder="Enter title..." 
                            />
                            <div className="relative">
                                <textarea 
                                    value={text} 
                                    onChange={onTextChange} 
                                    className="w-full px-4 py-3 h-32 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-700 placeholder-gray-500 leading-relaxed" 
                                    placeholder="Write your note here..." 
                                />
                                <button 
                                    disabled={title.length === 0} 
                                    onClick={onAddClick} 
                                    className="absolute bottom-3 right-3 w-10 h-10 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-full hover:from-blue-700 hover:to-blue-800 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center transition-all duration-200 shadow-md hover:shadow-lg"
                                >
                                    <span className="material-icons text-lg">
                                        add
                                    </span>
                                </button>
                            </div>
                        </div>
                    </div>
                    
                    {/* Notes Sections */}
                    <div className="max-w-7xl mx-auto space-y-8">
                        {
                            pinnedNotes?.length > 0 && (
                                <div>
                                    <div className="flex items-center gap-2 mb-4">
                                        <span className="material-icons text-blue-600 text-xl">push_pin</span>
                                        <h3 className="text-xl font-semibold text-gray-800">Pinned Notes</h3>
                                    </div>
                                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                                        {
                                            pinnedNotes.map(({ id, title, text, isPinned }) => (
                                                <NotesCard key={id} id={id} title={title} text={text} isPinned={isPinned} />
                                            ))
                                        }
                                    </div>
                                </div>
                            )
                        }
                        
                        <div>
                            {
                                pinnedNotes?.length > 0 && (
                                    <div className="flex items-center gap-2 mb-4">
                                        <span className="material-icons-outlined text-gray-600 text-xl">note</span>
                                        <h3 className="text-xl font-semibold text-gray-800">Other Notes</h3>
                                    </div>
                                )
                            }
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                                {
                                    otherNotes?.length > 0 ? otherNotes.map(({ id, title, text, isPinned }) => (
                                        <NotesCard key={id} id={id} title={title} text={text} isPinned={isPinned} />
                                    )) : !pinnedNotes?.length && (
                                        <div className="col-span-full text-center py-12">
                                            <div className="bg-white rounded-xl p-8 border border-gray-200 shadow-sm max-w-md mx-auto">
                                                <span className="material-icons-outlined text-gray-300 text-6xl mb-4 block">
                                                    note_add
                                                </span>
                                                <h4 className="text-lg font-medium text-gray-600 mb-2">No notes yet</h4>
                                                <p className="text-gray-500 text-sm">Create your first note to get started!</p>
                                            </div>
                                        </div>
                                    )
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </Fragment>
    )
}