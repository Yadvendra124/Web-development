// const student = {
//     fullName : "Yadvendra",
//     marks : 96.4,
//     printMarks : function (){
//         console.log("Marks : ",this.marks)
//     },
// }
// const employee = {
//     calcTax() {
//         console.log("Tax rate is 10%");
//     },
// };
// const karan = {
//     salary : 40000,
//     calcTax() {
//         console.log("Tax rate is 20%");
//     },
// };
// karan.__proto__=employee;
// class car{
//     constructor(){
//         console.log("Creating new car");
//     }
//     car(){
//         console.log("Car is manfucturing");
//     }
//     start(){
//         console.log("start......");
//     }
//     stop(){
//         console.log(".....stop");
//     }
// }
// let toyota = new car();
let Data = "Instaling the data";
class user{
    constructor(name, email){
        this.name=name;
        this.email=email;
    }
    viewData(){
        console.log("Name: "+this.name);
        console.log("Email : "+this.email);
    }
}
let student1 = new user( "Yadvendra","abc");
let student2 = new user("keshav","cde");