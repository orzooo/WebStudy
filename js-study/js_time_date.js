/*
var x, y ,z;
x = 22;
y = 11;
z = x + y;
console.log("z的值是" + z + "。")

var person = {
    firstName: "Bill",
    lastName: "Gates",
    id: 678,
    fullName : function() {
        return this.firstName + " " + this.lastName;
    }
};
console.log(person.fullName)*/






// function dispalyDate(){
//     document.getElementById("demo").innerHTML = Date();
// }
var x = "123";
var y = x.length;
console.log(y)


// 转义字符
// \反斜杠
// \b 退格键
// \f 换页
// \n 新行
// \r 回车
// \t 水平制表符
// \v 垂直制表符


/*查找字符串*/
// indexOf()返回字符串中指定文本首次出现的索引
// lastIdexOf()返回指定文本所在字符串中最后一次出现的索引
//search()方法搜索特定值的字符串，返回字符串中指定文本第一次出现的位置
// var str = "Apple, Banana, Mango";
// var res = str.slice(-13) ;
// console.log(res)

/*
var x = "Hello"
var y = "World"

var z = x + " " + y;
var c = x.concat(" " , y, "!");
console.log(z, "\n", c);

*/
// 设置
function checkObj(obj, checkProp) {
    if (obj.hasOwnProperty(checkProp)) {
        return obj[checkProp];
    } else {
        return "Not Found";
    }
}

console.log(checkObj({gift: "pony", pet: "kitten", bed: "sleigh"}, "gift"));


const obj = (x=1,y=2) => x+y;
var z =obj()
console.log(z);


