(function(exports) {
  function SingleNoteView(note) {
    this.note = note;
   }
 
   SingleNoteView.prototype.toHTML = function() {
     return `<ul><li><div>${this.note.view()}</div></li></ul>`;
   };

  exports.SingleNoteView = SingleNoteView;
})(this);
