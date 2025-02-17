// Task 1 - Employee Salary Calculation
function calculateSalary(baseSalary, bonus, taxRate) {
    let netSalary = (baseSalary + bonus) - (baseSalary * taxRate);
    console.log(`Net Salary: $${netSalary.toFixed(2)}`);
  }
  calculateSalary(5000, 500, 0.1); // Expected output: "Net Salary: $5000.00"
  calculateSalary(7000, 1000, 0.15); // Expected output: "Net Salary: $6950.00"

  // Task 2 - Product Price After Discount
const calculateDiscount = function (price, discountRate) {
    let finalPrice = price - (price * discountRate);
    console.log(`Final Price: $${finalPrice.toFixed(2)}`);
  };
  calculateDiscount(100, 0.2); // Expected output: "Final Price: $80.00"
  calculateDiscount(250, 0.15); // Expected output: "Final Price: $212.50"