---
title: "02.2 - Assigning Values"
weight: 80
book_number: 9
prev: "/programming-logic/ch02/02.1/"
next: "/programming-logic/ch02/02.3/"
---

# How Assigning Values to Variables Works in Programming

When you write something like:

age = 16

...it looks simple. But behind the scenes, the computer goes through a
**process**. Here's how:

## Read the Assignment Statement

- The computer sees an **assignment operator**

  - = in most languages

  - In programming, = does **not** mean "equals" like in math.

  - Instead, it means: **"Take whatever is on the right and store it in
    the variable on the left."\**

## Evaluate the Right Side (RHS)

- The computer looks at the **right-hand side** of the = first.

Example:\
\
total = 5 + 3

- The computer calculates 5 + 3 → result is 8.

## Store the Result in the Left Side (LHS)

- After the right side is evaluated, the computer finds the variable
  name on the left side (total)

- It finds a location in memory and puts the value inside

  - Likely will be the same location

  - Sometimes is possibly a new location

- The variable's name is labeled with the memory location so whenever
  you use total, the program will look inside that memory location and
  see 8.

## Replace Variable with Value During Use

Later, when you write:\
\
print(total)

- the computer goes to the memory location identified by total, finds
  the value 8, and uses it.

## Reassignment (Overwriting the Value)

- A variable can be **reassigned** --- the old value is replaced with a
  new one.

Example:\
\
total = 8

total = 10

- First, total stores 8

- Then, 10 **overwrites** the 8 in the same memory box

- Now total holds only 10

Think of it like erasing the number in the box and writing a new one.

## Summary of the Assignment Process

1.  **Find the = operator\**

2.  **Evaluate the right-hand side** (calculate or fetch the value)

3.  **Store the result** in the variable name on the left-hand side

4.  **Use the value later** by calling the variable

5.  **Reassignment** replaces the old value with the new one
