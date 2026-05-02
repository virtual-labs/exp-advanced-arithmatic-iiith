Advanced arithmetic is essential in computer science for handling numbers and calculations that go beyond the limitations of standard data types. Many real-world problems require working with very large numbers or implementing efficient algorithms for arithmetic operations. In this experiment, you will learn how to represent, manipulate, and compute with large numbers and apply efficient methods for arithmetic tasks.

---

### Why Study Advanced Arithmetic?

- Many scientific, cryptographic, and financial applications require calculations with numbers larger than those supported by built-in types.
- Efficient arithmetic algorithms are the foundation of high-performance computing and accurate scientific results.
- Understanding these techniques helps you solve a wide range of computational problems and prepares you for advanced topics in algorithms and number theory.

---

### Problems Explored in This Experiment

In this experiment, you will solve two classic problems using advanced arithmetic techniques:

### 1. Addition of Large Numbers

**Problem Statement:**
Add two large positive integers (up to $10^{50}$ digits) that cannot be stored in standard integer types.

**Input Specification:**

- Two positive integers (each $< 10^{50}$) separated by a space.

**Output Specification:**

- Output a single number representing the sum of the two integers.

**Sample Input and Output:**

```
Input: 323289329329392893 3283928392839283928932329
Output: 3283928716128613258325222
Input: 10 99
Output: 109
```

**How to Add Large Numbers:**
When numbers are too big to fit into standard data types, store them as strings and perform digit-by-digit addition, carrying over as needed. Start from the least significant digit, add corresponding digits (and carry), and build the result from right to left. If one number runs out of digits, treat it as zero.

---

### 2. Square Root Calculation Using Binary Search

<img src="./images/experiment-image.png" alt="Square root symbol" width="300" />

**Problem Statement:**
Find the square root of a positive integer $N$ (up to $10^9$) using binary search, accurate to four decimal places.

**Input Specification:**

- A single positive integer $N$ ($N < 10^9$).

**Output Specification:**

- Print the square root of the number up to 4 decimal places. A difference up to 0.001 from the correct value is accepted.

**Sample Input and Output:**

```
Input: 5
Output: 2.2361
Input: 25
Output: 5.0000
```

**How Binary Search Finds Square Roots:**
The square root of $N$ lies between 1 and $N$. The image above represents the mathematical square root operation, which you will compute programmatically in this problem. Use binary search to repeatedly narrow the interval: if $mid^2 > N$, search the left half; if $mid^2 < N$, search the right half. Continue until the interval is small enough for the required precision.

**Time Complexity:**
Binary search reduces the interval by half each step, so the number of steps is $O(\log N)$.

---

_This experiment encourages you to implement algorithms for large number addition and efficient square root calculation, deepening your understanding of advanced arithmetic and its applications in computational problem solving._
