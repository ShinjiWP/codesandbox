const nameArr = ["Shinji", "Tsumugi", "chika"];

// for (let index = 0; index < nameArr.length; index++){
//   console.log(`${index + 1}番目は${nameArr[index]}です`)
// }

// const nameArr2 = nameArr.map((name)=>{
//   return name;
// })

// console.log(nameArr2);

// nameArr.map((name, index) => console.log(`${index + 1}番目は${name}です`));

// const numArr = [1, 2, 3, 4, 5];

// const newNumArr = numArr.filter((num) => {
//   return num % 2 === 1 ;
// });
// console.log(newNumArr);

// const newNameArr = nameArr.map((name) => {
//   if (name === "Shinji"){
//     return name}
// else{return `${name}さん`}

// })
// console.log(newNameArr);

//三項演算子
// const val = 1 === 1 ? `true`: `false`;
// console.log(val);

// const num = "3000";
// console.log(num.toLocaleString());

// const formatNum = typeof num === 'number' ? num.toLocaleString():'数値を入力せい！'
// console.log(formatNum);

// const checkSum = (num1, num2) => {
//   return num1 + num2 > 100 ? '100を超えています': '許容範囲です';
// }
// console.log(checkSum(10,200));

//論理演算しの本当の意味

// ||は左側がfalseなら右側を返す
// const num = 100;
// const fee = num ||"金額未設定です";
// console.log(fee);

// &&は左側がtrueなら右側を返す
// const num2 = 100;
// const fee2 = num2 && "何か設定しました";
// console.log(fee2);
