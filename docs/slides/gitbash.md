class: inverse, middle, center

# Installing and using Git bash
### Or, alternatively, "Setting up a Windows environment"

---

## Foreword and nomenclature

This tutorial is mainly intended for __Windows__ users, as Mac and Linux users already have a terminal, and can easily install Git using their respective package manager.

The tutorial for Bash, Git, and Vim are all __*introductory*__ tutorials; you are highly encouraged to do your own research after completing this slideshow.

I appreciate feedback; if you find a slide that's confusing or poorly written, please tell me and I'll revise it.

<br />

Below is a bit of technical nomenclature I'll be using:
* Directory: A folder
* Working directory: The folder you're currently working in
* GUI: Graphic user interface 
* CLI: Command line interface
* dotfile: A file or directory that has a name that begins with a dot (eg `.git/`). Dotfiles are "hidden"

---

## Installing and configuring Git bash

1. Go to the following link: https://git-scm.com/downloads
2. Select your appropriate OS (likely Windows, 64-bit)
3. You'll be prompted to download a file like `Git-2.15.1.2-64.exe`; save it in a place where you can find it
4. Go to where you saved it, and open it
5. In general, keep clicking "next"; don't deviate from the defaults and just install it
  * Make sure you select __MinTTY__ as your terminal emulator
  * Make sure you use __Vim__ as your text editor
6. Git bash should now be installed; there should be a shortcut on your desktop
  * If there isn't a shortcut on your desktop, check if it's in your start menu
7. Right click the shortcut to Git bash, select "properties"
8. In the shortcut menu, select the "Shortcut key" field and press `CTRL+ALT+T` (T is for __t__erminal)
9. Click OK
10. You should now be able to open up Git bash by pressing `CTRL+ALT+T`

Kudos if you got it to work successfully. The rest of this tutorial will be explaining what Git bash is, and how to use it.

---

## What is Git bash?

Git bash has two components:
* Git: A version control system
  * Git keeps track of previous versions of your source code, so you can revert easily if you make a mistake
* Bash: The __B__ourne __A__gain __Sh__ell, a shell (a command line interface)
  * Bash allows you execute programs and navigate using commands

I'll be going into further detail and providing examples in the next slides.

---

## Commands in Bash

In your terminal emulator, MinTTY, you're able to type in __commands__. Entering a command prompts the shell to perform an __action__, for example:

```terminal
$ mkdir somedirectory
$ touch randomfile.txt
$ ls
randomfile.txt somedirectory/
```

`mkdir`, `touch`, and `ls` are all commands. `mkdir`, `touch`, and `ls` mean "make directory", "make file", and "list files and directories", respectively.

In the above example, we make a directory (folder) named "some-directory" and a file named "a-file.txt", then use the `ls` command to print out all the things we created.

---

## Commands in Bash

Commands often have options which can be toggled with flags. Example:

```terminal
$ ls
afile.js somedirectory/
$ ls -a
./ ../ .secretfile afile.js somedirectory/
```

`ls` lists the contents of your working directory, but doesn't display dotfiles, files and directories that begin with a `.`. `ls -a` is the same command, but with the `a` flag enabled. The `a` flag stands for "all", and displays all files and directories, including dotfiles.

