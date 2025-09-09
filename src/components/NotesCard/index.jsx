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
        <div className="bg-white rounded-xl border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 p-6 group" key={id}>
            <div className="flex justify-between items-start mb-4">
                <h3 className="font-bold text-gray-800 text-lg truncate flex-1 pr-3 group-hover:text-blue-600 transition-colors duration-200">{title}</h3>
                <div className="flex items-center gap-2 opacity-70 group-hover:opacity-100 transition-opacity duration-200">
                    {!isNotesInArchive && location !== 'bin' && (
                        <button 
                            onClick={() => onPinClick(id)} 
                            className="flex-shrink-0 p-2 rounded-lg text-gray-400 hover:text-blue-600 hover:bg-blue-50 transition-all duration-200"
                        >
                            <span className={isPinned ? 'material-icons text-blue-600 text-xl' : 'material-icons-outlined text-xl'}>
                                push_pin
                            </span>
                        </button>
                    )}
                    {location !== 'bin' && (
                        <button 
                            onClick={() => onImportantClick(id)} 
                            className="flex-shrink-0 p-2 rounded-lg text-gray-400 hover:text-yellow-500 hover:bg-yellow-50 transition-all duration-200"
                        >
                            <span className={isImportant ? 'material-icons text-yellow-500 text-xl' : 'material-icons-outlined text-xl'}>
                                star
                            </span>
                        </button>
                    )}
                </div>
            </div>
            
            <div className="space-y-4">
                <p className="text-gray-600 text-sm leading-relaxed line-clamp-4 group-hover:text-gray-700 transition-colors duration-200">{text}</p>
                
                <div className="flex justify-end space-x-2 pt-3 border-t border-gray-100">
                    {location !== 'bin' && (
                        <button 
                            onClick={() => onArchiveClick(id)} 
                            className="p-2 rounded-lg text-gray-400 hover:text-orange-600 hover:bg-orange-50 transition-all duration-200"
                            title={isNotesInArchive ? "Unarchive" : "Archive"}
                        >
                            <span className={`${isNotesInArchive ? 'material-icons' : 'material-icons-outlined'} text-xl`}>
                                archive
                            </span>
                        </button>
                    )}
                    <button 
                        onClick={() => onDeleteClick(id)}
                        className="p-2 rounded-lg text-gray-400 hover:text-red-500 hover:bg-red-50 transition-all duration-200"
                        title={location === 'bin' ? "Restore" : "Delete"}
                    >
                        <span className={`material-icons-outlined text-xl`}>
                            {location === 'bin' ? 'restore_from_trash' : 'delete_outline'}
                        </span>
                    </button>
                </div>
            </div>
        </div>
    )
}