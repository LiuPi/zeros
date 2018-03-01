function factorTwo(n) {
    let f2 = 0;
    for (let d = 2; d <= n; d *= 2)
        f2 += Math.floor(n/d);
    return f2;
}
function factorFive(n) {
    let f5 = 0;
    for (let d = 5; d <= n; d *= 5)
        f5 += Math.floor(n/d);
    return f5;
}

module.exports = function getZerosCount(number) {
    let factorsTwo = 0;
    let factorsFive = 0;
    let n = number;
    factorsTwo += factorTwo(n);
    factorsFive += factorFive(n);
    return Math.min(factorsTwo,factorsFive);

};
