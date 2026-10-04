---
title: "02.6 - Pseudocode"
weight: 120
book_number: 13
prev: "/programming-logic/ch02/02.5/"
---

Pseudocode

Pseudocode is an informal, simplified version of programming code used
to outline the logic of a program without focusing on the specific
syntax of any programming language. The term \"pseudo\" means \"false\"
or \"fake,\" so pseudocode is essentially \"fake code.\" It is not
designed to be compiled or executed, but rather to serve as a tool for
planning and designing algorithms or program structure.

Think of pseudocode as practice coding in plain English (or simple
steps) before you write the real program in a programming language.

- It looks like code, but it's not meant to run on a computer

- It's written for humans to understand the logic

- It helps you plan out your program before worrying about the real
  programming language

- Language agnostic

Because pseudocode doesn\'t follow strict syntax rules, programmers can
concentrate entirely on the logic and flow of the program without
worrying about technical details like punctuation or syntax errors. Once
the logic is clearly defined in pseudocode, it can be translated into
actual code in a specific programming language.

Starting with pseudocode ensures that the design and structure of the
program are correct before the complexities of real code are introduced.
It provides a clear, logical framework to work from, encourages
problem-solving, facilitates team communication, and ultimately helps
avoid mistakes that could lead to wasted time and effort.

## Common Rules for Writing Pseudocode

Pseudocode has no official grammar, but here are simple conventions
beginners should follow:

- Write in plain, clear steps

  - Example: Get the user's name

  - Example: Multiply number by 2

- Capitalize keywords (helps steps stand out)

  - Examples: INPUT, OUTPUT, IF, ELSE, WHILE, END

- Indent to show structure (like inside loops or conditions)

- One action per line

  - Keep steps short and focused

## Quick Reference Tips

- BEGIN / END → mark the start and finish

- INPUT → something comes from the user/device

- OUTPUT → something goes out to the user/device

- SET → calculate or assign a value

- IF / ELSE → make a choice

- WHILE / FOR → repeat steps

## Example Pseudocode

BEGIN WeeklyPayCalculator

// Declare variables

SET hours = INIT_VALUE

SET payRate = INIT_VALUE

SET grossPay = INIT_VALUE

// Get input from user

DISPLAY \"Enter hours worked this week: \"

INPUT hours

DISPLAY \"Enter hourly pay rate: \$\"

INPUT payRate

// Calculate gross pay

grossPay = hours \* payRate

// Display result

DISPLAY \"Weekly gross pay: \$\" + grossPay

END WeeklyPayCalculator
