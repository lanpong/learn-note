对于Javascript中并没有原生的可以构造Stack的库函数，这里需要自己来构造Stack的构造函数。

当然这里需要一些特性的描述。
    - FILO (first in last out) 先进后出原则
    - 判断栈是否为空使用的是isEmpty，这里由于是用数组来模拟栈，可以使用 `.length` 在构造里判断
    - 取栈顶元素 peek
    - 清空栈 clear
    - 进栈出栈 push pop