/*
1. 类型转换与比较 (Equality)
请解释 [] == ![] 的结果是 true 还是 false？为什么？
*/

/*
2. 变量提升与作用域 (Hoisting & Scope)
以下代码会输出什么？为什么？
var a = 10;
function test() {
    console.log(a);
    var a = 20;
}
test();
*/


/*
闭包与循环 (Closures in Loops)
如何修改以下代码，使其每隔一秒分别输出 0, 1, 2？（目前它会输出三个 3）
for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 1000);
}
*/


/*
4. 对象引用与深浅拷贝 (Object Reference)
修改 obj2.b.c 后，obj1.b.c 的值是多少？如何实现真正的深拷贝？
const obj1 = { a: 1, b: { c: 2 } };
const obj2 = { ...obj1 };
obj2.b.c = 3;
*/


/*
5. 数组操作：Map vs ForEach
map() 和 forEach() 的核心区别是什么？在什么场景下必须用 map？
*/


/*
6. 异步处理：Promise.all (Error Handling)
如果有 3 个 Promise，其中 1 个被 reject 了，Promise.all([p1, p2, p3]) 的结果是什么？如果你希望即使有一个失败也要获取其他两个的结果，该用哪个方法？
*/


/*
7. 函数原型与 This (Context)
以下代码输出什么？如果想让它正确输出 "John"，该如何修改？
const person = {
  name: "John",
  greet: function() {
    setTimeout(function() {
      console.log(this.name);
    }, 1000);
  }
};
person.greet();
*/

/*
8. 现代语法：解构赋值与默认值 (Destructuring)
如果 data 为 { user: { id: 1 } }，执行以下代码会有什么结果？如何安全地解构嵌套的 name 字段并给它一个默认值 "Guest"？
const { user: { name } } = data;
*/


/*
9. 高阶函数：Reduce 的应用
给定数组 [1, 2, 2, 3, 3, 3]，请用 reduce() 方法写出统计每个数字出现次数的代码
*/


/*
10. 性能优化：防抖与节流 (Debounce & Throttle)
请口述（或写出核心逻辑）：在处理“用户搜索输入”实时请求 API 时，应该用防抖还是节流？理由是什么？
*/


