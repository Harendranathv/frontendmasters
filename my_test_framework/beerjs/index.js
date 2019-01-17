function beerjs() {
  return {
    describe: (text, callback) => {
      console.log(text);
      callback();
    },
    it: (text, callback) => {
      try {
        callback();
        console.log(`👌 ${text}`);
      } catch (error) {
        console.log(`❌ ${text} - ${error}`);
      }
    },
    expect: actual => ({
      toBe(expected) {
        if (actual !== expected) {
          throw new Error(`expected ${expected}, but got ${actual}`);
        }
      }
    })
  };
}

module.exports = beerjs();
