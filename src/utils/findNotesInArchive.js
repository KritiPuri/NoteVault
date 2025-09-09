export const findNotesInArchive = (archive, noteId) => {
    return archive.some(note => note.id === noteId);
};
