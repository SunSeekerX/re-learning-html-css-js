/**
 * 语法和数据类型
 */

// 声明一个变量，可选初始化一个值。(会产生作用域提升)
var var1 = 1

// 声明一个块作用域的局部变量，可选初始化一个值。
let var2 = 1

// 声明一个块作用域的只读常量。
const var3 = 1

/**
 * 数据类型
 * 最新的 ECMAScript 标准定义了 8 种数据类型：
 */
// 七种基本数据类型
// 1. 布尔值（Boolean），有 2 个值分别是：true 和 false.
const bool1 = true
const bool2 = false

// 2. 一个表明 null 值的特殊关键字。JavaScript 是大小写敏感的，因此 null 与 Null、NULL或变体完全不同。
const varNull = null

// 3. undefined，和 null 一样是一个特殊的关键字，undefined 表示变量未赋值时的属性。
const varUndefined = undefined

// 4. 数字（Number），整数或浮点数，例如： 42 或者 3.14159。
const varNum1 = 1
const varNum2 = 3.14159

// 5. 任意精度的整数 (BigInt) ，可以安全地存储和操作大整数，甚至可以超过数字的安全整数限制。

// 6. 字符串（String），字符串是一串表示文本值的字符序列，例如："Howdy" 。
const varStr1 = 'hello, world'

// 7. 表（Symbol）( 在 ECMAScript 6 中新添加的类型).。一种实例是唯一且不可改变的数据类型。
const varSymbol1 = Symbol('varSymbol1')

// 8 以及对象（Object）。
const varObject1 = {}
