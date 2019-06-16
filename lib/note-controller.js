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

window.onload = function(){
  var list = new NoteList();
  var display = new NoteListView(list);

	var createButton = document.getElementById('create');
	createButton.addEventListener('click', function(){
		var text_area = document.getElementById('note_text');
    var text = text_area.value;
    
    list.addNote(text);
    
    display.displayNoteList();
	});
};