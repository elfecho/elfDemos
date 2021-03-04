const m = new Map();

// 增
m.set('a', 'aa');
m.set('b', 'bb');
m.set('b', 'bb');

// 删
m.delete('b');
// m.clear();

// 改
m.set('a', 'apply');

// 查
const has = m.has('a');
//