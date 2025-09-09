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
            <main className="flex bg-gray-50 min-h-screen">
                <SideBar />
                <div className="flex-1 p-8">
                    {/* Header */}
                    <div className="mb-8">
                        <div className="flex items-center gap-4 mb-4">
                            <div className="p-3 bg-gradient-to-r from-orange-500 to-amber-500 rounded-2xl shadow-lg">
                                <span className="material-icons text-white text-2xl">archive</span>
                            </div>
                            <div>
                                <h2 className="text-3xl font-bold text-gray-800 tracking-tight">Archive</h2>
                                <p className="text-gray-600 text-lg">Your archived notes collection</p>
                            </div>
                        </div>
                    </div>
                    
                    {/* Notes Grid */}
                    <div className="max-w-7xl mx-auto">
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                            {
                                archive?.length > 0 ? archive.map(({ id, title, text, isPinned, isImportant }) => (
                                    <NotesCard key={id} id={id} title={title} text={text} isPinned={isPinned} isImportant={isImportant} location="archive" />
                                )) : (
                                    <div className="col-span-full text-center py-16">
                                        <div className="bg-white rounded-2xl p-12 border border-gray-200 shadow-sm max-w-lg mx-auto">
                                            <div className="p-6 bg-gradient-to-r from-orange-100 to-amber-100 rounded-2xl mb-6 inline-block">
                                                <span className="material-icons-outlined text-orange-600 text-6xl">
                                                    archive
                                                </span>
                                            </div>
                                            <h4 className="text-2xl font-bold text-gray-700 mb-4">No archived notes</h4>
                                            <p className="text-gray-500 text-lg leading-relaxed">Archive notes from your home page to see them here.</p>
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