You may have noticed `./` and `../` in the previous example: those are special directories
* `./` refers to the directory you're currently in
* `../` refers to the parent directory (the directory "above" the one you're currently in

---

## Commands in Bash

These special directories can come in handy, for example:
* `explorer .` opens the file manager in the directory you're currently in
* `cd ../` makes you go up one directory

There are also reserved characters that act as shortcuts to important directories:
* `/` is the root directory, typically your `C:` drive
* `~` is your home directory, which is usually `C:\Users\<YourName>`
* `-` is the directory you last visited; think of the "back" button in a web browser

Example (`pwd` means "print working directory", and prints which directory we're currently in):

```terminal
$ cd ~
$ pwd
C:\Users\Philip
$ cd /
$ pwd
C:\
$ cd -/..
$ pwd
C:\Users\
```

---

## Commands in Bash

Below is a list of common commands, along with useful flags:

* `explorer [DIR]` - Open a directory in the Windows file explorer
* `start [FILE]` - Open a file, the GUI equivalent of clicking an icon
* `man [COMMAND]` - `man` stands for "Manual", and will provide information on how to use the command
* `ls` - List all files and directories in your working directory
  * `ls -a` - List with the `a` flag
* `pwd` - Print working directory
* `cd [DIR]` - Change directory
* `rm [FILE]` - Remove a file
  * WARNING: This does NOT put the file in the recycling bin; if you delete it, it's gone forever
  * `rm -r [FILE/DIR]` - Recursively deletes a file (used for deleting directories)
* `touch [FILE]` - Make a file
* `mkdir [DIR]` - Make a directory
* `rmdir [DIR]` - Remove a directory (needs to be empty)
* `cat [FILE]` - Print out the contents of a file
* `vim [FILE]` - Edit a file with the Vim text editor

---

## Editing files in Bash (with Vim)

You can edit files in Git bash with Vim
* Vim is a lightweight, powerful text editor that's used in the terminal
* You can edit a file with Vim by entering `vim [FILE]`

Vim has three main modes:
* `NORMAL`: Press keys to execute commands
* `INSERT`: Enter text normally
* `VISUAL`: Select blocks of text, similar to "click and drag"

How to enter:
* `NORMAL` mode: Press `esc`
* `INSERT` mode: Press `i` (insert) or `a` (append, moves cursor forward one space)
* `VISUAL` mode: Go into normal mode, then press `v`; `VISUAL` mode is really a subset of `NORMAL` mode

---

## Editing files in Bash (with Vim)

Vim is difficult to learn, but is very rewarding:
* It supports a large number of commands, which, when used correctly, are extremely helpful
* It's very fast and lightweight, with a filesize 3.5 MB
* It doesn't need a GUI, since it can run in the terminal

To get good at Vim, you need to practice:

* Don't invest too much time trying to memorize commands! Instead, just go out of your way to use them
* Always question whether there's a "better way" of doing things; remember, Google is your friend!
  * If you're finding a certain task very difficult and repetitive, research whether there's a better way of doing things

A final note: If you don't want to use Vim, you don't need to use it. If you prefer a text-editor with a GUI, I'd highly recommend [Atom](https://atom.io/).

---

## How to use Vim

#### Modes, and saving and exiting

* `i` - Switch `INSERT` mode
* `v` - Switch to `VISUAL` mode
* `:wq` - Write (save) and quit
* `:q!` - Quit, and disregard changes
* `:q` - Quit (only works if there are no changes)
* `:w` - Write (save) without quitting

#### Motions (Navigation commands). The following command make you go to the...

* `h` - Left
* `l` - Right
* `k` - Up
* `j` - Down

---

## How to use Vim

#### More motions!

* `0` - Beginning of the line
* `^` - First non-blank character of the line
* `$` - End of the line
* `w` - Next word
* `b` - Previous word
* `gg` - Top of the file
* `G` - Bottom of the file

---

## How to use Vim

Operators are commands that manipulate the file contents:
* They are often combined with a motion; `[M]` acts as a placeholder for a motion
* An operator specifies __what__ you want to do, an __action__
* A motion specifies __where__ you want to do something, a __direction__
* If a block of text is selected via `VISUAL` mode, the operator will operate on the selected text (ie it doesn't take a motion)

#### Operators

* `d[M]` - Delete
* `y[M]` - Yank
* `p` - Paste
* `o` - Insert a new line below the cursor and go into `INSERT` mode
* `x` - Delete a single character

---

## How to use Vim

In general, enter the operator character as the command motion will apply the operation to a single line. For example, `yy` will copy the current line, and `dd` will delete the current line.

These are the basics of Vim
* For the sake of time, I won't be going into any more detail
* The Vim community is very large, and any questions you have probably have been answered on StackOverflow
* If you're struggling, don't feel hesistate to just use an easier text editor, like [Atom](https://atom.io/)

Remember: __Google is your friend c:__

<br />

Here a few things to figure out, as an exercise:
* How do you search for words?
* How do you find/replace?
* How do you paste your system clipboard into Vim? Eg, copy something from your browser: how do you paste that into Vim?

---

## What is Git?

Git is a __version control system__. What's version control?

Suppose you have to write an essay, so you type up a rough draft and name it `essayrough.docx`:
* You then begin the process of revising your essay, and save your second draft as `essayd2.docx`
* After several revisions, you decide you want to change one of your main points in the essay body
  * You do this, and append `alt` to versions that contain the modified point
  * After spending a lot of time tweaking `essayd5alt.docx`, you decide you prefer your original point
* You then continue to tweak `essayd4.docx` and save it as `essayfinal.docx`

After several hours, your folder looks something like this:

```terminal
  essayrough.docx
  essayd2.docx
  essayd3.docx
  essayd4.docx
  essayd5alt.docx
  essayfinal.docx
```

This is an example of (poor) version control. Regardless, poor version control is better than no version control; keeping track of previous versions is important, in case you want to revert to a previous version.

---

## What is Git?

So, why is this poor version control? It clutters your working directory, and it's unclear what changes were made in between drafts. What's the difference between `essayd2.docx` and `essayd3.docx`? The only way to figure that out is to open each file and compare the contents.

Git is a program that handles version control for you: no need to make funky filenames with version numbers! Cool huh?

---


## Introduction to version control

---

## GitHub: share your repositories online



---

## Pushing to a remote repository

---
