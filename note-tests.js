function newNote() {
  let note = new Note("Learn how to code"); 

  assert.isTrue(note.view() === "Learn how to code");
}

newNote();
