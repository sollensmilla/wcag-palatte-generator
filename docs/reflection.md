# Clean Code reflections- Smilla Sollén

## Chapter 2
For this chapters reflection, I will use `AccessibleVariant`, the class I wrote in L3 when refactoring my module as an example, because I can see both strengths and weaknesses in this class regarding this principle. Many of the method names, like `generateAccessiblePalette`, `findAccessibleVariant`, and `#tryFindSecondVariant`, makes good use of **Use Intention-Revealing Names** which helps readability and makes the code easier for another developer to understand without **Mental Mapping**. I also used descriptive variable names such as `lightnessStep` and `fallbackColors`, which improve clarity. However, some names, like `#shiftVariant` or `candidate`, could be more specific to make their intent immediately obvious, especially for someone unfamiliar with color accessibility. Overall, the chapter reminded me that investing extra thought into naming—even if it results in longer names—is worthwhile for maintainability and reducing mental translation. In future, I want to be even more careful with subtle distinctions in method and variable names to make the code self-explanatory.

![Accessible Variant](/screenshots/chapter2.png)


## Chapter 3
I have generally succeeded in keeping my functions and methods **Small!** and focused, following the principle that they should only **Do one thing**. I try to structure methods **top to bottom**, so the main logic is easy to follow. The hardest part has been keeping the number of **Arguments** low, which I don’t always manage according to a Clean Code perspective. To address this, I created a utility class `RequestContext` that wraps `req, res, and next`, allowing the controller methods to use a single argument. I also try to avoid booleans and unnecessary parameters to keep functions clear.

![Request Context](/screenshots/chapter3_1.png)
![Usage of util](/screenshots/chapter3_2.png)


## Chapter 4 - Comments
This chapter made me reflect on how cluttered my old code with heaps of JSDocs looked. I appreciated the principle that. **comments do not make up for bad code** and that code should **explain itself**, using comments only as a last resort. I learned a lot from the section on **redundant** comments and **mandated** comments, realizing that over-documentation often just clutters the code and makes it harder to read. While I didn’t find reasons to include legal comments or other types of good comments, I chose to keep the JSDoc header `/** WCAG Color Service ... */` in the public API class and controllers, since these are the classes users interact with most, and including author and version feels valuable and clear. Overall, I now try to balance **self-explanatory code** with minimal, purposeful commenting, only where it adds real clarity.

![My JSDoc](/screenshots/chapter4.png)

## Chapter 5 - Formatting
Chapter 5 felt very familiar to me, perhaps because formatting is already widely emphasized as a core aspect of code quality. I especially appreciated **the newspaper metaphor**, which I applied when structuring all my classes, (but I´ll use `PaletteController` as an example)— placing higher-level methods like `generatePalette` and `savePalette` first, followed by private helper functions, to make the code tell a clear story. The discussion on **horizontal formatting** made me more conscious of line length and visual grouping, which I applied when aligning object destructuring and method calls for better readability. Learning about **dependent function**s also helped me organize my code so that callers appear before details, improving the flow for anyone reading or maintaining the class. Overall, this chapter reinforced that thoughtful formatting is not just aesthetic, but a critical tool for **communication and readability**, making my code easier to follow for others and for my future self.

![Beginning of class](/screenshots/chapter5_1.png)

![End of class](/screenshots/chapter5_2.png)

## Chapter 6 - Object and Data structures
The most interesting part of Chapter 6 for me was the **Law of Demeter** and the idea that getters and setters are often overused. Since I wrote this assignment in JavaScript, I didn´t apply that in this specifik project, but the principle still made me think about how much of my objects’ data I expose. The discussion abou t**Data/Object Anti-Symmetry** also made me reflect on my `AccessibleVariant` class, which hides most of its logic but still returns plain data objects in some methods—something that might blur the line between objects and data structures. I think my code avoids “train wrecks” well, but it still depends quite tightly on its collaborators, which could be improved by more abstraction. Overall, this chapter made me more aware of how to design cleaner and more consistent object structures.

![Part of AccessibleVariant](/screenshots/chapter6.png)

## Chapter 7 - Error Handling
Chapter 7 reinforced how error handling should make code cleaner, not messier. I especially liked the idea to **Use Exceptions Rather Than Return Codes**, which I’ve applied in my error handlers, .e.g `AccessibleVariat` class by throwing a custom `NoAccessibleColorError` instead of returning a special value. This makes the intent clearer and separates the normal flow from exceptional cases, following the principle to **Write Your Try-Catch-Finally Statement First**. My `#tryFindVariant` method also reflects this by isolating exception handling and keeping the main logic readable. Finally, the idea to **Provide Context with Exceptions** fits well with my error message, which includes both the color and direction, helping anyone debugging understand what went wrong without extra digging.

![AccessibleVariant](/screenshots/chapter7_1.png)

![AccessibleVariant error](/screenshots/chapter7_2.png)

![tryFindVariant](/screenshots/chapter7_3.png)

## Chapter 8 - Boundaries
This chapter helped me appreciate the importance of **Clean Boundaries** when designing modules and using them in my applications. In my `WcagColorService`, the public API is very clear, exposing only `isAccessible`, `generatePalette`, and `passesWcag`, while all internal logic—like `AccessibleVariant`, `ColorConverter`, and private methods—is fully encapsulated. This makes the service easy to use and hard to misuse, showing that I successfully isolated responsibilities. The chapter’s advice on **Using Third-Party Code** and **Using Code That Does Not Yet Exist** reinforced why keeping internal details hidden is important, so I could replace or update internal implementations later without affecting the controller. Overall, I feel my module demonstrates clean boundaries and good separation of concerns.

![Public API](/screenshots/chapter8.png)

## Chapter 9 - Unit Tests
Although most of my current tests are manual, I can see how structuring them as automated unit tests would make them faster, independent, and repeatable, aligning with the **F.I.R.S.T.** principles. For example, in my tests for v1 of `WcagColorService` I checked `contrastRatio`, `passesWcag`, and `generatePalette` with valid inputs and also tested invalid hex colors to ensure `InvalidHexColorError` is thrown, keeping each scenario focused and clear on **One assert per test**. Writing **tests first** would help me focus on what the code should do rather than how it does it, and would make the codebase more maintainable. I also realized that well-designed tests enable the **-ilities** like flexibility and reliability, because they make refactoring safer. In future projects, I want to treat tests as first-class code, ensuring they are as readable and organized as the production code itself.

![Tests](/screenshots/chapter9.png)

## Chapter 10


## Chapter 11
