const userProfile = {
    name: "Cintia",
    age: 10,
    country:"Hungary"
};

/* const name = userProfile.name;
const age = userProfile.age; */

/* const {name,age} = userProfile; //shorthand version a felette 2 sorban levonek

console.log("name:", name)
console.log("age:", age) */

//ha van objektum bizonyonyos kulcsertek parok, akkor ezzel {} ki tudjuk bontani es valtozokent felhasznalni

/* const logNameAndAge = (incomingUser) =>{
    console.log(incomingUser.name);
    console.log(incomingUser.age)
}
logNameAndAge(userProfile);

const logNameAndAge = ({name,age}) =>{
    console.log("name" = name);
    console.log("age" = age)
}
logNameAndAge(userProfile); */

//array eseteben:

const arr1 = [1,2,3,4];

/* const first = arr1[0];
const second = arr1[1]

console.log(first);
console.log(second); */

const [a, b] = arr1;
console.log(a)
console.log(b)

//tehat objektuomnal ugzanazt a kulcs nevet kellett hasznalni, de tomboknel nem mert nincs megnevezve ...macska 1nek es macska 2nek is lehetne hivni 

//FONTOS TOTALBAN: OBJEKTUMOKNAL A KULCSNEVET KELL HASZNALNI, ARRAYNEL CSAK A SORREND A FONTOS AZ STIMMELJEN


//ha pl az 1. elemet akarom 1 valtozoba rakni, es az osszes tobbi elemet egy masik valtozoba
const [x,...y] = arr1
console.log(x)
console.log(y)