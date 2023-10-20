/**
 * const,let等の変数宣言
 */
// var val1 = "var変数";
// console.log(val1);

// // var変数は上書き可能
// var val1 = "var変数を上書き";
// console.log(val1);

// // var変数は再宣言可能
// var val1 = "var変数を再宣言";
// console.log(val1);

// let val2 = "let変数";
// console.log(val2);

// //letは上書きが可能
// val2 = "let変数を上書き";
// console.log(val2);

// //letは再宣言不可能
// let val2 = "let変数を再宣言";

// const val3 = "const変数";
// console.log(val3);

// constは上書き不可
// val3 = "const変数を上書き";
//const val3 = "const変数を再宣言";

//constで定義したオブジェクトはプロパティの変更が可能
// const val4 = {
//   name:"じゃけぇ",
//   age:28,
// };
// val4.name = "jak";
// val4.addres = "Hiroshima";
// console.log(val4);

//constで定義した配列はプロパティの変更が可能
// const val5 = ['dog', 'cat'];
// val5[0] = "bird";
// val5.push("monkey");
// console.log(val5);

/**
 * テンプレート文字列
 */
// const name = "じゃけぇ";
// const age = 28;
//「私の名前はじゃけぇです。年齢は28歳です」

//従来の方法
// const massage1 = "私の名前は" + name + "です。年齢は" + age + "歳です。";
// console.log(massage1);

//テンプレート文字列を用いた方法
// const massage2 = `私の名前は${name}です。年齢は${age}です。`;
// console.log(massage2);

/**
 * アロー関数
 */
//従来の関数
// function func1(str){
//   return str;
// }
// const func1 = function(str){
//   return str;
// }
// console.log(func1("func1です"));

//アロー関数
// const func2 = (str) => {
// return str;
// }
// const func2 = (str) => str;

// console.log(func2("func2です"));

// const func3 = (num1,num2) => {
//   return num1 + num2;
// };
// const func3 = (num1,num2) => num1 + num2;

// console.log(func3(10,20));

/**
 * 分割代入
 */
//  const myProfile = {
//    name:"じゃけぇ",
//    age: 28,
//  };
//  const massage1 = `名前は${myProfile.name}です。年齢は${myProfile.age}です`;
//  console.log(massage1);

// const {name,age} = myProfile;
// const massage2 = `名前は${name}です。年齢は${age}です`;
// console.log(massage2);

// const myProfile = ['じゃけぇ',28];

// const message3 = `名前は${myProfile[0]}です。年齢は${myProfile[1]}`;
// console.log(message3);

// const [name, age] = myProfile;
// const message4 = `名前は${name}です。年齢は${age}です`;
// console.log(message4);

/**
 * デフォルト値
 */
// const sayHello = (name = "ゲスト") => console.log(`こんにちは${name}さん`);
// sayHello("じゃけぇ");
// sayHello();

/**
 * スプレッド構文
 */
// 配列の展開
// 
// const arr2 = [1,2,3,4,5];
// const [num1,num2,...arr3] = arr2;
// console.log(num1);
// console.log(num2);
// console.log(arr3);

//配列のコピー、結合
// const arr4 = [10,20];
// const arr5 = [30,40];

// const arr6 =[...arr4];
// arr6[0] = 100;
// console.log(arr6);
// console.log(arr4);

// const arr7 = [...arr4,...arr5];
// console.log(arr7);

// const arr8 = arr4;
// console.log(arr4);
// arr8[0] = 100;

/**
 * maplやfilterを使った配列の処理
 */
const nameArr = ["田中","山田","じゃけぇ"];
// for (let index = 0; index < nameArr.length; index++){
//   console.log(nameArr[index]);
// }

// const nameArr2 = nameArr.map((name) =>{
//   return name;
// })
// console.log(nameArr2);

/**
 * 三項演算子
 */
//ある条件 ? 条件がtrueの時 : 条件がfalseの時
// const val1 = 1 < 0 ? `trueです` : `falseです`;
// console.log(val1);

// const num = 1300;
// console.log(num.toLocaleString());

// const num = 1300;
// const formattedNum = typeof num === `number` ? num.toLocaleString() : `数値を入力してください`;

// console.log(formattedNum);

/**
 * 論理演算子の本当の意味を知ろう && ||
 */

//  const flag1 = true;
//  const flag2 = true;

//  if (flag1 || flag2){
//    console.log("1 or 2 ture");
//  }
//  if (flag1 && flag2){
//   console.log("1 and 2 ture");
// }

// ||　は左側がfalseなら右側を返す
// const num = null;
// const fee = num || "金額未設定";
// console.log(fee);

// && は左側がtrueなら右側を返す
const num2 = 100;
const fee2 = num2 && "何か設定されました";
console.log(fee2);

