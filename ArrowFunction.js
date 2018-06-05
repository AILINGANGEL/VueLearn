  //不具备this和arguments
  //自己没有this,就找上一级的this
  
  //如何更改this指向
  //1)call, apply, bind
  //2) var that = this
  //3) =>

  //如何确定this是谁
  //如何确定this是谁，看谁调用，.前面是谁this就是谁

//   function a(b) {
//   	return b+1;
//   }

// let a = b => b+1 //去掉function关键字,参数只有一个可以省略小括号,小括号和大括号直接有一个箭头，如果没有大括号则直接是返回值，有大括号必须写return

function a(b) {
	return function(c) {
		return b+c;
	}
}
let func = a(1)(2)

let a = b => c => b+c //高阶函数,两个及以上的箭头

//闭包:函数执行的一瞬间,会产生一块不销毁的作用域,当执行后返回的结果必须是引用数据类型被外界变量接收，此时这个函数不会销毁(模块化)
let a = function (b) {
	return function(c) {
		return b+c;
	}
}()

//在vue中很多时候不能用箭头函数