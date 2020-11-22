import random

input1 = input("Write the length of password: ")
length = int(input1)
password = ''
n1 = ''

while len(password) < length:
    cas = random.randint(0, 2)
    if cas == 0:
        n1 = random.randint(48, 57)
    elif cas == 1:
        n1 = random.randint(65, 90)
    elif cas == 2:
        n1 = random.randint(97, 122)

    val = chr(n1)
    password += val

print(password)
