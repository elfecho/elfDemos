var fullname = & apos; Arthur & apos;;
var obj = {
  fullname: & apos; Brent& apos;,
prop: {
  fullname: & apos; Colin & apos;,
  getFullname: function() {
    return this.fullname;
  }
}
}
console.log(obj.prop.getFullname());
var test = obj.prop.getFullname;
console.log(test())