// 1)

// დავწეროთ ლოგიკა რომლის მიხედვითაც საიტზე უნდა დავუშვათ მხოლოდ ზრდასრული ხალხი:

// 5-13 წლამდე არის ბავშვი!
// 13-20 წლამდე არის თინეიჯერი!
// 20 წლის მერე ყველა არის ზრდასრული!!

// let age = "27"

// if (age>5 && age<=13 ){
//     console.log("ბავშვი")
// } else if (age>13 &&age <=19 ){
//     console.log("თინეიჯერი")
// } else if(age> 20){
//     console.log("adult")
// }else if(age<5){
//     console.log("error")
// }

//   2)


// დავწეროთ ლოგიკა რომლის მიხედვითაც გავიგებ მომხმარებლის მიერ ბრაუზერიდან შემოყვანილი
//  რიცხვი ლუწია თუ კენტი და დავლოგოთ შესაბამისად!!


// let number = 7

// if (number % 2 === 0){
//     console.log("even")
// }else{
//     console.log("odd")
// }

//   3)


// დავწეროთ switch case გამოყენებით ლოგიკა რომლის მიხედვითაც გავიგებ
//  დღეს კვირის რომელი დღეა გამოიყენეთ new Date();

// let currentDate = new Date().getDate;

// console.log(currentDate);

// switch (currentDate) {
//   case 0:
//     console.log(Sunday);
//     break;
//   case 1:
//     console.log(Monday);
//     break;
//   case 2:
//     console.log(Tuesday);
//     break;
//   case 3:
//     console.log(Wednesday);
//     break;
//   case 4:
//     console.log(Thursday);
//     break;
//   case 5:
//     console.log(Friday);
//     break;
//   case 6:
//     console.log(Saturday);
//     break;
// }

// let weekDays = [Sunday,Monday,Tuesday,Wednesday,Thursday,Friday,Saturday]

// switch ("weekDays") {
//     case "":
//         alert("hello nika");
//         break;

//         default:
//             break;
// }


// 4




//   function checkPasswordStrength (password) {
//     if (password.length === 0) {
//         return "enter password"
//     }  else if (password.length < 8) {
//         return "password must be more than 8"
//     } else if (password.length> 16) {
//         return "password must be less than 16"
//     } else {
//         return "correct"
//     }
// }
// console.log(checkPasswordStrength (prompt("enter your password")) )



// 5  counter



// let counter = 0

// function intervalTime(){
//     let setInter = setInterval(()=>{
//         console.log(counter)
//         counter++;
   

//     if(counter === 10){
//         clearInterval(setInter)
//         return console.log("end")
//     }
// },1000);
// }



// 6


// const products = [
//     id : 1 ;
//     title : "Product A";
//     price : 9.99;
//     category:"books";
// ]

// function newUpdateArray(product_data){
//     return product_data.map((product)=>{
//         return{
//             ...product_data,
//             isCart:false
//         }
//     })
// }

// console.log(newUpdateArray(product))



// 7


// const users = ["nick","nugo","David","Saba"]

// // const result = users.filter(item => item === "David")
// // console.log(result)

// const result = users.filter(item => item !== "David")
// console.log(result)

// some t/f gvibrunebs
// const users = ["nick","nugo","David","Saba"]

// const result = users.some(item => item === "David")


//8)



// დავწეროთ Promise რომლის მიხედვითაც პირობითად მოგვდის სამი სერვერიდან დატა ანუ გვჭირდება
//  სამი ფუნქცია ფრომისით, და ერთერთი მაინც რომ reject იყოს არ უნდა მქონდეს საშუალება რომ
//  მივიღო response წარმატებულ შედეგად.

