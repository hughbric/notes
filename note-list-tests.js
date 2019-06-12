function newNoteList() {
  var notes = new NoteList();

  text1 = "Learn how to code";
  text2 = "Ready player one";

  notes.addNote(text1);
  notes.addNote(text2);

  comparison = ["Learn how to code", "Ready player one"];
  
  assert.isTrue(notes.viewNotes().length === 2);
  // console.log(notes.viewNotes());
  // assert.isTrue(notes.viewNotes()[1] === comparison[1]);
  // assert.isTrue(notes.viewNotes().includes("Learn how to code"));
  // assert.isTrue(notes.viewNotes().includes("Ready player one"));
}

newNoteList();
