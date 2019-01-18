function abc() {
  let x = 0;
  function def() {
    x++;
    console.log(x);
  }
  return def;
}

const a = abc();
const b = abc();

a(); // 1
a(); // 2
b(); // 1
a(); // 3
