
function expect(result) {
  return {
    toBe: function(actual) {
      if (result !== actual) {
        throw new Error('预期值和实际值不匹配')
      }
    }
  }
}

function test(desc, fn) {
  try {
    fn();
    console.log(`${desc} 通过测试`)
  } catch (e) {
    console.log(`${desc} 没有通过测试 ${e}`)
  }
}

test('测试加法 3 + 7', () => {
  expect(add(7, 3)).toBe(10);
})

test('测试减法 3 - 3', () => {
  expect(minus(3, 3)).toBe(0);
})


