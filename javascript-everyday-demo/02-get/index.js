// 需求
// input
// const obj = {
//     selector: { to: { val: 'val to select' } },
//     target: [1, 2, { a: 'test' }],
//   };
// get(obj, 'selector.to.val', 'target[0]', 'target[2].a');
// output
// ['val to select', 1, 'test']


const obj = {
  selector: { to: { val: 'val to select' } },
  a: {b: 20},
  target: [1, 2, { a: 'test' }],
};

function get(obj, ...seletors) {
  const r = seletors.map(s => {
    return s
      .replace(/\[(\w+)\]/g, ".$1")
      .split('.')
      .reduce((prev, cur) => {
        return prev && prev[cur]
      }, obj)
  })
  console.log(r)
}

get(obj, 'selector.to.val', 'target[0]', 'target[2].a');

