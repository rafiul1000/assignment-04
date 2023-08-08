
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
  
//   console.log(cubeNumber(''));

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

//   console.log(matchFinder('Rafiul', 'fiu'));

// ============================================================================


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
  
  const changeArray = [5, 2, 3];
  const totalDue = 10;
  console.log(canPay(changeArray, totalDue));

  
  