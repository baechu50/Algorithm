import sys
input = int(sys.stdin.readline())

counting = [0]*10000

for i in range(input):
	a = int(sys.stdin.readline())
	counting[a-1] += 1

for k in range(10000):
	if counting[k] != 0:
		for j in range(counting[k]):
			print(k+1)