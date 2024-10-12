def closest_to_zero(numbers):
    if not numbers:
        return None

    closest = numbers[0]
    for num in numbers:
        if abs(num) < abs(closest):
            closest = num
        elif abs(num) == abs(closest):
            closest = max(num, closest)  
    return closest

# Example usage:
numbers = [3, -2, -1, 5, 2 , 1]
print(closest_to_zero(numbers))  