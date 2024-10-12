function closest(number) {
    if (number.length === 0) return null; 

    return number.reduce((closest, num) => {
        if (Math.abs(num) < Math.abs(closest)) {
            return num;
        } else if (Math.abs(num) === Math.abs(closest)) {
            return Math.max(num, closest);
        }
        return closest;
    });
}

console.log(closest([1, -2, 2, 3, -3])); 
