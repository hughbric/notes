(function(exports) {
  function NoteListView(noteList) {
   this.noteList = noteList;
  }

  NoteListView.prototype.toHTML = function() {
    var htmlString = "<ul>";
    this.noteList.viewNotes().forEach(function(note) {
      htmlString += `<li><div>${note.view()}</div></li>`;  
    });
    htmlString += "</ul>";
    return htmlString;
  };

  exports.NoteListView = NoteListView;
})(this);