// const user_1 = () => {
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         resolve([
//           {
//             id: 1,
//             name: "luka",
//             isAdmin: false,
//           },
//         ]);
//       }, 7000);
//     });
//   };
  
//   const user_2 = () => {
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         reject("error");
//         resolve([
//           {
//             id: 2,
//             name: "giga",
//             isAdmin: false,
//           },
//         ]);
//       }, 4000);
//     });
//   };
  
//   const user_3 = () => {
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         resolve([
//           {
//             id: 3,
//             name: "giorgi",
//             isAdmin: false,
//           },
//         ]);
//       }, 5000);
//     });
//   };
  
//   Promise.all([user_1(), user_2(), user_3()])
//     .then((user) => {
//       console.log(user);
//     })
//     .catch(console.log);
  
  //9)
  
  
  
//   დავწეროთ ასინქრონული ფუნქციები სადაც გვექნება Promise, რომლის მიხედვითაც პირობითად
  // მოგვდის ოთხი სერვერიდან user data და ეს Promise უნდა აბრუნებდეს სხვასხვა დატას,
  //  მაგალითად [{id: 1, name: 'luka', isAdmin: false}]
  // რომელიც პირველი დაასწრებს შესრულებას ის დატა უნდა მივიღო კონსოლში.
  
  // const user1 = () => {
  //   return new Promise((resolve, reject) => {
  //     setTimeout(() => {
  //       resolve([
  //         {
  //           id: 1,
  //           name: "luka",
  //           isAdmin: false,
  //         },
  //       ]);
  //     }, 7000);
  //   });
  // };
  
  // const user2 = () => {
  //   return new Promise((resolve, reject) => {
  //     setTimeout(() => {
  //       resolve([
  //         {
  //           id: 2,
  //           name: "giga",
  //           isAdmin: false,
  //         },
  //       ]);
  //     }, 4000);
  //   });
  // };
  
  // const user3 = () => {
  //   return new Promise((resolve, reject) => {
  //     setTimeout(() => {
  //       resolve([
  //         {
  //           id: 3,
  //           name: "giorgi",
  //           isAdmin: false,
  //         },
  //       ]);
  //     }, 5000);
  //   });
  // };
  
  // const user4 = () => {
  //   return new Promise((resolve, reject) => {
  //     setTimeout(() => {
  //       resolve([
  //         {
  //           id: 4,
  //           name: "mamuka",
  //           isAdmin: false,
  //         },
  //       ]);
  //     }, 9000);
  //   });
  // };
  
  // Promise.race([user1(), user2(), user3(), user4()])
  //   .then((user) => {
  //     console.log(user);
  //   })
  //   .catch(console.log);




  // ასინქრონული



  // 10



  // const fetchData = () => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//         // reject("error")
//       resolve({
//         data: {
//           id: 1,
//           name: "nick",
//           age: 18,
//           position: "javascript guru",
//         },
//       });
//     });
//   });
// };


// fetchData().then(console.log).catch((err)=>{console.log(err)})

// const fetchData2 = () => {
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         //   reject("error")
//         resolve({
//           data: {
//             id: 1,
//             name: "vigac",
//             age: 22,
//             position: "ragac",
//           },
//         });
//       });
//     });
//   };




//   Promise.all([fetchData(),fetchData2()]).then((fetchData,fetchData2)=>{
//     console.log(fetchData,fetchData2)
//   }).catch(console.log)


// Promise.race([fetchData(),fetchData2()]).then((fetchData,fetchData2)=>{
//     console.log(fetchData,fetchData2)
//   }).catch(console.log)

// Promise.any([fetchData(),fetchData2()]).then((fetchData,fetchData2)=>{
//     console.log(fetchData,fetchData2)
//   }).catch(console.log)

// Promise.allSettled([fetchData(),fetchData2()]).then((fetchData,fetchData2)=>{
//     console.log(fetchData,fetchData2)
//   }).catch(console.log)







// 11


//   const image1 = () => {
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         resolve("image 1");
//       },3000);
//     });
//   };

//   const image2 = () => {
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//          resolve("image 2");
//       },4000);
//     });
//   };

//   const image3 = () => {
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//           reject("error")
//         resolve("image 3");
//       },5000);
//     });
//   };
  



// Promise.any([image1(),image2(),image3()]).then((image2)=>{
//     console.log(image2)
//   }).catch(console.log)






// FETCH / HTTP METHODS


// 12




// fetch("")
// .then(response => response.json())
// .then(data =>{
//   data.array.forEach(item => {
//   const li = document.createElement("li")
//   // li.innerHTML = '
//   // <div>
//   // <li ></li>
//   // <li> </li>
//   // </div>
//   // ';
// });})




// 13


// fetch("https://jsonplaceholder.typicode.com/posts")
// .then(response => response.json())
// .then(data =>{
//   data.forEach(data => {
//     const table = document.createElement("tr");
//     table.innerHTML = `
//         <tr>
//         <th>${data.title}</th>
//         <th>${data.body}</th>
//         </tr>
//         `;
//     document.body.appendChild(table);
//   });  
 
//   })



// OBJECTS







// 14


// const users_data = [
//   {
//     id:1,
//     username:"vigac",
//     lastname:"ragac",
//     email:"email@mail.ge",
//     fullname:function(){
//       return `${this.username}${this.lastname}`
//     }

//   }
// ]

// console.log(users_data[0].lastname)
  




// 15


// const users_data = [
//   {
//     username: "Mariam",
//     lastname: "Gagnidze",
//     age:21,
//     email: "gagnidzeem@gmail.com",
//     address: [
//       {
//         city: "Tbilisi",
//         location: [
//           {
//             id: 1079,
//             street:"I.Abashidze 62" ,
//           },
//         ],
//       },
//     ],
//     job:"Project Manager",
//     education :"student",
//     fullInfo: function () {
//       return ` My name is ${this.username} ${this.lastname}I am ${this.age} years old ${this.job} and I am ${this.education} as well
//       living in ${this.address[0].city},my email is ${this.email}`  ;
//     },
//   },
// ];
// console.log(users_data[0].fullInfo());






// OOP


// 16




// class myInfo {
//     constructor(id, name, lastName,email,address) {
//       this.id = id;
//       this.name = name;
//       this.lastName = lastName;
//       this.email = email;
//       this.address = address;
//     }
  
//     fullInfo() {
//       return `My name is ${this.name} ${this.lastName},my email address is
//       ${this.email},I live in ${this.address} with ID ${this.id}`
//     }
//   }
  
//   const new_info = new myInfo(1,"Mariam","Gagnidze","Gagnidzeem@gmail.com","Tbilisi");
//   console.log(new_info.fullInfo());



// 17

// class Calculator {
//     constructor(initialValue = 0){
//         this.value = initialValue;
//     }

//     add(number){
//         this.value += number; 
//         return this;
//     }

//     multiplay(number){
//         this.value *= number;
//         return this;
//     }

//     minus(number){
//         this.value -= number;
//         return this;
//     }

//     gakofa(number){
//         this.value *= number;
//         return this;
//     }

//     getValue(){
//         return this.value;
//     }
// }

// const calc = new Calculator(10);
// console.log(calc.add(10).multiplay(2).minus(10).gakofa(2).getValue());



// 18

//   let result = [];
//   const obj = {
//     a: 10,
//     b: 20,
//     c: 30
// }


// function objectKeys(obj_data){
//     const result = []
//     for (let key in obj_data) {
//     result.push(key);
//   }
//   return result;
// }

// console.log(objectKeys(obj));



// 19

// function first(callback){
  // return first("ragac")
  // }
  
  // console.log(first())





  // დავალების ამოცანები



  //20)
  
  
  // დაწერეთ კოდი, სადაც აღწერთ თითოეული პრიმიტიული
//მონაცემთა ტიპის ცვლადს სხვადასხვა მნიშვნელობებით და 
// შეუცვალეთ რამდენიმეს შემდგომ მნიშვნელობები ანუ 
//გადააწერეთ ახალი მნიშვნელობა და დალოგეთ შემდეგ ეს ცვლადები.


// let age = 21; 
// let names ='Mariam';
// // let isStudent = false;
// let Address;
// let cities = null;


// console.log(age);
// console.log(names);
// // console.log(isStudent);
// console.log(Address);
// console.log(cities);


// let isStudent = (false);
// console.log("before changes -->",isStudent)
// isStudent = (true);
// console.log("after changes -->",isStudent)

// console.log(isStudent);




//21)


// აღწერეთ არაპრიმიტიული მონაცემთა ტიპები მაგალითად array
// და array-ში რომ გქონდეთ object და თქვენ შესახებ ინფორმაცია აღწერეთ ამ
// object-ში;მაგალითად let user = [{name: 'nika'}] და ასე
//შემდეგ ყველა ინფორმაციით შეავსეთ თქვენ შესახებ რომელიც შეიცავს
//(firstName,lastName,age,email,address,isStudent) და დალოგეთ

// Array არის მონაცემთა არაპრიმიტიული ტიპი,რომელსაც შეუძლია "დაიტიოს"
// არაერთი მონაცემი (value).



// let User = [ 
//     { 
//     firstName: 'Mariam',
//     lastName: 'Gagnidze',
//     age: 21,
//     email: 'mariamgagnidze77@gmail.com',
//     address: 'Tbilisi',
//     isStudent: true,
//     }	
// ]




// console.log(User);



//22)


// //დაწერეთ პატარა ბიოგრაფია თქვენს შესახებ და მაქსიმალურად ჩაშალეთ ცვლადებად და console-ში უნდა მივიღო სრული ტექსტი
// //მაგალითად უნდა შეიცავდეს ინფორმაციას(firstName, lastName, age, job, skills,address) გამოიყენეთ template literal მიდგომა

// //answer:


// let firstname = 'Mariam'
// let lastname  = 'Gagnidze'
// let age = 21
// let job = 'Energy Project Manager'
// let skills = 'untalented'
// let adress = 'Tbilisi'
// let User = `Hello, my name is ${firstname} 
// My lastname is ${lastname} 
// I am ${age} years old
//  I work as a ${job} 
//  I am really ${skills} person but I am trying hard 
//   i live in ${adress}`


// console.log(User)

// //23



// //დაწერეთ პროგრამა, რომელიც იყენებს ლოგიკურ ოპერატორებს (&&, ||, ! ===)
// //იმის დასადგენად, არის თუ არა მოცემული წელი 2023 ან უკვე 2024; რამენაირად გამოთვალეთ და დაწერეთ ლოგიკა
// // ყველა ინფივიდულაურად დაწერეს წესით!!

// //answer:

// let lastYear = 2023
// let thisYear = 2024
// let result = lastYear > thisYear  || lastYear < thisYear

// let result2 = lastYear > thisYear  && lastYear < thisYear

// console.log(result)
// console.log(result2)


// let currentAge= 22  
// // ჯერ 21ის ვარ მაგრამ ეგრე 2023 გამოდის ისევ))
// let birthYear = 2002
// let currentYear = currentAge + birthYear

// console.log(currentYear)



// //24


// ააწყვეთ პატარა counter ლოგიკა სადაც გამოიყენებთ მაგალითად let x = 10; x++, x-- რომლის მიხედვითაც increment ერთ
// // console-ში მეორე console-ში კი decrement!!

// let x = 10
// let a = x++
// console.log(a)
// let b = x--
// console.log(b)



// 25



// // let a = 10;
// // let b = 12;
// //
// // let andOperator = a < 9 && b >= 11; //result --> false: 
// // let orOperator = a > 11 0 || b < 10; //result --> false:
// // let notOperator = !(a > 10); //result --> true :


// 26) 


// დაწერეთ კოდი სადაც შეამოწმებთ დადებითია თუ უარყოფითი
// // ეს რიცხვი!!

// //answer:

// let number = -2;

// let input = prompt("Enter a number:");
// if (number > 0) {
//   console.log("positive");
// } else if (number < 0) {
//   console.log("negative");
// } else {
//   console.log("zero or not a number");
// }

// //27


// დაწერეთ მარტივი კალკულატორი სადაც გამოიყენებთ ოპერატორებს(+, -, *, /)
// // switch case დახმარებით უბრალოდ დარწმუნდით რომ თითოეულ ქეისი ასრულებს ამ მეთოდებს

// //answer:

// let a = 10;
// let b = 5;

// let operation = "/";

// switch (operation) {
//   case "+":
//     console.log(a + b);
//     break;

//   case "-":
//     console.log(a - b);
//     break;

//   case "/":
//     console.log(a / b);
//     break;

//   case "*":
//     console.log(a * b);
//     break;

//   default:
//     console.log("Error");
//     break;
// }

// 28)



// დაწერეთ იგივე კალკულატორი if else დახმარებით!!

// //answer:

// if (operation === "+") {
//   console.log(a + b);
// } else if (operation === "-") {
//   console.log(a - b);
// } else if (operation === "/") {
//   console.log(a / b);
// } else if (operation === "*") {
//   console.log(a * b);
// } else {
//   console.log("Error");
// }

// 29


// დაწერეთ ავტორიზაციის ლოგიკა სადაც უნდა დავარეგისტრიროთ User
// // user უნდა შემოყავდეს firstName,lastName,email,password,phoneNumber
// // firstName,lastName,email,password არის სავალდებულო ველები
// // ამიტომ ერთიანად შეამოწმეთ ეს ოთხი ველი და დარწმუნდით თუ ცარიელი input
// // არარის მაშინ დალოგეთ რომ შენ დარეგისტრირდი წარმატებით თუ ცარიელია მაშინ
// // დალოგეთ "input is required" გამოიყენეთ if else

// //answer:

// let user_data = [
//   {
//     firstName: "d",
//     lastName: "d",
//     email: "s",
//     password: "s",
//     phoneNumber: "a",
//   },
// ];

// if (
//   user_data[0].firstName !== "" &&
//   user_data[0].lastName !== "" &&
//   user_data[0].email !== "" &&
//   user_data[0].password !== ""
// ) {
//   console.log("you register succesfull");
// } else {
//   console.log("ვერ დარეგისტრირდი");
// }




//30 


// დავწეროთ ფუნქცია რომელსაც გადეცემა რაიმე პარამეტრი და არგუმენტად
// //მიიღებს ისეთ რიცხვებს რომლის დახმარებითაც უნდა გამოვითვალო
// //მაგალითად რამდენი წელი გვაკლდება თითოეულს პენსიამდე და ეს
// //ყველაფერი უნდა დავწეროთ ამ ფუნქციაში.

// const pension = (pensionAge,currentAge)=>{
//     let left = pensionAge - currentAge;
    
    
//     return left
//     }
    
//     console.log(pension(65,21))
      






// 31


// შექმენით კალკულატორის ფუნქცია სახელად კალკულატორი,
// // რომელიც ასრულებს ძირითად არითმეტიკულ ოპერაციებს.
// // ამ ფუნქციამ უნდა მიიღოს სამი პარამეტრი: ორი რიცხვი და სტრიქონი,მაგალითად num1,num2, "+".
// // რომელიც წარმოადგენს არითმეტიკულ ოპერატორს ('+', '-', '*', '/').
// // მოწოდებული ოპერატორის მიხედვით, ფუნქციამ უნდა შეასრულოს შესაბამისი ოპერაცია ორ ნომერზე და დააბრუნოს შედეგი.





// const calculator = (num1 , num2 , operation) => { 
// if (operation === "+"){
//     let incrementResult = num1 + num2;
//     return incrementResult;
// }else if (operation === "-"){
//     let incrementResult = num1 - num2;
//     return incrementResult;
// }else if (operation === "/"){
//     let incrementResult = num1 - num2;
//     return incrementResult;
// }else if (operation === "*"){
//     let incrementResult = num1 * num2;
//     return incrementResult;
// }else {
//     console.log("Error")
// }
// }
// console.log(calculator(10,20,"+"))





// /32


// შეიმუშავეთ ფუნქცია სახელწოდებით checkPasswordStrength, რომელიც აფასებს მოცემული პაროლის სიძლიერეს.
// // პაროლის სიძლიერე განისაზღვრება რამდენიმე კრიტერიუმის საფუძველზე: ის უნდა იყოს მინიმუმ 8 სიმბოლო და მაქსიმუმ 16 სიმბოლო;
// // ფუნქციამ უნდა დააბრუნოს სტრიქონი სადაც გვეწერება რომ თუ ნაკლებია 8 მაშინ შესაბამისი ერორით თუ მეტია 16 მაშინ შესაბამისი ერრორით და თუ ცარიელია input უნდა შევამოწმოთ ეგეც
// //გამოიყენეთ if-else განცხადებები თითოეული კრიტერიუმის შესამოწმებლად და სიძლიერის შესაფასებლად.


// const checkPasswordStrength= (password)=>{
//     if (password.length < 8)
//     {console.log("should be at least 8 characters")}
// else if(password.length > 16)
// {console.log("should be up to 16 characters")}
// else if(password === '')
// {console.log("This field is required")}
// else{
//     console.log("hello")
// }

// }
// checkPasswordStrength("35796") 


// 33


// დაწერეთ ფუქნცია სადაც პარამეტრად გავატანთ flowers და არგუმენტად გავატანთ ყვავილების სახეობებს.
// //და გვჭირდება რომ switch case დავწეროთ ლოგიკა რომ თუ შესაბამისი სახელის ყვავილები გვაქვს მაშინ დავაბრუნოთ console-ში 
// //ეს ყვავილი ნაპოვნია!!




// const garden = (flowers)=>{
//     switch (flowers) {
//         case "rose":
//             console.log("roses are found")
//             break;
//         case "tulips":
//          console.log("tulips are found")
//          break;
//          case "wisteria":
//          console.log("wisterias are found")
//          break;
    
//         default:
//             console.log("flowers can't be found")
//             break;
//     }

// }
// garden("ragac")




// 34


// გვჭირდება სამი prompt.გვჭირდება რომ ამ სამ ინფუტში შემოყვანილი რიცხვებიდან რომელი არის უდიდესი ის დავიჭიროთ და დავლოგოთ უბრალოდ.
// // მაგალითად.2,5,7 და აქედან უდიდესი არის 7.
// //დაწერეთ ფუნქციაში ეს ყველაფერი და შემდეგ ამ ფუნქციაში შეამოწმეთ if else დახმარებით!!


// const biggestNumber=(x,y,z)=>{

//     if (x>y && x>z)
//     {console.log(`the biggest number is ${x}`)}
// else if(y>x && y>z)
// {console.log(`the biggest number is ${y}`)}
// else if(z>x && z>y)
// {console.log(`the biggest number is ${z}`)}
// else if(z===x && z===y)
// {console.log(`equal`)}
// else{
//     console.log("NaN")
// }
// return biggestNumber

// }

// biggestNumber(7,9,0)


//35


// დაწერეთ ფუნქცია processNumbers, რომელიც პარამეტრად იღებს ორ რიცხვს და callBack ფუნქციას.
// // და ამ ფუნქციის გამოძახებით უნდა შესრულდეს არითმეტიკული
// //ოპერაციები ციფრებზეც მაგალითად მიმატება ან გამოკლება რომელიც უნდა გვეწეროს callBack ფუნქციაში.

// function processNumbers(num1, num2, callBack) {
//   return callBack(num1, num2);
// }
// function sum(a, b) {
//   return a * b;
// }
// console.log(processNumbers(10, 20, sum));

// 36



// შექმენით ფუნქცია isValidUser, რომელიც იღებს მომხმარებლის სახელს და პაროლს პარამეტრად
// //და აბრუნებს true, თუ ორივე ცარიელი სტრიქონებია; წინააღმდეგ შემთხვევაში,
// //დააბრუნეთ ყალბი. გამოიყენეთ ლოგიკური ოპერატორები.დაგჭირდებათ გაიგოთ მონაცემთა ტიპი
// //და ისე შეამოწმოთ თუ სტრინგი აქვს ტიპად!!

// function isValidUser(name, password) {
//   if (name === "" && password === "") {
//     return "true";
//   } else {
//     return "fake";
//   }
// }

// console.log(typeof isValidUser("", ""));



// 37


// შექმენით რეკურსიული ფუნქცია, რომელიც დააბრუნებს n რიცხვს ფიბონაჩის მიმდევრობაში.

// function fibonacci(n) {
//   if (n === 1) {
//     return 1;
//   }
//   return fibonacci(n - 1) + n;
// }

// console.log(fibonacci(9));



//38


// შექმენით უკუმთვლელი ტაიმერი, რომელიც ითვლის 10-დან 0 წამამდე, შემდეგ დაბეჭდავს "დრო ამოიწურა!".
// //გამოიყენეთ setInterval მეთოდი და დროის დასრულების შემდეგ უნდა დავამთავროთ ტაიმერი!!

// let counter = 10;

// function timer() {
//   let interval = setInterval(() => {
//     console.log(counter);
//     counter--;
//     if (counter === 0) {
//       clearInterval(interval);
//       console.log("დრო ამოიწურა!");
//     }
//   }, 1000);
// }

// timer();

// 39

// შექმენით ფუნქცია, რომელიც ითვლის და აბრუნებს ასაკს მოცემული დაბადების თარიღის მიხედვით თარიღის ობიექტების გამოყენებით.

// let displayAge = (age) => {
//   console.log(age);
// };

// function currentAge(birthyear, birthmonth, birthdate, callBack) {
//   let currentYear = new Date().getFullYear();
//   let currentMonth = new Date().getMonth();
//   let currentDate = new Date().getDate();
//   if (
//     currentMonth > birthmonth ||
//     (currentMonth === birthmonth && currentDate < birthdate)
//   ) {
//     callBack(currentYear - birthyear);
//   } else if (currentMonth === birthmonth && currentDate >= birthdate) {
//     callBack(currentYear - birthyear - 1);
//   } else {
//     callBack(currentYear - birthyear - 1);
//   }
// }

// currentAge(2002, 7, 15, displayAge);

//40


// დაწერეთ ფუნქცია, რომელიც ბეჭდავს კვირის მიმდინარე დღის
// // სახელს თარიღის გამოყენებით.დაგჭირდებათ array-ში შეინახოთ
// //კვირის დღეები და ისე შეამოწმოთ new Date() დახმარებით!!

// const Currentday = new Date().getDay();
// console.log(Currentday);
// switch (Currentday) {
//   case 0:
//     console.log("sunday");
//     break;
//   case 1:
//     console.log("monday");
//     break;
//   case 2:
//     console.log("tuesday");
//     break;
//   case 3:
//     console.log("Wednesday");
//     break;
//   case 4:
//     console.log("Thursday");
//     break;
//   case 5:
//     console.log("Friday");
//     break;
//   case 6:
//     console.log("Saturday");
//     break;

//   default:
//     console.log("enter valid day");
//     break;
// // }



// // 41

// const userArray = [1, 2, 3, 4, 5, 6, 7, 8, [9, 10, [11, 12]], 13, 14];
// //result --> [1,2,3,4,5,6,7,8,9,10,11,12];

// function recursiveFoo(elements_data) {
//   let result = [];
//   for (const elements of elements_data) {
//     if (Array.isArray(elements)) {
//       // result = result.concat(elements);
//       console.log(elements);
//     } else {
//       result.push(elements);
//     }
//   }
//   return result;
// }
// console.log(recursiveFoo(userArray));



// 42


// function polindrom(word){
//   let reverseWord ="";
//   for (let index = word.length - 1; index >=0; index --){
//       reverseWord += word[index]; 
//   }
//   if(word === reverseWord){
//       console.log("true")
//   }else{
//       console.log("false")
//   }
// }

// polindrom("ara")


// 43


// const fruits = ["apple","cherry","banana","pineapple"]

// for(const fruit of fruits){
//     if (fruit==="banana"){
//         console.log("wow")
//     }else{
//         console.log("404")
//     }
// }


// 44

// function checkForBanana(arr){
//     for(let i=0;i<arr.length;i++){
//         if(arr[i]==="banana"){
//             return "wow"
//         }

//     }
//     return "mleh"
// }

// let fruits1 = ["apple","orange","banana","grape"]
// let fruits2 = ["apple","orange","grape"]


// console.log(checkForBanana(fruits1))
// console.log(checkForBanana(fruits2))


// 45 

// შეუცვალეთ დივს ბექრაუნდი წითლიდან მწვანეზე , მწვანიდან წითელზე

// const div = document.getElementsByTagName ("div") [0]
// const button = document.getElementsByTagName("button")[0]
// button.addEventListener("click", () =>{
//     div.classList.toggle("green");
//  });


// 46

// შექმენით მასივი ფერებით დივის კლიკზე უნდა უცვალოს ამ დივს ფერები,
// ფერები უნდა აიღოს მასივიდიან

// let colors = ["red", "green", "blue", "yellow"];



// 47



// უნდა შექმნათ ფუნქცია რომელიც პარამეტრად მიიღებს მასივს და შეამოწმებს,
// თუ მასივში არის უარყოფითი ციფრი დალოგეთ "მაფია" თუ არარის დალოგეთ
// "არარის"

// let array1 = [1, 2, 3, 4];

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 48

// გაფილტრეთ პროდუქტები კატეგორიის მიხედვით , Filter მეთოდით

// const products = [
//   { id: 1, name: "Laptop", category: "Electronics", price: 1000, stock: 10 },
//   { id: 2, name: "Headphones", category: "Electronics", price: 200, stock: 15 },
//   { id: 3, name: "Coffee Maker", category: "Appliances", price: 100, stock: 5 },
//   { id: 4, name: "Blender", category: "Appliances", price: 150, stock: 8 },
//   { id: 5, name: "Smartphone", category: "Electronics", price: 500, stock: 20 },
//   { id: 6, name: "Book", category: "Literature", price: 20, stock: 100 },
// ];


// 49


// იპოვეთ ყველაზე იაფრი პროდუქტი , Reduce მეთოდით

// const products = [
//   { id: 1, name: "Laptop", category: "Electronics", price: 1000, stock: 10 },
//   { id: 2, name: "Headphones", category: "Electronics", price: 200, stock: 15 },
//   { id: 3, name: "Coffee Maker", category: "Appliances", price: 100, stock: 5 },
//   { id: 4, name: "Blender", category: "Appliances", price: 150, stock: 8 },
//   { id: 5, name: "Smartphone", category: "Electronics", price: 500, stock: 20 },
//   { id: 6, name: "Book", category: "Literature", price: 20, stock: 100 },
// ];



// 50

// დაასორტირეთ პროდუქტები ფასის მიხედვით

// const products = [
//   { id: 1, name: "Laptop", category: "Electronics", price: 1000, stock: 10 },
//   { id: 2, name: "Headphones", category: "Electronics", price: 200, stock: 15 },
//   { id: 3, name: "Coffee Maker", category: "Appliances", price: 100, stock: 5 },
//   { id: 4, name: "Blender", category: "Appliances", price: 150, stock: 8 },
//   { id: 5, name: "Smartphone", category: "Electronics", price: 500, stock: 20 },
//   { id: 6, name: "Book", category: "Literature", price: 20, stock: 100 },
// ];



// 51

// წამოიღეთ დეითა ეიპიაიდან კონკრეტულად (Id, Title, Price)

// https://fakestoreapi.com/products

