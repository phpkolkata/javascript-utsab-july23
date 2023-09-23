// Asynchronous & Synchronous Javascript

// synchronous compiling
// 1
// 2
// 3
// 4
// 555555 - will take time, hold the output for a while
// 6
// 7
// 8

// Asynchronous compiling
// 1
// 2
// 3
// 4
// .....................// 555555 - will run in background,not holding the output
// 6
// 7
// 8
// 555555

// Synchronous Javascript:
// - Most of the code in js is Synchronous
// means, code will execute line by line, from top to bottom
// each line of code will wait to previous line to finish execution
// this might be a problem for certain code, like alert example

// Asynchronous Javascript:
// Asynchronous code is non blocking
// Asynchronous code execution doesn't wait to finish previous line, it runs in background
// setTimeOut is great example of Asynchronous code
