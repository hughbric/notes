function newNote() {
  let note = new Note("Learn how to code"); 

  assert.isTrue(note.getText() === "Learn how to code");
}

newNote();
