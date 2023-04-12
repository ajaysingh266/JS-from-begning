// // getter and setters//
// class Person {
//     constructor(firstName, lastName, age) {
//         this.firstName = firstName;
//         this.lastName = lastName;
//         this.age = age;
//     }
//     get fullName() {
//         return `${this.firstName}${this.lastName}`
//     }
//     // setName(firstName, lastName){                                   // this set new name of any method or class
//     //     this.firstName = firstName;
//     //     this.lastName = lastName;
//     // }

//     set fullName(fullName) {
//         const [firstName, lastName] = fullName.split(" ");
//         // string ki list banake dega. aur array ko space se todega
//         // [ajay, singh] split from space         
//         this.firstName = firstName;
//         this.lastName = lastName;
//     }
// }
// const person1 = new Person("Aj", "Singh", 15);
// console.log(person1);
// // console.log(person1.fullName());                 // if we call this method as object then we put get before of function name
// // console.log(person1.fullName);
// console.log(person1.firstName);
// console.log(person1.lastName);
// // person1.setName("Ajay", "Chaudhary")
// // console.log(person1.firstName);
// // console.log(person1.lastName);
// person1.fullName = "Ajay Chaudhary";
// console.log(person1);


// static methods and properties //
class Person {
        constructor(firstName, lastName, age) {
            this.firstName = firstName;
            this.lastName = lastName;
            this.age = age;
        }
        static classInfo(){
        return 'this is person class'
        }
    }
   const person1 = new Person("Ajay", "Singh", 10);
   const info = Person.classInfo();
   console.log(info);