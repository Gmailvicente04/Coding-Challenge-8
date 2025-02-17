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

  // Task 3 - Service Fee Calculation
const calculateServiceFee = (amount, serviceType) => {
    let feeRate = serviceType === "Premium" ? 0.15 : serviceType === "Standard" ? 0.1 : 0.05;
    let serviceFee = amount * feeRate;
    console.log(`Service Fee: $${serviceFee.toFixed(2)}`);
  };
  calculateServiceFee(200, "Premium"); // Expected output: "Service Fee: $30.00"
  calculateServiceFee(500, "Standard"); // Expected output: "Service Fee: $50.00"
  

// Task 4 - Car Rental Cost Calculation
function calculateRentalCost(days, carType, insurance = false) {
    let dailyRate = carType === "Economy" ? 40 : carType === "Standard" ? 60 : 100;
    let totalCost = days * dailyRate;
    if (insurance) {
      totalCost += days * 20;
    }
    console.log(`Total Rental Cost: $${totalCost}`);
  }
  calculateRentalCost(3, "Economy", true); // Expected output: "Total Rental Cost: $180"
  calculateRentalCost(5, "Luxury", false); // Expected output: "Total Rental Cost: $500"

  // Task 5 - Loan Payment Calculation
function calculateLoanPayment(principal, rate, time) {
    let totalPayment = principal + (principal * rate * time);
    console.log(`Total Payment: $${totalPayment.toFixed(2)}`);
  }
  calculateLoanPayment(1000, 0.05, 2); // Expected output: "Total Payment: $1100.00"
  calculateLoanPayment(5000, 0.07, 3); // Expected output: "Total Payment: $6050.00"

  // Task 6 - Identifying Large Transactions
let transactions = [200, 1500, 3200, 800, 2500];
function filterLargeTransactions(transactions, filterFunction) {
  let largeTransactions = transactions.filter(filterFunction);
  console.log(largeTransactions);
}
filterLargeTransactions(transactions, amount => amount > 1000); // Expected output: [1500, 3200, 2500]

// Task 7 - Shopping Cart Tracker
function createCartTracker() {
    let total = 0;
    return function (amount) {
      total += amount;
      console.log(`Total Cart Value: $${total}`);
    };
  }
  let cart = createCartTracker();
  cart(20); // Expected output: "Total Cart Value: $20"
  cart(35); // Expected output: "Total Cart Value: $55"