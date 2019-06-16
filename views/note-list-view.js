(function(exports) {
  function NoteListView(noteList) {
   this.noteList = noteList;
  }

  NoteListView.prototype.displayNoteList = function() {
    var htmlString = "<ul>";
    this.noteList.viewNotes().forEach(function(note) {
      htmlString += `<li><div>${note.getText()}</div></li>`;  
    });
    htmlString += "</ul>";

    var app = document.getElementById("app");
    return app.innerHTML = htmlString;
  };

  exports.NoteListView = NoteListView;
})(this);