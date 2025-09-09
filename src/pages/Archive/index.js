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
            <main className="flex bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50 min-h-screen">
                <SideBar />
                <div className="flex-1 p-6">
                    {/* Header */}
                    <div className="mb-6">
                        <div className="flex items-center gap-3 mb-2">
                            <div className="p-2 bg-gradient-to-r from-amber-500 to-orange-500 rounded-lg shadow-sm">
                                <span className="material-icons text-white text-xl">archive</span>
                            </div>
                            <div>
                                <h2 className="text-2xl font-bold text-gray-800">Archive</h2>
                                <p className="text-gray-600 text-sm">Your archived notes collection</p>
                            </div>
                        </div>
                    </div>
                    
                    {/* Notes Grid */}
                    <div className="max-w-7xl mx-auto">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                            {
                                archive?.length > 0 ? archive.map(({ id, title, text, isPinned }) => (
                                    <NotesCard key={id} id={id} title={title} text={text} isPinned={isPinned} />
                                )) : (
                                    <div className="col-span-full text-center py-12">
                                        <div className="bg-white rounded-xl p-8 border border-gray-200 shadow-sm max-w-md mx-auto">
                                            <div className="p-4 bg-gradient-to-r from-amber-100 to-orange-100 rounded-lg mb-4 inline-block">
                                                <span className="material-icons-outlined text-amber-600 text-4xl">
                                                    archive
                                                </span>
                                            </div>
                                            <h4 className="text-lg font-medium text-gray-700 mb-2">No archived notes</h4>
                                            <p className="text-gray-500 text-sm leading-relaxed">Archive notes from your home page to see them here.</p>
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