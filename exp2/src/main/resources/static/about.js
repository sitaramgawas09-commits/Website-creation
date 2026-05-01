// let person1 ={
//     name : "Sitaram",
//     Age : 35 ,
//     isEmployeed : false,
//    hello : function(){console.log(`Hello my name is ${this.name}`)}  
// }

// Object.entries(person1).forEach((element,index) => {
//           console.log(element)
// });






// console.log(person1)

// function Car(make,model,year,color){
//      this.make = make,
//      this.model = model,
//      this.year = year,
//      this.color = color
// }
// let arr = JSON.parse(localStorage.getItem("Details"))||[]
// let n1 = prompt("Enter the value to iterate : ")

// for(let i = 0 ;i < n1 ;i++){

//     let make = prompt("Enter the value Make")
//     let model= prompt("Enter the value model")
//     let year= prompt("Enter the value year")
//     let color= prompt("Enter the value color")
//     let car = new Car(make , model ,year , color)
//     arr.push(car)
//     localStorage.setItem("Details",JSON.stringify(arr))
    
// }
// console.log(arr)



// class Animals{
   
//     constructor(name,age){
//         this.name = name;
//         this.age = age
//               console.log(`${this.name} Age is ${this.age}`)
//     }

// }

// class bird extends Animals{

//     constructor(name,age){
//         super(name,age)
//     }
// }

// let bird1 = new bird("Crow",22)
// console.log(bird1)