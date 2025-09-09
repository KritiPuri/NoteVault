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
            <main className="flex bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50 min-h-screen">
                <SideBar />
                <div className="flex-1 p-6">
                    {/* Header */}
                    <div className="mb-6">
                        <div className="flex items-center gap-3 mb-2">
                            <div className="p-2 bg-gradient-to-r from-red-500 to-pink-500 rounded-lg shadow-sm">
                                <span className="material-icons text-white text-xl">delete</span>
                            </div>
                            <div>
                                <h2 className="text-2xl font-bold text-gray-800">Bin</h2>
                                <p className="text-gray-600 text-sm">Deleted notes (can be restored)</p>
                            </div>
                        </div>
                        {bin?.length > 0 && (
                            <div className="mt-4 flex gap-2">
                                <button 
                                    onClick={() => bin.forEach(note => onRestoreClick(note.id))}
                                    className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors duration-200 text-sm"
                                >
                                    Restore All
                                </button>
                                <button 
                                    onClick={() => bin.forEach(note => onPermanentDeleteClick(note.id))}
                                    className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors duration-200 text-sm"
                                >
                                    Empty Bin
                                </button>
                            </div>
                        )}
                    </div>
                    
                    {/* Notes Grid */}
                    <div className="max-w-7xl mx-auto">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                            {
                                bin?.length > 0 ? bin.map(({ id, title, text }) => (
                                    <div key={id} className="bg-white rounded-lg border border-gray-200 shadow-sm p-4 relative">
                                        <div className="absolute top-2 right-2 bg-red-100 text-red-600 px-2 py-1 rounded text-xs">
                                            Deleted
                                        </div>
                                        <div className="mb-3 pt-6">
                                            <h3 className="font-semibold text-gray-800 text-base truncate">{title}</h3>
                                        </div>
                                        <div className="space-y-3">
                                            <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">{text}</p>
                                            <div className="flex justify-end space-x-1 pt-2 border-t border-gray-100">
                                                <button 
                                                    onClick={() => onRestoreClick(id)}
                                                    className="p-2 rounded text-gray-400 hover:text-green-600 transition-colors duration-200"
                                                    title="Restore"
                                                >
                                                    <span className="material-icons text-lg">restore_from_trash</span>
                                                </button>
                                                <button 
                                                    onClick={() => onPermanentDeleteClick(id)}
                                                    className="p-2 rounded text-gray-400 hover:text-red-500 transition-colors duration-200"
                                                    title="Delete Forever"
                                                >
                                                    <span className="material-icons text-lg">delete_forever</span>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                )) : (
                                    <div className="col-span-full text-center py-12">
                                        <div className="bg-white rounded-xl p-8 border border-gray-200 shadow-sm max-w-md mx-auto">
                                            <div className="p-4 bg-gradient-to-r from-red-100 to-pink-100 rounded-lg mb-4 inline-block">
                                                <span className="material-icons-outlined text-red-600 text-4xl">
                                                    delete
                                                </span>
                                            </div>
                                            <h4 className="text-lg font-medium text-gray-700 mb-2">Bin is empty</h4>
                                            <p className="text-gray-500 text-sm leading-relaxed">Deleted notes will appear here and can be restored.</p>
                                        </div>
                                    </div>
                                )
                            }
                        </div>
                    </div>
                </div>
            </main>
        </Fragment>
    )
}
