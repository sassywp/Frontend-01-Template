# 第二周总结

### 文法
* 非形式语言

* 形式语言

  * 0型：无限制文法

    * 等号左边不止一个 ::='c'

  * 1型：上下文相关文法

    * 'a''c'::='a''x''c'

  * 2型：上下文无关文法

    * js 大部分的js代码是上下文无关的

  * 3型：正则文法

### 产生式（BNF）

 * 语法结构，尖括号括起来

 * 具体结构

   * 基础结构称为终结符

   * 复合结构称为非终结符
 * 引号和中间的字符表示终结符
 * 可以有括号
 * *表示重复多次
 * ｜表示或
 * +至少一次

 #### 练习 用以上要求写一个四则运算

 ```go
  //第一步表示出0-9数字
  <Number> = '0' | '1' | '2' | ... | '9'
  //表示出所有的数字 0 或者不以0开头的其他数字
  <DecimalNumber> = '0' | (('1' | '2' | ... | '9') <Number>*)
  //下面将四则运算表示出来
  <PrimaryExpression> = <DecimalNumber> |
    "(" <LogicalExpression> ")"

  <MultiplicativeExpression> = <PrimaryExpression> | 
      <MultiplicativeExpression> "*" <PrimaryExpression>| 
      <MultiplicativeExpression> "/" <PrimaryExpression>

  <AdditiveExpression> = <MultiplicativeExpression> | 
      <AdditiveExpression> "+" <MultiplicativeExpression>| 
      <AdditiveExpression> "-" <MultiplicativeExpression>

  <LogicalExpression> = <AdditiveExpression> | 
      <LogicalExpression> "||" <AdditiveExpression> | 
      <LogicalExpression> "&&" <AdditiveExpression>

 ```

 ### 图灵完备性

  * 命令式 --- 图灵机

    * goto
    * if 和 while
  
  * 声明式 --- lambda

    * 递归
