// class practice and extends keyword//
// class Animal{
//     constructor(name,age){
//         this.name=name;
//         this.age=age;
//     }
//     eat(){
//         return`${this.name} is eating`;
//     }
//     isSuperCute(){
//         return this.age<=1;
//     }
//     isCute(){
//         return true;
//     }
// }
// const animal1= new Animal("tom", 2);
// console.log(animal1);
// console.log(animal1.eat());
// console.log(animal1.isSuperCute());
// console.log(animal1.isCute());

// dog class
// extends inherit properties of  other class(parent class or base class)
// dog is sub class or derived class
// class Dog extends Animal{
    
// }
// const tommy = new Dog("Tommy",1);
// console.log(tommy);
// object or instance are same//
// super class //
// class Animal{
//     constructor(name,age){
//         this.name=name;
//         this.age=age;
//     }
//     eat(){
//         return`${this.name} is eating`;
//     }
//     isSuperCute(){
//         return this.age<=1;
//     }
//     isCute(){
//         return true;
//     }
// }
// class Dog extends Animal{
//     constructor(name, age, speed){
//         super(name, age);                                    // super means base class or parent
//         this.speed= speed;
//     }
//     run(){
//         return `${this.name} is running at ${this.speed}kmph`
//     }
// }
// const tommy = new Dog("Tommy",1, 30);
// console.log(tommy.run());


// same method in base class//
// class Animal{
//     constructor(name,age){
//         this.name=name;
//         this.age=age;
//     }
//     eat(){
//         return`${this.name} is eating`;
//     }
//     isSuperCute(){
//         return this.age<=1;
//     }
//     isCute(){
//         return true;
//     }
// }
// class Dog extends Animal{
//     constructor(name, age, speed){
//         super(name, age);                                    // super means base class or parent
//         this.speed= speed;
//     }
//     eat(){
//         return`Modified eat:${this.name} is eating`;                // object first find in sub class either same method is called
//     }
//     run(){
//         return `${this.name} is running at ${this.speed}kmph`
//     }
// }
// const tommy = new Dog("Tommy",1, 30);
// console.log(tommy.run());
// console.log(tommy.eat());
