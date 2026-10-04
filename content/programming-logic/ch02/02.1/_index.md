---
title: "02.1 - Variables"
weight: 75
book_number: 8
prev: "/programming-logic/ch02/"
next: "/programming-logic/ch02/02.2/"
---

# Variables

When you hear the word variable, you might think of math. In math, a
variable is a symbol (like x or y) that can represent different numbers.
In programming, the idea is similar, but a variable is much more
powerful.

A variable in programming is:

- A named place in memory where data is stored

- A way to label information so we can find it later

- Something that can change (or vary) as the program runs

A variable is a storage location (in memory) which a program can use to
hold different values at different times. Think of a variable like a
labeled container in which you can store data, and the value inside that
container can change while the program runs. If a variable has been
created but no initial value has been set then its value could be NULL
or some other unwanted value depending on the language you are using.

## Key Features of Variables:

- Name

  - Each variable has a name (also called an identifier) that the
    programmer uses to refer to it.

  - Use meaningful names (e.g., score, temperature, username)

  - Don't start with a number (2cats ❌ → cats2 ✅)

  - No spaces (my age ❌ → my_age ✅)

  - Keep it lowercase and clear (player_health instead of ph)

- Value

  - A variable can hold a value like a number, a piece of text, or other
    types of data.

  - The value can change during the execution of the program.

- Data type

  - Variables have a type that defines the kind of data they store (like
    numbers, text, etc.).

  - Examples include:

    - Integer: Whole numbers (e.g., 5, -10).

    - Float: Decimal numbers (e.g., 3.14, -2.5).

    - String: Text (e.g., \"Hello\", \"John\").

    - Boolean: True or False

  - Often a variable CANNOT change its data type. This depends on the
    programming language.

## Example of Variables

name = \"Jordan\"; // stores text

age = 18; // stores a number

is_student = True; // stores true/false

## Why Do We Need Variables?

Imagine you're writing a scientific research paper.

You could keep rewriting the formula for the force of gravity on Earth
every time it's used. Or, you could just say: gravity = 9.81ms\^2 at the
top, and then refer to gravity whenever you need it. This makes your
paper easier to read, change, and reuse. That's exactly what variables
do for programmers.

## Define Variables Before Use?

Before you can use a variable, you need to **tell the computer the
variable exists** and often give it a starting value.

Think of it like this:

- You can't ask someone to "hand me the carton of eggs" if you've never
  put the carton in the refrigerator in the first place.

- In programming, if you try to use a variable that hasn't been defined,
  the computer doesn't know what you mean → this causes an **error**.

Correct process:

1.  Create the variable (give it a name)

    a.  Likely assign a starting or default value to it

2.  Store data in it (assign a value)

3.  Use it later, whenever you need that data

## Do Data Types Matter?

- The computer **treats different data differently**

- You can **add numbers together** but not add numbers to text unless
  you convert one to the other

## Key Ideas to Remember

- Variables are not the same as the value inside them

  - the name "age" is not the same as the number 18

- The value can change while the name stays the same

  - age might go from 18 to 19

- Variables let us store, reuse, and manipulate data instead of writing
  everything out over and over

- Good variable names matter

  - score is more helpful than x

- The type of data is important and cannot be mixed up or the program
  will crash
