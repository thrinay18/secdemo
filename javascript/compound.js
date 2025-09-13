function calculateCompoundInterest(principal, rate, timesCompounded, years) {
    let r = rate / 100;
    let amount = principal * Math.pow((1 + r / timesCompounded), timesCompounded * years);
    let compoundInterest = amount - principal;
    return {
      totalAmount: amount.toFixed(2),
      interestEarned: compoundInterest.toFixed(2)
    };
  }
  
  const principal = 1000;
  const rate = 5;
  const timesCompounded = 4;
  const years = 3;
  
  const result = calculateCompoundInterest(principal, rate, timesCompounded, years);
  console.log(`Total Amount: $${result.totalAmount}`);
  console.log(`Interest Earned: $${result.interestEarned}`);
  