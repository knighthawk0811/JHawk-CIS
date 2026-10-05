---
title: "01.2 - Software"
weight: 40
book_number: 4
prev: "/programming-logic/ch01/01.1/"
next: "/programming-logic/ch01/01.3/"
---

# Computer Software

Software refers to the instructions and data that run on the hardware.
It is stored digitally and includes everything from operating systems to
applications. The following concepts are critical for understanding how
computers store and process information:

## Storing data
Computers store data using a binary
system, which consists of only two states: on (1) and off (0). Binary
data is used because it\'s simple to represent with electronic signals.
Physical storage media, like optical discs (CDs), store data as a series
of tiny pits (1s) and lands (0s). All data, whether numbers, text,
images, or videos, is represented using these binary digits.
{{< figure src="./media/image2.png" width="340" alt="Binary storage diagram" >}}

## Bytes and Bits

Bit: The smallest unit of data in a computer, representing a single
binary value (0 or 1).

Byte: A group of 8 bits, which can represent 256 different values. Bytes
are used to store characters, numbers, and other data. By combining
multiple bytes, computers can handle more complex data, such as text,
images, or larger numerical values.

Different types of data (like numbers, text, or media) require different
formats and methods for storage and retrieval.

## What is Binary

Binary is the number system computers use to represent everything, and
it works on just two digits, 0 and 1, instead of the ten digits (0-9)
you\'re used to in our everyday decimal system. In decimal, each
position in a number stands for a power of 10 (10⁰, 10¹, 10², and so
on), and you multiply the digit in that position by its place value to
get the number\'s worth --- that\'s why 342 means (3×10²) + (4×10¹) +
(2×10⁰).

Binary works exactly the same way, except each position stands for a
power of 2 instead of a power of 10: reading small to large, the place
values are 2⁰, 2¹, 2², 2³, 2⁴, 2⁵, 2⁶, 2⁷ (that\'s 1, 2, 4, 8, 16, 32,
64, 128), doubling each time you move left.

A binary digit, or \"bit,\" is either 0 or 1, and this is because
computers are powered by electricity which can be either off or on. You
may wonder why they don't use different voltages or something and the
simple answer is because that requires a more advanced mechanism and if
we did that we would have to go back to the days of having giant
computers. Imagine how big they would have been if we had started out
that way.

A number\'s decimal value is just the sum of all the place values where
there\'s a 1. So the binary number 00101010 equals 2⁵ + 2³ + 2¹, or 32 +
8 + 2 = 42, because those are the only positions with a 1 turned on.

Every number, letter, image, and instruction a computer processes
ultimately breaks down to patterns of these on/off bits. All the more
complex types of data are simply made of the same bits with extra steps.

{{< figure src="./media/image1.png" width="700" alt="Binary number illustration" >}}

[binary-simulator](https://jhawk-cis.netlify.app/examples/binary-simulator)

## How CPUs process data

CPUs process data through simple instructions known as machine code.
These instructions are limited but fundamental to computing. Common CPU
tasks include:

Loading data from memory.

Storing data back to memory.

Performing arithmetic operations, like addition and subtraction.

Executing instructions sequentially by moving to the next line of code.

Modern CPUs are capable of executing millions of instructions per
second, but these operations are still based on very simple binary
instructions.

## Assembly Language

CPUs can only understand machine code, which is represented as binary
data (1s and 0s). However, writing directly in machine code is
impractical for humans, as it's difficult to read and understand. To
bridge this gap, Assembly Language was created. Assembly is a low-level
programming language that uses human-readable commands (called
mnemonics) to represent the machine instructions.

Assembly is easier for humans to read than raw machine code; however,
the CPU still cannot directly execute it. Therefore, a special program
called an assembler is used to translate Assembly Language into machine
code that the CPU can understand and execute.

## High-Level Languages

While Assembly Language was a significant improvement over machine code,
it still required programmers to think like the CPU, performing tedious,
low-level tasks to accomplish even simple operations. To make
programming more accessible, high-level languages were developed.

High-level languages allow programmers to write instructions in a more
natural and abstract way, using logical statements, functions, and
variables. These languages are far removed from the inner workings of
the CPU, enabling developers to focus on solving problems rather than
managing the intricacies of the hardware. Examples of high-level
languages include Python, Java, and C++.

These high-level languages are then converted into lower-level languages
(like Assembly or machine code) so that the CPU can execute them.

## Compilers and Interpreters

Converting high-level language code into machine-executable code
requires another layer of translation. This is achieved through either
compilers or interpreters, depending on the programming language.

Compiler: A compiler translates the entire high-level code into a
separate machine code file (also called an executable) before running
it. Once compiled, this file can be executed directly by the CPU without
further translation. This approach is typically used in languages like
C++ or Java.

Interpreter: An interpreter translates and executes the high-level code
in real-time, during the program\'s execution. Unlike a compiler, it
does not produce a separate machine code file, but instead processes the
code line-by-line or block-by-block as it runs. Languages like Python
and JavaScript often use interpreters.

Some languages, such as Java, use a combination of both techniques by
compiling code into an intermediate form and then interpreting it during
runtime.

The compiler method is typically far faster than the interpreter method
but a unique compiled executable needs to be created for every
environment you want to run the code on while an interpreted code can
run universally on any machine that has an interpreter.

## Integrated Development Environments (IDEs)

When programmers write code, they need a specialized tool to write,
test, and debug their programs efficiently. An Integrated Development
Environment (IDE) is a software suite that provides all the necessary
tools for software development in one place. An IDE typically includes:

- A text editor for writing source code.

- A compiler or interpreter for translating the code into
  machine-executable instructions.

- Debugging tools to help identify and fix errors in the code.

- Other features like code autocompletion, syntax highlighting, and
  project management tools to improve productivity.

Popular IDEs include Visual Studio, Eclipse, and PyCharm.

## System Software and Application Software

Computer software can be broadly divided into two categories: System
Software and Application Software.

- System Software: This category includes programs that manage and
  control the basic operations of a computer. System software acts as a
  foundation that other programs rely on. It includes:

  - Operating Systems: Manage hardware and provide a user interface
    (e.g., Windows, macOS, Linux).

  - Utility Programs: Perform maintenance tasks like file management,
    disk cleanup, and security scanning.

  - Software Development Tools: Programs like compilers, debuggers, and
    IDEs used for building and developing other software.

- Application Software: This refers to software designed to help users
  perform specific tasks. Application software is what most users
  interact with on a daily basis. Examples include:

  - Games: Entertainment software such as video games.

  - Word Processors: Tools like Microsoft Word or Google Docs for
    creating and editing documents.

  - Internet Browsers: Programs like Chrome, Firefox, and Edge for
    browsing the web.
