import addDivToBody from './demo';
import $ from 'jquery';
test('addDivToBody 测试', () => {
  addDivToBody();
  addDivToBody();
  expect($('body').find('div').length).toBe(2);
})