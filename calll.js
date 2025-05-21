function calculateSavings() {
  const bill = parseFloat(document.getElementById('bill').value);
  const rate = parseFloat(document.getElementById('rate').value);
  const cost = parseFloat(document.getElementById('cost').value);

  if (isNaN(bill) || isNaN(rate) || isNaN(cost)) {
    document.getElementById('resultText').innerHTML = "Please fill in all fields correctly.";
    return;
  }

  // Calculate average monthly consumption (in kWh)
  const monthlyUsage = bill / rate;
  const annualUsage = monthlyUsage * 12;

  // Recommended solar system size (assuming 1 kW = ~1200 kWh/year in India)
  const recommendedSize = (annualUsage / 1200).toFixed(2);

  // Estimated cost of solar system
  const systemCost = recommendedSize * cost;

  // Estimated yearly savings
  const annualSavings = (recommendedSize * 1200 * rate).toFixed(2);

  // Display result
  document.getElementById('resultText').innerHTML = `
    Recommended Solar System Size: <strong>${recommendedSize} kW</strong><br/>
    Estimated Installation Cost: <strong>₹${systemCost.toLocaleString()}</strong><br/>
    Estimated Annual Savings: <strong>₹${annualSavings}</strong>
  `;

  // Show the result tab
  document.getElementById('result').classList.add('show');
}
