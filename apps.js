// slowMath.add(1, 1)
// .then(data => {
//     console.log(data);
//     return slowMath.add(data, 5)
// }).then(data => {
//     return slowMath.multiply(data, 2)
// }).then(data => {
//     console.log(data);
//     return slowMath.subtract(data, 3)
// }).then(data => {
//     console.log(data);
//     return slowMath.add(data, 98)
// }).then (data => {
//     console.log(data);
//     return slowMath.remainder(data, 2)
// }).then (data => {
//     console.log(data);
//     return slowMath.multiply(data, 50)
// }).then (data => {
//     console.log(data);
//     return slowMath.remainder(data, 40)
// }).then (data => {
//     console.log(data);
//     return slowMath.add(data, 32)
// }).then (data => {
//     console.log(data);
// })
// .catch((e) => {
//     console.log(e);
// });

const doMath = async () => {

    try {
    let result = await slowMath.add(1, 1);
    console.log(result);
    result = await slowMath.multiply(result, 2);
    console.log(result);
    result = await slowMath.subtract(result, 3);
    console.log(result);
    result = await slowMath.add(result, 98);
    console.log(result);
    result = await slowMath.remainder(result, 2);
    console.log(result);
    result = await slowMath.multiply(result, 50);
    console.log(result);
    result = await slowMath.remainder(result, 40);
    console.log(result);
    result = await slowMath.add(result, 32);
    console.log(result);
    } catch(e) {
        console.log(e);
    }
}

doMath();