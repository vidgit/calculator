from add import Add
import sys

a = sys.argv[1]
b = sys.argv[2]
print("Calling ADD")
print (Add(a,b))
for i in range(1,1000):
    print(i)
sys.stdout.flush()