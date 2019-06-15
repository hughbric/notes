(function(exports) {
  function SingleNoteView(note) {
    this.note = note;
   }
 
   SingleNoteView.prototype.displayNote = function() {
     htmlString = `<ul><li><div>${this.note.view()}</div></li></ul>`;

     var app = document.getElementById("note");
     return app.innerHTML = htmlString;
   };

  exports.SingleNoteView = SingleNoteView;
})(this);
