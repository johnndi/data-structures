def merge_alternately(word1: str, word2: str) -> str:
    merged = []
    i, j = 0, 0

    # Loop through both strings, alternating characters
    while i < len(word1) and j < len(word2):
        merged.append(word1[i])
        merged.append(word2[j])
        i += 1
        j += 1

    # Append any remaining characters
    if i < len(word1):
        merged.append(word1[i:])
    if j < len(word2):
        merged.append(word2[j:])

    return ''.join(merged)

word1 = "abc"
word2 = "defg"
print(merge_alternately(word1, word2))  
