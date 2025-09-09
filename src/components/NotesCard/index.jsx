import { useNotes } from "../../context/notes-context";
import { findNotesInArchive } from "../../utils/findNotesInArchive";

export const NotesCard = ({ id, title, text, isPinned }) => {

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

    const onArchiveClick = (id) => {
        !isNotesInArchive ? notesDispatch({
            type: 'ADD_TO_ARCHIVE',
            payload: { id }
        }) : notesDispatch({
            type: 'REMOVE_FROM_ARCHIVE',
            payload: { id }
        })
    }



    return (
        <div className="bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-all duration-200 p-4" key={id}>
            <div className="flex justify-between items-start mb-3">
                <h3 className="font-semibold text-gray-800 text-base truncate flex-1 pr-2">{title}</h3>
                {
                    !isNotesInArchive ? (
                        <button 
                            onClick={() => onPinClick(id)} 
                            className="flex-shrink-0 p-1 rounded text-gray-400 hover:text-blue-600 transition-colors duration-200"
                        >
                            <span className={isPinned ? 'material-icons text-blue-600 text-lg' : 'material-icons-outlined text-lg'}>
                                push_pin
                            </span>
                        </button>
                    ) : null
                }
            </div>
            
            <div className="space-y-3">
                <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">{text}</p>
                
                <div className="flex justify-end space-x-1 pt-2 border-t border-gray-100">
                    <button 
                        onClick={() => onArchiveClick(id)} 
                        className="p-2 rounded text-gray-400 hover:text-amber-600 transition-colors duration-200"
                        title={isNotesInArchive ? "Unarchive" : "Archive"}
                    >
                        <span className={`${isNotesInArchive ? 'material-icons' : 'material-icons-outlined'} text-lg`}>
                            archive
                        </span>
                    </button>
                    <button 
                        className="p-2 rounded text-gray-400 hover:text-red-500 transition-colors duration-200"
                        title="Delete"
                    >
                        <span className="material-icons-outlined text-lg">
                            delete_outline
                        </span>
                    </button>
                </div>
            </div>
        </div>
    )
}