// Assuming monthlyIncomes is an object with various income sources including bonus
interface IncomeSources {
  [key: string]: number;
}

const monthlyIncomes: IncomeSources = {
  // ... other income sources
  bonus: 0, // Initialize with a default value
  // ... other income sources
};

// Function to log the bonus income
function logBonus(income: IncomeSources): void {
  const bonusIncome = income['bonus'];
  console.log(bonusIncome);
}

// Call the function to log the bonus
logBonus(monthlyIncomes);
