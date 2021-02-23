const func1 = () => {
  func2();
  console.log('func1')
};
const func2 = () => {
  func3();
  console.log('func2')
};
const func3 = () => {
  console.log('func3')
};

func1();