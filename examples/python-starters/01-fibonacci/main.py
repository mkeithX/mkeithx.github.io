import os

class Fibonacci:
    def __init__(self) -> None:
        self.sequence = [0, 1]

    def get(self, index: int):
        """
        Get Fibonacci sequence up to the specified index.

        >>> Fibonacci().get(10)
        [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
        >>> Fibonacci().get(5)
        [0, 1, 1, 2, 3]
        """
        difference = index - len(self.sequence) + 2
        if difference > 0:
            self.sequence.extend(self.sequence[-1] + self.sequence[-2] for _ in range(difference))
        return self.sequence[:index]

def clear_console():
    os.system('cls' if os.name == 'nt' else 'clear')

def main():
    clear_console()
    app_name = "Fibonacci Sequence Generator"
    msg = "(To exit, enter 'exit' or press Ctrl-C)"
    print(f'{"-" * 48}\n{" " * 10}{app_name}\n{" " * 5}{msg}{" " * 12}\n{"-" * 48}')

    fibonacci = Fibonacci()

    while True:
        print()
        prompt = input(">> ").lower()

        if prompt in {"exit", "quit"}:
            break

        try:
            index = int(prompt)
        except ValueError:
            print("Enter a number or 'exit'")
            continue

        print(*fibonacci.get(index), sep=', ')

if __name__ == "__main__":
    main()