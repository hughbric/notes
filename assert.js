
let assert = {
  isTrue: function(assertionToCheck) {
    if (!assertionToCheck) {
      throw new Error("Assertion failed: " + assertionToCheck + " is not truthy");
    } else {
      return true;
    }
  },

  expect: function(assertion) {
    this.assertion = assertion;
  },

  toBeEqual: function(assertionToCheck) {
      if (assertionToCheck === this.assertion) {
        return true;
      } else {
        throw new Error("Equality failed: '" + assertionToCheck + "' does not equal '" + this.assertion + "'");
      }
    }
};
