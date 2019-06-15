function newNoteList() {
  var notes = new NoteList();

  text1 = "Learn how to code";
  text2 = "Ready player one";

  notes.addNote(text1);
  notes.addNote(text2);

  comparison = ["Learn how to code", "Ready player one"];
  
  // Tests if there is two Note Objects in the array.
  // Cannot compare an Object to something else.
  assert.isTrue(notes.viewNotes().length === 2);


  // console.log(notes.viewNotes()[0]);
  // console.log(comparison[0]);
  // assert.isTrue(notes.viewNotes()[0] === comparison[0]);
  // assert.isTrue(notes.viewNotes().includes("Learn how to code"));
  // assert.isTrue(notes.viewNotes().includes("Ready player one"));
}

newNoteList();
