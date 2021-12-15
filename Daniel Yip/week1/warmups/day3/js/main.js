console.log(`JS :)`);

// ## Warmup - Raindrops

// Write a Javascript program that will take a number (eg 28 or 1755 or 9, etc) and output the following:

// - If the number contains 3 as a factor, output 'Pling'.
// - If the number contains 5 as a factor, output 'Plang'.
// - If the number contains 7 as a factor, output 'Plong'.
// - If the number does not contain 3, 5 or 7 as a factor, output the number as a string.

// ### Examples

// - 28 has 7 as a factor.
//   - In raindrop-speak, this would be a simple "Plong".
// - 1755 has 3 and 5 as factors.
//   - In raindrop-speak, this would be a "PlingPlang".
// - 34 has neither 3, 5 nor 7 as a factor.
//   - Raindrop-speak doesn't know what to make of that, so it just goes with the straightforward "34".


const raindrops = function(number){
    const pling = 'Pling';
    const plang = 'Plang';
    const plong = 'Plong';

    if(number % 3 === 0 && number % 5 === 0 && number % 7 === 0){
        console.log(`${pling}${plang}${plong}`)

    } else if (number % 3 === 0 && number % 5 === 0){
        console.log(`${pling}${plang}`)

    } else if (number % 5 === 0 && number % 7 === 0) {
        console.log(`${plang}${plong}`)

    } else if (number % 3 === 0 && number % 7 === 0) {
        console.log(`${pling}${plong}`)

    } else if (number % 3 === 0) {
        console.log(`${pling}`)

    } else if (number % 5 === 0){
        console.log(`${plang}`)

    } else if (number % 7 === 0){
        console.log(`${plong}`)

    } else {
        console.log(number)
    }
}

raindrops(3);
raindrops(5);
raindrops(7);
raindrops(28);
raindrops(1755);
raindrops(34);