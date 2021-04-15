/**
 * 数组去重
*/
// 方式一
let originalArray = [1, 2, 3, 4, 5, 3, 2, 4, 1];
const result1 = Array.from(new Set(originalArray))

// 方式二
const result2 = []
const map = new Map()
for (let v of originalArray) {
  if (!map.has(v)) {
    map.set(v, true)
    result2.push(v)
  }
}

// 方式三
const result3 = []
for (let v of originalArray) {
  if (!result3.includes(v)) {
    result3.push(v)
  }
}

// 方式四
const result4 = [...originalArray]
for (let i = 0; i < result4.length; i++) {
  for (let j = i + 1; j < result4.length; j++) {
    if (result4[i] === result4[j]) {
      result4.splice(j, 1);
      j--
    }
  }
}

// 方式五
const obj = {};
const result5 = originalArray.filter(
  item =>
    obj.hasOwnProperty(typeof item + item) ? false : (obj[typeof item + item] = true)
);



//