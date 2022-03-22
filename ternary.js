//if else helyett hasznalhato dolog

const [min, max] = [5, 30]

/* if (min < max){
    console.log("Min lower than Max")
} else {
    console.log("Min is NOT lower than max")
} */

//UGYANEZ TERNARY OPERATORRAL

/* min < max ? console.log("Min lower than Max") : console.log("Min is NOt lower than max") */

// feltetel + ? utana utasitas : az else

//VAGY

console.log(`Min ${max < min ? "NOT" : ""} lower than Max`)

const getLongestEnglishComedy = (movies) => 
(movies.filter((movie) => movie.genre === "comedy" && movie.originalLanguage === "english").length === 0)? null 
: movies.filter((movie) => movie.genre === "comedy" && movie.originalLanguage === "english")
.reduce((prev, curr) => (prev.length < curr.length) ? curr : prev).title