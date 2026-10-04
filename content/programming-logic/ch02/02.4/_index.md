---
title: "02.4 - Hoisting"
weight: 100
book_number: 11
prev: "/programming-logic/ch02/02.3/"
next: "/programming-logic/ch02/02.5/"
---

## Hoisting

Some languages allow something called hoisting. Before we can understand
what hoisting is, let's talk about what happens without hoisting.

## Without Hoisting

If you try to use a variable on a line of code BEFORE that variable has
been declared it will crash the program. If a spot in memory hasn't
already been reserved for the variable then there is nothing to
reference or access and the program crashes.

## With Hoisting

If hoisting is available then as long as the variable is declared
somewhere in the program then it will exist from the beginning. However,
just because it exists does not mean it actually has any value stored in
it. Hoisted variables may not crash due to not being able to find them,
but it still might crash if you try to do something with the data stored
in there while they are empty.

## Example: Javascript

var my-hoisted-variable = 0;

The variable above has been hoisted with the keyword var and will exist
from the beginning of the program.

let my-new-variable = 1;

This variable has been declared with the keyword "let" and it is not
hoisted. Attempting to access this before it has been declared will
cause a fatal error.
