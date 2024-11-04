function calculateSavings() {
    // Clear previous error
    document.getElementById('error').innerText = '';
    
    // Get user input values
    const records = parseFloat(document.getElementById('records').value);
    const errorRate = parseFloat(document.getElementById('errorRate').value) / 100;
    const costPerError = parseFloat(document.getElementById('costPerError').value);
    const timeSavings = parseFloat(document.getElementById('timeSavings').value) / 100;
    const aidgCost = parseFloat(document.getElementById('aidgCost').value);
  
    // Validate inputs
    if (isNaN(records) || isNaN(errorRate) || isNaN(costPerError) || isNaN(timeSavings) || isNaN(aidgCost)) {
      document.getElementById('error').innerText = 'Please fill out all fields with valid numbers.';
      return;
    }
  
    // Calculations for losses with Normal Data Handling
    const totalErrors = records * errorRate;
    const totalLoss = totalErrors * costPerError;
  
    // Calculations for savings with AIDG
    const estimatedSavings = totalLoss * timeSavings;
    const netSavings = estimatedSavings - aidgCost;
    const roi = (netSavings / aidgCost) * 100;
  
    // Display results
    document.getElementById('totalErrors').innerText = totalErrors.toFixed(2);
    document.getElementById('totalLoss').innerText = totalLoss.toFixed(2);
    document.getElementById('netSavings').innerText = netSavings.toFixed(2);
    document.getElementById('roiPercentage').innerText = roi.toFixed(2);
    document.getElementById('results').style.display = 'block';
  }
  