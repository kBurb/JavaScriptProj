# Project #3: Igpay Atinlay

* Author: Kade Burback
* Class: CS354 Section #
* Semester: Fall 26

## Overview

Takes strings and converts them into pig latin.

## Reflection

Using Javascript again was kind of nice, since it was the first programing
language I ever used, that being said it also made me glad I don't use it 
that much anymore. Overall the project went well, until I got to handling
numbers in words. The way I had been implementing the program just didn't 
work smoothly with handling the numbers easily and I eventually had to start
over from the beginning.

I was happy I got to use regular expressions in the assignment, it felt cool to 
tie it in with the lectures and also helped me understand RE better. Compared to 
how I was trying to implement the project in my first attempt, RE's made it 
way easier and a lot more condensed.

## Compiling and Using

Run the program with 

node igpay.js 

in a terminal in the project directory. Make sure Node.js is installed.

Enter a word or phrase and the program will translate it into Pig Latin and display it.

## Results

This section presents timing and other results of any experiments that
you were asked to perform as part of the project.

Since string manipulation in JavaScript is inefficient since strings are immutable, and my program uses
several string operations for each word that it translates, if there is a input with a lot of words, the repeated
string operations could take a long time and use a lot of memory.

One possibility to improve the performance would be to reduce the number of intermediate strings that are 
created while processing a word. I could also minimize the repeated searches through each string. 

### Execution Time
Measured using 

time cat /usr/share/dict/words | node igpay.js >> /dev/null

Output: 

## Sources used

I used this website to get a better understanding how I could write out a regular expression
but didn't take any code from it. https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_expressions

----------

## Notes

* This README.md template is using Markdown. Here is some help on using Markdown:
  [markdown cheatsheet](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet)


* Markdown can be edited and viewed natively in most IDEs such as Eclipse and VS Code. Just toggle
  between the Markdown source and preview tabs.

* To preview your README.md output online, you can copy your file contents to a Markdown editor/previewer
  such as [https://stackedit.io/editor](https://stackedit.io/editor).