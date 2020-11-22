import random

input1 = input("Write the length of password: ")
length = int(input1)
input2 = input("Do you want symbols? [y/n]")
password = ''
n1 = ''

while len(password) < length:
    cas = random.randint(0, 3)
    if cas == 0:
        n1 = random.randint(48, 57)
    elif cas == 1:
        n1 = random.randint(65, 90)
    elif cas == 2:
        n1 = random.randint(97, 122)
    elif cas == 3 and input2 == "y":
        n1 = random.randint(33, 38)

    val = chr(n1)
    password += val

print(password)
