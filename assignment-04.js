
// 01


/* 
তোমাকে cubeNumber() নামে একটা function দে ওয়া হয়েছে । functionটা একটা positive input নাম্বার নি বে ।
Task:
1. input নাম্বারটাকে cube করে result টা রি টার্ন করবে ফাংশন থেকে ।
2. Bonus: ইনপুট হিসেবে number টাইপ এর পরিবর্তে অন্য কিছু দিলে তুমি একটা মিনিংফুল মেসেজ রিটার্ন
করে দিবে ফাংশন থেকে । */

function cubeNumber(input) {
    if(typeof input !== 'number' || input <= 0) {
      return 'Opps!! you must provide a positive number.';
    }
  
    const result = input ** 3;
    return result;
  }
  
  console.log(cubeNumber(3));
  console.log(cubeNumber(4));

// =========================================================


// 02


/* 

তোমাকে একটা function দে ওয়া হবে called “matchFinder()” যা ইনপুট হি সে বে দইুটা string নি বে ।
Task:
1. যদি প্রথম স্ট্রিংটির কোনো একটি অংশে র সাথে দ্বি তীয় স্ট্রিংটির পুরোপুরি মিল খুজে পাও সেক্ষেত্রে তুমি true
রিটার্ন করবে ।

2. আর যদি পুরোপুরি মিল খুজে  না পাও সেক্ষেত্রে তুমি false রিটার্ন করবে ।
3. Bonus: দটিু ইনপুট স্ট্রিং দে ওয়া হলো কিনা সেটা validate করবে । যদি দইুটি বা যেকোন একটি ইনপুট স্ট্রিং না হয় সে ক্ষে ত্রে তুমি একটা মি নি ংফুল মে সে জ রি টার্ন করে দি বে ।

*/


function matchFinder(string1, string2) {
    if (typeof string1 !== 'string' || typeof string2 !== 'string') {
      return 'Opps!! your input or inputs are wrong. Please, check your inputs.';
    }
  
    if (string1.includes(string2)){
      return true;
    }
    else {
      return false;
    }
  };

  console.log(matchFinder('John Doe', 'ohn'));
  console.log(matchFinder('JavaScript', 'Code'));
  console.log(matchFinder('Peter Parker', 'Pen'));
  console.log(matchFinder('Peter Parker', 'pet'));

// ============================================================================



// 03

/*   তোমাকে একটা ফাংশন লিখতে হবে যার নাম হবে sortMaker()। এই ফাংশনের parameter হবে একটি array এবং এই array তে সবসময় দইুটি উপাদান থাকবে ।
  Task:
  1. যদি অ্যারের দইুটি উপাদান পজিটিভ সংখ্যা হয় সেক্ষেত্রে তুমি অ্যারেটিকে বড়ো থেকে ছোট ক্রমে সাজিয়ে রিটার্ন করবে ।
  2. যদি দুইটি উপাদান একই হয় সেক্ষেত্রে তুমি এই স্ট্রিং রিটার্ন করবে  “equal”
  3. Bonus: যদি অ্যারের যেকোন একটি উপাদান নেগেটিভ সংখ্যা হয় সেক্ষেত্রে তুমি রিটার্ন করবে “Invalid Input” */

function sortMaker(arr) {
  let positiveArray = [];
  let NegativeArray = false;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] <= 0) {
      NegativeArray = true;
      break;
    }
    positiveArray.push(arr[i]);
  }

  if (NegativeArray) {
    return "Invalid Input";
  }

  for (let i = 0; i < positiveArray.length - 1; i++) {
    for (let x = i + 1; x < positiveArray.length; x++) {
      if (positiveArray[i] < positiveArray[x]) {
        let testArray = positiveArray[i];
        positiveArray[i] = positiveArray[x];
        positiveArray[x] = testArray;
      }
    }
  }

  if (positiveArray.length === 0) {
    return arr;
  } else if (positiveArray.length === 1) {
    return positiveArray;
  } else if (positiveArray[0] === positiveArray[1]) {
    return "equal";
  } else {
    return positiveArray;
  }
};


  console.log(sortMaker([2,3]));
  console.log(sortMaker([4,2]));
  console.log(sortMaker([4,4]));
  console.log(sortMaker([1,2]));
  console.log(sortMaker([4,-2]));

// ============================================================================

// 04


/* তোমাকে একটা function দেওয়া হবে called “findAddress()” যা ইনপুট হিসেবে একটা object নিবে Object এর তিনটি property থাকবে ।
Task:
1. তোমাকে ১ম sample output এর format এ output return করতে হবে ।
2. Bonus: যদি object এর কোনো property missing থাকে সেক্ষেত্রে সেই অংশটুকু double underscore
দিয়ে replace হবে । (২য় output এর format এ ) */



function findAddress(obj) {
  let myResults = '';
  
  if ('street' in obj) {
    myResults += obj.street + ', ';
  }
  
  else {
    myResults += '__, ';
  }

  if ('house' in obj) {
    myResults += obj.house + ', ';
  }
  
  else {
    myResults += '__, ';
  }

  if ('society' in obj) {
    myResults += obj.society;
  }
  
  else {
    myResults += '__';
  }
  
  return myResults;
};

 const input1 = { street: 10, house: "15A", society: "Earth Perfect" };
console.log(findAddress(input1));

const input2 = { street: 10, society: "Earth Perfect" };
console.log(findAddress(input2));

const input3 = { street: 10 };
console.log(findAddress(input3));




// =============================================================================

// 05


/* 

তুমি দ োকানে একটা চি প্স কি নতে গে লা কি ছুখুচরা টাকার ন োট নি য়ে । একটা canPay() নামে function বানাও যে টা
২টা ইনপুট নিবে একটা array, এবং আরেকটা number।
1. Array এর প্রত্যেক টা element  তোমার খুচরা টাকা বুঝাবে
1 taka
2 taka
5 taka
2. second input টা বুঝাবে চিপ্স এর দাম।
Task:
1. যদি খুচরা টাকা গুলো যোগ করে চি প্স এর দাম বা তার বেশি হয় তাহলে true রিটার্ন করবে।
2. আর যদি নোটগুলর যোগফল চিপ্স এর দামের চেয়ে কম হয় সেক্ষেত্রে false রিটার্ন করবে ।
3. Bonus: ইনপুট এর প্রথম উপাদান empty অ্যারে কি না চেক করবে । empty অ্যারে হলে মিনিংফুল মেসেজ রিটার্ন করে দিবে ।

*/


function canPay(changeArray, totalDue) {
    if (changeArray.length === 0) {
      return "Your wallet is empty!";
    }
  
    let totalMoney = 0;
    for (let i = 0; i < changeArray.length; i++) {
      totalMoney += changeArray[i];
    }
  
    if (totalMoney >= totalDue) {
      return true;
    }
    
    else {
      return false;
    }
  }
  
  const changeArray1 = [1, 2, 5];
  const totalDue1 = 10;

  const changeArray2 = [1, 5, 5];
  const totalDue2 = 10;

  console.log(canPay(changeArray1, totalDue1));
  console.log(canPay(changeArray2, totalDue2));

  
  