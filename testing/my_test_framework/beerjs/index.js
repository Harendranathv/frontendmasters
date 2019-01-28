function describe(text, callback) {
  console.log(text);
  callback();
}

function it(text, callback) {
  try {
    callback();
    console.log(`👌 ${text}`);
  } catch (error) {
    console.log(`❌ ${text} - ${error}`);
  }
}

const test = it;

function expect(actual) {
  return {
    toBe(expected) {
      if (actual !== expected) {
        throw new Error(`expected ${expected}, but got ${actual}`);
      }
    }
  };
}

module.exports = {
  describe,
  it,
  test,
  expect
};
