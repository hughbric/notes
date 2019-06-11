function newNote() {
  let note = new Note(); 
  note.add("Learn how to code");

  assert.isTrue(note.view() === "Learn how to code");
}

newNote();
