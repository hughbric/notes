(function(exports) {
  function NoteController(noteList) {
    this.noteList = noteList;
    this.noteListView = new NoteListView(this.noteList);
  };

  NoteController.prototype.getHTML = function() {
    var list = this.noteListView.toHTML(this.noteList);

    return document.getElementById("app").textContent = list;
  };

  exports.NoteController = NoteController;
})(this);
