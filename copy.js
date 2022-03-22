//MASOLAS JS-EN BELUL: SPREAD

const arr1 = [2,3,4]

const arr2 = [6,7,8]

const arr3 = [...arr1];
arr3.push(6)
console.log("arr1:", arr1);
console.log("arr3:", arr3);

const arr4 = [...arr1,...arr2];
console.log("arr4:", arr4);

const userProfile = {
    name: "Cintia",
    age: 10,
    country:"Hungary"
};

const userProfile2 = {...userProfile, gender: "female", name: "Thomas"} //MASOLAS PLUSZ UJ KULCSERTEK PAR HOZZAADASA, ha ugyazanazt a kulcserteket hasznaljuk akkor megvaltoztatja az eredeti kulcs erteket!!!
console.log("userProfile2: ", userProfile2)

