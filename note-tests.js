function test() {
  let note = new Note('hello'); 

  console.log(note.text);
  console.log(assert.isTrue(note.text));

  assert.expect(note.text);
  console.log(assert.toBeEqual('hello'));
}

test();
