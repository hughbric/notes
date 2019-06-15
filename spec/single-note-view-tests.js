function displaySingleNoteView() {
  var note = new Note("Learn how to code");
  var singleNoteView = new SingleNoteView(note);

  assert.isTrue(singleNoteView.displayNote() === "<ul><li><div>Learn how to code</div></li></ul>");
}

displaySingleNoteView();
