# Clean Code reflections- Smilla Sollén

## Chapter 2


## Chapter 3


## Chapter 4
This chapter made me reflect on how cluttered my old code with heaps of JSDocs looked. I appreciated the principle that. **comments do not make up for bad code** and that code should **explain itself**, using comments only as a last resort. I learned a lot from the section on **redundant** comments and **mandated** comments, realizing that over-documentation often just clutters the code and makes it harder to read. While I didn’t find reasons to include legal comments or other types of good comments, I chose to keep the JSDoc header `/** WCAG Color Service ... */` in the public API class and controllers, since these are the classes users interact with most, and including author and version feels valuable and clear. Overall, I now try to balance **self-explanatory code** with minimal, purposeful commenting, only where it adds real clarity.

![My JSDoc](/screenshots/chapter4.png)

## Chapter 5
Chapter 5 felt very familiar to me, perhaps because formatting is already widely emphasized as a core aspect of code quality. I especially appreciated **the newspaper metaphor**, which I applied when structuring all my classes, (but I´ll use `PaletteController` as an example)— placing higher-level methods like `generatePalette` and `savePalette` first, followed by private helper functions, to make the code tell a clear story. The discussion on **horizontal formatting** made me more conscious of line length and visual grouping, which I applied when aligning object destructuring and method calls for better readability. Learning about **dependent function**s also helped me organize my code so that callers appear before details, improving the flow for anyone reading or maintaining the class. Overall, this chapter reinforced that thoughtful formatting is not just aesthetic, but a critical tool for **communication and readability**, making my code easier to follow for others and for my future self.

![Beginning of class](/screenshots/chapter5_1.png)
![End of class](/screenshots/chapter5_2.png)

## Chapter 6


## Chapter 7


## Chapter 8


## Chapter 9


## Chapter 10


## Chapter 11
