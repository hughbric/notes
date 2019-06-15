(function(exports) {
  function Note(text) {
    this._note = text;
  }

  Note.prototype.view = function() {
    return this._note;
  };
  exports.Note = Note;
})(this);
