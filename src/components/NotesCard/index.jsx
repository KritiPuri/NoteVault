import { useNotes } from "../../context/notes-context";
import { findNotesInArchive } from "../../utils/findNotesInArchive";

export const NotesCard = ({ id, title, text, isPinned, isImportant, location = 'notes' }) => {

    const { notesDispatch, archive } = useNotes();

    const isNotesInArchive = findNotesInArchive(archive, id)

    const onPinClick = (id) => {
        !isPinned ? notesDispatch(
            {
                type: 'PIN',
                payload: { id }
            }) : notesDispatch({
                type: 'UNPIN',
                payload: { id }
            })
    }

    const onImportantClick = (id) => {
        !isImportant ? notesDispatch({
            type: 'MARK_IMPORTANT',
            payload: { id }
        }) : notesDispatch({
            type: 'UNMARK_IMPORTANT',
            payload: { id }
        })
    }

    const onArchiveClick = (id) => {
        !isNotesInArchive ? notesDispatch({
            type: 'ADD_TO_ARCHIVE',
            payload: { id }
        }) : notesDispatch({
            type: 'REMOVE_FROM_ARCHIVE',
            payload: { id }
        })
    }

    const onDeleteClick = (id) => {
        if (location === 'archive') {
            notesDispatch({
                type: 'DELETE_FROM_ARCHIVE',
                payload: { id }
            })
        } else if (location === 'important') {
            notesDispatch({
                type: 'DELETE_FROM_IMPORTANT',
                payload: { id }
            })
        } else {
            notesDispatch({
                type: 'DELETE_NOTE',
                payload: { id }
            })
        }
    }



    return (
        <div className="bg-gray-800/60 backdrop-blur-sm rounded-2xl border border-gray-700/50 shadow-xl hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-500 transform hover:-translate-y-1 hover:scale-[1.02] p-6 group relative overflow-hidden" key={id}>
            {/* Gradient overlay on hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
            
            <div className="relative z-10">
                <div className="flex justify-between items-start mb-4">
                    <h3 className="font-bold text-white text-lg truncate flex-1 pr-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 transition-all duration-300">{title}</h3>
                    <div className="flex items-center gap-1 opacity-60 group-hover:opacity-100 transition-all duration-300">
                        {!isNotesInArchive && location !== 'bin' && (
                            <button 
                                onClick={() => onPinClick(id)} 
                                className="flex-shrink-0 p-2 rounded-xl text-gray-400 hover:text-blue-400 hover:bg-blue-500/20 hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300 hover:scale-110"
                            >
                                <span className={isPinned ? 'material-icons text-blue-400 text-xl drop-shadow-sm' : 'material-icons-outlined text-xl'}>
                                    push_pin
                                </span>
                            </button>
                        )}
                        {location !== 'bin' && (
                            <button 
                                onClick={() => onImportantClick(id)} 
                                className="flex-shrink-0 p-2 rounded-xl text-gray-400 hover:text-yellow-400 hover:bg-yellow-500/20 hover:shadow-lg hover:shadow-yellow-500/20 transition-all duration-300 hover:scale-110"
                            >
                                <span className={isImportant ? 'material-icons text-yellow-400 text-xl drop-shadow-sm' : 'material-icons-outlined text-xl'}>
                                    star
                                </span>
                            </button>
                        )}
                    </div>
                </div>
                
                <div className="space-y-4">
                    <p className="text-gray-300 text-sm leading-relaxed line-clamp-4 group-hover:text-gray-200 transition-colors duration-300">{text}</p>
                    
                    <div className="flex justify-end space-x-2 pt-4 border-t border-gray-700/50">
                        {location !== 'bin' && (
                            <button 
                                onClick={() => onArchiveClick(id)} 
                                className="p-2 rounded-xl text-gray-400 hover:text-orange-400 hover:bg-orange-500/20 hover:shadow-lg hover:shadow-orange-500/20 transition-all duration-300 hover:scale-110"
                                title={isNotesInArchive ? "Unarchive" : "Archive"}
                            >
                                <span className={`${isNotesInArchive ? 'material-icons text-orange-400 drop-shadow-sm' : 'material-icons-outlined'} text-xl`}>
                                    archive
                                </span>
                            </button>
                        )}
                        <button 
                            onClick={() => onDeleteClick(id)}
                            className="p-2 rounded-xl text-gray-400 hover:text-red-400 hover:bg-red-500/20 hover:shadow-lg hover:shadow-red-500/20 transition-all duration-300 hover:scale-110"
                            title={location === 'bin' ? "Restore" : "Delete"}
                        >
                            <span className={`material-icons-outlined text-xl`}>
                                {location === 'bin' ? 'restore_from_trash' : 'delete_outline'}
                            </span>
                        </button>
                    </div>
                </div>
            </div>
            
            {/* Bottom glow effect */}
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        </div>
    )
}