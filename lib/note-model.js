(function(exports) {
  function Note(text) {
    this._note = text;
  }

  Note.prototype.getText = function() {
    return this._note;
  };

  exports.Note = Note;
})(this);
