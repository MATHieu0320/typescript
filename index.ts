// //////////VARIABLES
// let num = 24
// let num2:number;
// let numorstring: number|stringgit psu
// num = false
// num2 = "dd"



let array = ["chien","chat","lyon"]
let tableau: boolean[] = []
let tableau2: (string | number)[] = []
console.log(array);

tableau.push(false)


// tableau2.push(arr)


// les objets
interface objet{
pseudo: string,
age: number,
message: string,
password?: boolean
}
let client:objet = {
    pseudo: "marc",
    age: 24,
    message: ""
}
class  Singer {
 id: number;
 name: string;
 alive?: boolean
 constructor(id: number, name:string,alive?: boolean){
    this.id = id
    this.name = name
 }
 
}

const prince = new Singer(46,"prince")



console.log(prince);

function saymyname(name: string) {
    console.log(`bonjour +  ${name}`);
    
}



const age = (age: string | number, size?:number):void => {
        if (size) {
        console.log(`la taille est de ${size} cm et il est agé de ${age}  ans `  );
        
    }    else {
        console.log(` il est agé de ${age}  ans `  );
        
    }
}
age("14",45)
// enum & tupple 

enum Role {admin,heros,prime}
interface User {
    names: string;
    attribute: [number| boolean, string]
    role: Role
}
const user1:User= {
    names: "julien",
    attribute: [14,"ss"],
    role: Role.admin
}
if (user1.role == Role.admin) {
    console.log("Permission Admin");
    
}
console.log(user1.role);





















