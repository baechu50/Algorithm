import sys

s = set()
all_set = set(range(1, 21))

input = sys.stdin.readline
n = int(input().strip())

for _ in range(n):
    command = input().strip().split()
    mode = command[0]

    if mode == "add":
        s.add(int(command[1]))
    elif mode == "remove":
        s.discard(int(command[1]))  # remove 대신 discard 사용 (없는 경우 에러 방지)
    elif mode == "check":
        print(1 if int(command[1]) in s else 0)
    elif mode == "toggle":
        num = int(command[1])
        if num in s:
            s.remove(num)
        else:
            s.add(num)
    elif mode == "all":
        s = all_set.copy()
    elif mode == "empty":
        s.clear()