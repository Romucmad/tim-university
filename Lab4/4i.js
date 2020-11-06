const moneyToCoins = (money, coins) => {
    return coins.sort((a, b) => a - b).reverse().map(element => {
        const fit = Math.floor(money / element);
        if (fit > 0) {
            money -= fit * element;
            return [...Array(fit).fill(element)];
        }
    }).filter(Boolean).reduce((acu, current) => [...acu, ...current], [])

}

console.log(moneyToCoins(46, [25, 10, 5, 2, 1]));