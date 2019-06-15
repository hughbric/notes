function newNoteView() {
  var noteList = new NoteList();
  noteList.addNote("Table plus");
  var view = new NoteListView(noteList);

  assert.isTrue(view.displayNoteList() === "<ul><li><div>Table plus</div></li></ul>");
}

function newMultipleNoteView() {
  var noteList = new NoteList();
  noteList.addNote("Table plus");
  noteList.addNote("Table plus");
  noteList.addNote("Table plus");

  var view = new NoteListView(noteList);

  assert.isTrue(view.displayNoteList() === "<ul><li><div>Table plus</div></li><li><div>Table plus</div></li><li><div>Table plus</div></li></ul>");
}

function emptyMultipleNoteView() {
  var noteList = new NoteList();

  var view = new NoteListView(noteList);
  assert.isTrue(view.displayNoteList() === "<ul></ul>");
}

newNoteView();
newMultipleNoteView();
emptyMultipleNoteView()
