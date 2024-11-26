// 1. 使用 prompt 输入一个整数，判断它是奇数还是偶数，并通过 alert 输出相应的结果。
// let num1 = prompt('请输入一个整数');
// num1 % 2 === 0 ? alert('偶数') : alert('奇数')
// 2. 使用 prompt 输入一个华氏温度（Fahrenheit），将其转换为摄氏温度（Celsius）并使用 alert 输出。转换公式：C = (F - 32) \* 5 / 9。
// let num2 = prompt('输入一个华氏温度')
// alert(`摄氏温度为${(num2 - 32) * 5 / 9}`)
// 3. 使用 prompt 输入一个 0 到 100 之间的整数表示学生的成绩，根据成绩使用 alert 输出相应的等级（A, B, C, D, F）。例如，90 - 100 为 A，80 - 89 为 B，以此类推。
// let num3 = prompt('请输入一个0-100的整数');
// num3 < 0 ? alert('输入不符合要求') : num3 < 60 ? alert('F') : num3 < 70 ? alert('D') : num3 < 80 ? alert('C') : num3 < 90 ? alert('B') : num3 <= 100 ? alert('A') : alert('输入不符合要求')
// 4. 使用 prompt 输入三角形三条边的长度，判断它们是否能构成三角形，如果能，则判断是哪种类型的三角形（等边、等腰或普通）。
// let arr = []
// for (i = 0; i < 3; i++) arr.push(+prompt(`输入三角形的第${i + 1}条边`))
// if (arr[0] + arr[1] > arr[2] && arr[1] + arr[2] > arr[0] && arr[2] + arr[0] > arr[1]) {
//   if (arr[0] === arr[1] && arr[1] === arr[2] && arr[2] === arr[0]) {
//     alert('等边三角形')
//   } else if (arr[0] === arr[1] || arr[1] === arr[2] || arr[2] === arr[0]) {
//     alert('等腰三角形')
//   } else {
//     alert('普通三角形')
//   }
// } else {
//   alert('不构成三角形')
// }
// 5. 使用 prompt 输入一个年份，判断是否为闰年并通过 alert 输出相应的结果。
// let year = prompt('请输入一个年份')
// year % 4 === 0 && year % 100 !== 0 ? alert('是闰年') : alert('不是闰年')


// 6. 使用 prompt 输入一个整数 n，查找并打印出小于等于 n 的所有素数。
// let n = prompt('输入一个整数 n')
// for (j = 2; j <= n; j++) {
//   let flag = true
//   for (let i = 2; i < j; i++) {
//     if (j % i === 0) {
//       flag = false
//       break
//     }
//   }
//   if (flag) {
//     document.write(`${j}是素数<br>`)
//   }
// }

// 7. 使用 prompt 输入一个整数 n 使用循环打印出前 n 个斐波那契数列的数字。
// let n = prompt('输入一个整数 n')
// let a = [1, 1]
// for (let i = 0; i <= n; i++) {
//   if (i > a.length) {
//     a.push(a[a.length - 1] + a[a.length - 2])
//   }
// }
// document.write(a)
// 8. 使用 prompt 输入一个字符串，使用循环将其反转并 alert 输出。
// let str = prompt('输入一个字符串')
// let newStr = ''
// for (let i = 0; i < str.length; i++) {
//   newStr += str[str.length - i-1]
// }
// document.write(newStr)
// 9. 生成一个 1 到 100 之间的随机数，让用户猜这个数，每次猜测后给出提示（大了、小了或猜对了），直到用户猜对为止。
// function getRandom(min, max) {
//   return Math.floor(Math.random() * (max - min + 1)) + min
// }
// let num100 = getRandom(1, 100)
// let num4
// while (true) {
//   num4 = prompt('猜猜我心里想的数字')
//   if (num4 > num100) {
//     alert('猜大了')
//   } else if (num4 < num100) {
//     alert('猜小了')
//   } else {
//     alert('猜对了')
//     break
//   }
// }

// 10. 使用 prompt 输入若干学生的成绩（输入 0 表示结束输入），计算并输出平均分、最高分和最低分。
// let score
// let arr = []
// let sum = 0
// do {
//   score = +prompt('输入若干学生的成绩（输入 0 表示结束输入）')
//   arr.push(score)
// } while (score !== 0);
// arr.pop()
// arr.sort(function (a, b) {
//   return a - b
// })
// console.log(arr);

// for (let i = 0; i < arr.length; i++) {
//   sum += arr[i]
// }
// document.write(`平均分是:${sum / arr.length}<br>`)
// document.write(`最高分是:${arr[arr.length - 1]}<br>`)
// document.write(`最低分是:${arr[0]}<br>`)
// 11. 使用 prompt 输入一个整数 n，检查并输出它是否是完数（一个数恰好等于它的所有真因子之和，如 6 = 1 + 2 + 3）。
// let n = +prompt('输入一个整数')
// let sum = 0
// for (let i = 1; i < n; i++) {
//   sum += n % i === 0 ? i : 0
// }
// sum>0&&sum===n?alert('是完数'):alert('不是完数')
