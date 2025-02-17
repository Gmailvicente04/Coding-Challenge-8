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