(function(exports) {
  function NoteList() {
   this.allNotes = [];
  }

  NoteList.prototype.addNote = function(text) {
    var note = new Note(text);
    this.allNotes.push(note.view());
  };

  NoteList.prototype.viewNotes = function() {
     return this.allNotes;
  };

  exports.NoteList = NoteList;
})(this);