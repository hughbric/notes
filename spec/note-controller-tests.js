function noteController() {

  var noteList = new NoteList();
  noteList.addNote("Favorite drink: seltzer");

  var controller = new NoteController(noteList);
  controller.getHTML();
  assert.isTrue(controller.getHTML() === "<ul><li><div>Favorite drink: seltzer</div></li></ul>");
}

// function noteViewController() {
//   var controller = new NoteController();

//   function NoteListDouble() {};

//   NoteListDouble.prototype = {
//     toHTML: function() {
//       return "<ul><li><div>Favorite drink: seltzer</div></li></ul>";
//     }
//   }

//   controller.getHTML();
// }

noteController();
// noteViewController();
