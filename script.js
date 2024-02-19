function extraLongFactorials(n) {
    var fact = 1
    // Write your code here
    if (n == 0 || n == 1) {
        console.log(fact)
        return
    } else {
        for (let i = 1; i < n+1; i++) {
            fact = BigInt(fact) * BigInt(i)
        }
        
        console.log(fact.toString())
    }
}
