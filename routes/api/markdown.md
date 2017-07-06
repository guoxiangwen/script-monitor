# Golang编程规范

## 一、注释

推荐使用C语言风格的 “//” 注释。注释必须是完整的句子，尽量简明，以句点结尾。
程序中每一个可被导出的（大写的）类型，都应该有一个注释。
在编码阶段同步写好变量，函数，包注释，就可以使用godoc生成文档

### 1.1. 包

每个包都应该有一个包注释，包如果有多个go文件，就只需要在入口文件写包注释。
概况以 Package 开头。

``` go
// Copyright 2009 The Go Authors. All rights reserved.
// Use of this source code is Governed by a BSD-style
// license that can be found in the LICENSE file.

// Package strings implements simple functions to manipulate strings.
package strings
```

### 1.2. 函数和结构体

第一行写概况，并且使用被声明的名字作为开头。
``` go
// Compile parses a regular expression and returns, if successful, a Regexp
// object that can be used to match against text.
func Compile(str string) (regexp *Regexp, err error) {
// Request represents a request to run a command.
type Request struct { ...
```

## 二、命名

使用短命名，因为长名字并不会使得事物更易读，文档注释会比格外长的名字更有用。
需要导出的任何类型必须以大写字母开头。
### 2.1. 包名

包名应该为小写单词，不要使用下划线或者混合大小写。

### 2.2. 变量

全局变量：驼峰式，可导出的使用大写字母开头
参数传递：驼峰式，小写字母开头
局部变量：下划线风格命名
### 2.3. 接口

单函数的接口用 函数+“er” 命名，如：Reader，Writer

```go
type Reader interface {
        Read(p []byte) (n int, err error)
}
```
2个函数的接口，组合命名
```go
type WriteFlusher interface {
    Write([]byte) (int, error)
    Flush() error
}
```
3个以上函数的接口名，类似于结构体名

```go
type Car interface {
    Start([]byte)
    Stop() error
    Recover()
}
```

## 三、import

对标准包，程序内部包，第三方包进行分组。
```go
import (
    "encoding/json"         //标准包
    "strings"

    "myproject/models"      //内部包
    "myproject/utils"

    "github.com/go-sql-driver/mysql"    //第三方包
)
```

引用包时不要使用相对路径。

// 这是不好的导入
import “../net”

// 这是正确的做法
import “github.com/repo/proj/src/net”

## 四、流程控制

### 4.1. if

if接受初始化语句，约定如下方式建立局部变量。
```go
if err := file.Chmod(0664); err != nil {
    return err
}
```
### 4.2. for

采用短声明建立局部变量。
```go
for i := 0; i < 10; i++ {
}
```
### 4.3. range

如果只需要第一个 key，就省略第二个
```go
for key := range array {
}
```
如果只需要第二个 value，则丢弃第一个
```go
for _, value := range array {
}
```
### 4.4. return

尽早return
``` go
f, err := os.Open(name)
if err != nil {
    return err
}
f.Close()
d, err := f.Stat()
if err != nil {
    return err
}
codeUsing(f, d)
```
### 五、函数

采用命名的多返回值，在godoc生成的文档中，带有返回值的函数声明更利于理解。
```go
func nextInt(b []byte, pos int) (value, nextPos int, err error) {
```

## 六、错误处理

不要在逻辑代码中使用panic
error作为函数的值返回,必须对error进行处理
错误描述如果是英文必须为小写，不需要标点结尾
采用独立的错误流进行处理
不推荐：
```go
if err != nil {
    // error handling
} else {
    // normal code
}
```
好的方式：
```go
if err != nil {
    // error handling
    return // or continue, etc.
}
```
// normal code
如果返回值需要初始化，则采用下面的方式
```go
x, err := f()
if err != nil {
    // error handling
    return
}
// use x
```