function fn(){
    console.log("HEy");
}
fn();

function abc(a,b){
    return a+b
}

let res1 = abc(4,4);

console.log(res1);

let res2 = abc(4,8);

console.log(res2);

// Obj 

let obj = {
    Name:"Ratul",
    Phone: "018228",

    adress: function(){

        console.log("This is Example with Adress "+this.Name);
    },



}

console.log(obj.Name);

console.log(obj);

let ad = obj.adress();

console.log(ad);

obj.adress();


// String 

let text = "eeerererere";


console.log(text.length);