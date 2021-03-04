let str = 'hello World';

// charAt() 方法可返回指定位置的字符
const chartAtStr = str.charAt(1); // e

// charCodeAt() 方法可返回指定位置的字符的 Unicode 编码。这个返回值是 0 - 65535 之间的整数
const charCodeAtStr = str.charCodeAt(1); // 101

// concat() 方法用于连接两个或多个字符串
const str2 = 'other';
const concatStr = str.concat(str2); // hello Worldother

// fromCharCode() 可接受一个指定的 Unicode 值，然后返回一个字符串
const fromCharCodeStr = String.fromCharCode(72,69,76,76,79,' ',65,66,67); // HELLO ABC

// indexOf() 方法可返回某个指定的字符串值在字符串中首次出现的位置
const indexOfStr = str.indexOf("llo"); // 2

// lastIndexOf() 方法可返回一个指定的字符串值最后出现的位置，在一个字符串中的指定位置从后向前搜索
const lastIndexOfStr = str.lastIndexOf("hello"); // 0

// localeCompare() 用本地特定的顺序来比较两个字符串 [字母按顺序排，数字按顺序排]
const arr = '58611522'.split('')
arr.sort(function(a,b){return a.localeCompare(b)})

// match() 方法可在字符串内检索指定的值，或找到一个或多个正则表达式的匹配
const MatchStr = str.match('world'); // world
const MatchStr2 = str.match('World'); // null
const MatchReg = 'he 1 llo 2 worl 3 d'.match(/\d+/g); // [1, 2, 3]

// replace() 方法用于在字符串中用一些字符替换另一些字符，或替换一个与正则表达式匹配的子串
const str3 = 'hello world world world';
const replaceStr = str3.replace(/world/, "W3School"); // 'hello W3School world world'
const replaceStr2 = str3.replace(/world/g, "W3School"); // 'hello W3School W3School W3School'

let name = "Doe, John";
let name2 = name.replace(/(\w+)\s*, \s*(\w+)/, "$2 $1"); // 'John Doe'

// search() 方法用于检索字符串中指定的子字符串，或检索与正则表达式相匹配的子字符串。
const SearchStr = str.search(/world/); // -1
const SearchStr2 = str.search(/world/i); // 6


// slice() 方法可提取字符串的某个部分，并以新的字符串返回被提取的部分
const sliceStr = str.slice(6); // World
const sliceStr2 = str.slice(1, 8); // ello Wo

// split() 方法用于把一个字符串分割成字符串数组
const splitStr = str.split("") // ["h", "e", "l", "l", "o", " ", "W", "o", "r", "l", "d"]

// substr() 方法可在字符串中抽取从 start 下标开始的指定数目的字符
const substrStr = str.substr(3); // lo World

// substring() 方法用于提取字符串中介于两个指定下标之间的字符
const substringStr = str.substring(3, 7); // lo W

// toLocaleLowerCase() 方法用于把字符串转换为小写
const toLocaleLowerCaseStr = str.toLocaleLowerCase(); // hello world

// toLocaleUpperCase() 方法用于把字符串转换为大写
const toLocaleUpperCaseStr = str.toLocaleUpperCase(); // HELLO WORLD

// toLowerCase() 方法用于把字符串转换为小写
const toLowerCaseStr = str.toLowerCase(); // hello world

// toUpperCase() 方法用于把字符串转换为大写
const toUpperCaseStr = str.toUpperCase(); // HELLO WORLD

// toString() 方法返回字符串
const num = 123;
const numToStr = num.toString(); // '123'

// valueOf() 方法可返回 String 对象的原始值
const valueOfStr = numToStr.valueOf(); // '123'

// startsWith() 返回布尔值，表示参数字符串是否在源字符串的头部
const startsWithStr = str.startsWith('he'); // true

// endsWith() 返回布尔值，表示参数字符串是否在源字符串的尾部
const endsWithStr = str.endsWith('ed'); // false
const endsWithStr2 = str.endsWith('d'); // true

// includes()返回布尔值，表示是否找到了参数字符串
const includesStr = str.includes('ld'); // true
const includesStr2 = str.includes('z'); // false

// repeat()重复某个字符串几次
const repeatStr = str.repeat(2); // 'hello Worldhello World'
const repeatStr2 = str.repeat(); // ''

const s1 = str.startsWith('World',6); //true
const s2 = str.endsWith('hello',5);   //true
const s3 = str.includes('hello',6);  //false

//