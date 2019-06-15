(function(exports) {
  function NoteController(noteList) {
    this.noteList = noteList;
  };

  NoteController.prototype.newNoteListView = function() {
    this.noteListView = new NoteListView(this.noteList);

    return this.noteListView.displayNoteList();
  };

  exports.NoteController = NoteController;
})(this);
