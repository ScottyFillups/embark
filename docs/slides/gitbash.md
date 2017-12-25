class: inverse, middle, center

# Installing and using Git bash
### Or, alternatively, "Setting up a Windows environment"

---

## Foreword and nomenclature

This tutorial is mainly intended for __Windows__ users, as Mac and Linux users already have a terminal, and can easily install Git using their respective package manager.

I appreciate feedback; if you find a slide that's confusing or poorly written, please tell me and I'll revise it.

<br />

Below is a bit of technical nomenclature I'll be using:
* Directory: A folder
* Working directory: The folder you're currently working in

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
8. In the shortcut menu, select the "Shortcut key" field and press `CTRL+ALT+T` (T for __t__erminal)
9. Click OK
10. You should now be able to open up Git bash by pressing `CTRL+ALT+T`

Kudos if you got it to work successfully. The rest of this tutorial will be explaining what Git bash is, and how to use it.

---

## What is Git bash?

Git bash, surprisely, has two components:
* Git: A version control system
* Bash: The __B__ourne __A__gain __Sh__ell, a shell (a command line interface)

Git 

Bash allows you to type commands 


---

## What is Git?

Git is a __version control system__. What's version control?

Suppose you have to write an essay, and you type up a rough draft and name it `essayrough.docx`:
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

This is an example of (poor) version control. Keeping track of previous versions is important, in case you want to revert to a previous version.

---

What is Git?

So, why is this poor version control? It clutters your working directory, and it's unclear what changes were made in between drafts. What's the difference between `essayd2.docx` and `essayd3.docx`? The only way to figure that out is to open each file and compare the contents.

Git is a program that handles version control for you: no need to make funky filenames with version numbers! Cool huh?

---

## What is Bash?

Bash is an acronym for the __B__ourne __A__gain __Sh__ell, which is a modified version of a shell written by Stephen Bourne.

What's a shell? A shell is a user interface that allows users to interact with the operating system. It could be a GUI, but people usually 

---

## Navigation in Bash

`cd` stands for "Change directory", and is the "bread and butter" command of any shell.

* 

---

## Editing files in Bash (Vim)

---

## Introduction to version control

---

## GitHub: share your repositories online



---

## Pushing to a remote repository

---
