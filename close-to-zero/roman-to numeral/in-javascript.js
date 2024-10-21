function romanToInt(s) {
    const romanValues = {
        'I': 1, 'V': 5, 'X': 10, 'L': 50,
        'C': 100, 'D': 500, 'M': 1000
    };
    let total = 0;
    let prevValue = 0;

    // Traverse the string from left to right
    for (let char of s) {
        let value = romanValues[char];
        
        // If the previous value is smaller, subtract it twice (once from total, once from itself)
        if (value > prevValue) {
            total += value - 2 * prevValue;
        } else {
            total += value;
        }

        prevValue = value;
    }

    return total;
}


console.log(romanToInt("MCMXCIV"));  
