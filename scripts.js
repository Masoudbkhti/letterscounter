const sentence = "lorem Ipsum dolor emet ipsum dollar";
const count = [...sentence].reduce((prev, cur) => {
  if (cur != " ") {
    if (!prev[cur]) {
      prev[cur] = 0;
    }
    prev[cur]++;
  }
  return prev;
}, {});
console.log(count);
