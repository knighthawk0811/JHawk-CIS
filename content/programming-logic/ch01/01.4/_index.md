---
title: "01.4 - Integrated Development Environments"
weight: 60
book_number: 6
prev: "/programming-logic/ch01/01.3/"
next: "/programming-logic/ch02/"
---

## What is an IDE?

Developers aren\'t limited to writing code in a plain text editor and
then separately running it to see if it works. Instead, many use an IDE
(Integrated Development Environment) --- basically a text editor on
steroids. An IDE bundles the writing, running, and debugging of code
into one program, adding features like autocomplete, inline error
checking, and built-in debugging tools that a plain text editor doesn\'t
have.

Not every tool fits neatly into \"plain text editor\" or \"full IDE,\"
though. Some editors sit in between --- lightweight on their own, but
extendable with plugins until they behave a lot like an IDE. Others are
built for one language or ecosystem specifically, with deep features
tailored to that language. Which one makes sense depends on what you\'re
working on and how much structure you want your tool to give you.

{{< figure src="./media/image1.png" width="600" alt="VS Code interface" >}}

[VS Code]

## Core things an IDE does for you

- Syntax highlighting / code coloring

  - Automatically indents your code and colors different parts of it.
    Numbers, comments, and keywords each get their own color

  - All this helps the developer quickly scan their code and take it in
    all at once when problem solving

- Auto-completion / IntelliSense

  - Similar to autocomplete on your phone, but built for code, and more
    powerful since it can reference your actual variables, functions,
    and data to suggest completions that are correct, not just likely

- Error and warning detection (inline linting)

  - Like spellcheck, but for mistakes in your code

  - Flags problems as you type instead of waiting until you try to run
    it

- Debugging tools (breakpoints, step-through, variable inspection)

  - Let you pause your code mid-run and inspect what\'s happening

  - Covered in more depth in the chapter on debugging

- Built-in terminal

  - Run and test your code without leaving the tool or switching windows

- Project/file management

  - Keep all the files in a project organized and accessible in one
    place, without leaving the tool

- Version control integration (git built in)

  - Track changes to your code and collaborate with others

  - More on Git later

- Extensions/plugins ecosystem

  - Add extra features and functionality on top of what the IDE ships
    with by default

{{< figure src="./media/image2.png" width="600" alt="GameMaker IDE interface" >}}

[GameMaker]

## How people typically use IDEs (workflow)

- Opening a project, not just a file

  - Instead of opening one file at a time, you usually open an entire
    project folder in your IDE

  - This gives the IDE visibility into all your files at once, which is
    what makes features like autocomplete and error checking work well

  - The IDE can see your other files and how they connect

- The write → run → debug loop

  - Most development follows a repeating cycle: write some code, run it
    to see what happens, fix what\'s broken, and run it again

  - An IDE keeps all three of these steps in one place, so you\'re not
    constantly switching between a text editor, a separate program to
    run your code, and a separate debugger

  - This tight loop is a big part of why IDEs speed up development
    compared to juggling separate tools

- Where the terminal fits in

  - Even with an IDE, you might still use the command line for running
    scripts, installing packages, or using version control

  - Having a terminal built into the IDE means you don\'t have to leave
    the tool or open a separate window to do this

- Customization

  - Most IDEs let you adjust themes (like dark mode), keybindings, and
    font sizes to fit how you like to work

  - Many also support \"settings sync,\" so your setup follows you
    across different computers instead of having to reconfigure
    everything from scratch each time

  - This isn\'t just cosmetic. A setup that\'s comfortable to look at
    and navigate reduces friction and fatigue over long coding sessions

{{< figure src="./media/image3.png" width="620" alt="Cursor IDE interface" >}}

[Cursor]

## Popular setups 

(both IDEs and lighter weight apps)

- General-purpose:

  - VS Code + extensions

  - Notepad++

  - Zed

- Language/ecosystem-specific:

  - JetBrains family (PyCharm, IntelliJ, WebStorm, etc.)

  - GameMaker

  - Gadot

  - Android Studio

  - Xcode

  - Visual Studio

- Lightweight/classic:

  - Sublime Text

  - Vim/Neovim

  - Emacs

- Ai-assisted

  - Cursor

  - Windsurf

  - VS Code Extensions

- Cloud/browser-based:

  - GitHub Codespaces

  - Replit

- Learning Tools

  - Code.org

  - W3Schools

## How to Choose

1.  Whichever tool you are already familiar with

2.  Whichever tool your work already has in place

3.  Whichever tool is targeted toward your chosen language

4.  When in doubt it is pretty low-risk to try out a new IDE and
    switching between them doesn't take long and shouldn't break any
    code.

    a.  As long as it's not a dedicated ecosystem like Gamemaker or
        Gadot as those are also the game engine needed. It is possible
        to use another IDE, but it will lack the engine.
