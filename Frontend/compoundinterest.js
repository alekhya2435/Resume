function compoundInterest(p,n,r,t){
    return (p*(1+r/n)^(n*t));
}
console.log("Compound Interest:",compoundInterest(20000,4,2,5))