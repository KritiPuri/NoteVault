import { v4 as uuid } from 'uuid';

export const notesReducer = (state, { type, payload }) => {
    switch (type) {
        case 'TITLE':
            return {
                ...state,
                title: payload
            }
        case 'TEXT':
            return {
                ...state,
                text: payload
            }
        case 'ADD_NOTE':
            return {
                ...state,
                notes: [...state.notes, { text: state.text, title: state.title, id: uuid(), isPinned: false, isImportant: false }]
            }
        case 'CLEAR_INPUT':
            return {
                ...state,
                title: '',
                text: ''
            }
        case 'PIN':
            return {
                ...state,
                notes: state.notes.map(note => note.id === payload.id ? { ...note, isPinned: true } : note)
            }
        case 'UNPIN':
            return {
                ...state,
                notes: state.notes.map(note => note.id === payload.id ? { ...note, isPinned: false } : note)
            }
        case 'ADD_TO_ARCHIVE':
            return {
                ...state,
                archive: [...state.archive, state.notes.find(({id}) => id === payload.id)],
                notes: state.notes.filter(({id}) => id !== payload.id)
            }
        case 'REMOVE_FROM_ARCHIVE':
            return {
                ...state,
                notes: [...state.notes, state.archive.find(({id}) => id === payload.id)],
                archive: state.archive.filter(({id}) => id !== payload.id),
                
            }
        case 'MARK_IMPORTANT':
            return {
                ...state,
                notes: state.notes.map(note => note.id === payload.id ? { ...note, isImportant: true } : note)
            }
        case 'UNMARK_IMPORTANT':
            return {
                ...state,
                notes: state.notes.map(note => note.id === payload.id ? { ...note, isImportant: false } : note)
            }
        case 'ADD_TO_IMPORTANT':
            return {
                ...state,
                important: [...state.important, state.notes.find(({id}) => id === payload.id)],
                notes: state.notes.filter(({id}) => id !== payload.id)
            }
        case 'REMOVE_FROM_IMPORTANT':
            return {
                ...state,
                notes: [...state.notes, state.important.find(({id}) => id === payload.id)],
                important: state.important.filter(({id}) => id !== payload.id)
            }
        case 'DELETE_NOTE':
            return {
                ...state,
                bin: [...state.bin, state.notes.find(({id}) => id === payload.id)],
                notes: state.notes.filter(({id}) => id !== payload.id)
            }
        case 'DELETE_FROM_ARCHIVE':
            return {
                ...state,
                bin: [...state.bin, state.archive.find(({id}) => id === payload.id)],
                archive: state.archive.filter(({id}) => id !== payload.id)
            }
        case 'DELETE_FROM_IMPORTANT':
            return {
                ...state,
                bin: [...state.bin, state.important.find(({id}) => id === payload.id)],
                important: state.important.filter(({id}) => id !== payload.id)
            }
        case 'RESTORE_FROM_BIN':
            return {
                ...state,
                notes: [...state.notes, state.bin.find(({id}) => id === payload.id)],
                bin: state.bin.filter(({id}) => id !== payload.id)
            }
        case 'PERMANENT_DELETE':
            return {
                ...state,
                bin: state.bin.filter(({id}) => id !== payload.id)
            }
        default:
            return state
    }
}