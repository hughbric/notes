(function(exports) {
  function Note() {
    this._allNotes = [];
  }

  Note.prototype.add = function(note) {
    this._allNotes.push(note);
  };

  Note.prototype.view = function() {
    return this._allNotes[0];
  };
  exports.Note = Note;
})(this);
