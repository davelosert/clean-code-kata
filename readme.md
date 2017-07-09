# Clean Code Kata
This is a little Kata for practicing some simple principles of Clean Code.
I created this Kata for a Clean Code Presentation which can be found [here](https://slides.com/davel/clean-code).

## Setup
1. Execute `npm install` or `yarn` to install al dependencies.
2. Run the tests with `npm run test` or `yarn test`;
3. Start refactoring in the _refactor_code.js_ File (this is the file that gets tested)

## How it works?
The Goal of this Kata is to refactor the Code in **src/refactor_code.js** to something better readable.

Use the tests to not break anything! Execute them after every change!

You can just try it on your own. If you need tips or help, either have a look at the [presentation](https://slides.com/davel/clean-code) or simply follow the principles and instructions below.

## Principles & Steps
1. **Use better names:** E.g. replace `$(this)` with `const $hoveredLink = $(this)` and use the new variable in all places. When extracting functions, take a moment to find a name that shows what it DOES and not HOW it does it.
2. **Show Intent:** E.g. put the first conditional statement into a function `buttonWasClicked()` - you can then remove the comment.
3. **Remove duplicated calls:** E.g: The three calls to `.animate` look pretty similar. Put them behind a parametrized function
4. **Remove duplicated code:** Both of the lower `if`-bodies actually do the same thing, just on different elements. Extract a parametrized function as well
5. **Make it read like a book:**: In the end if you managed to hide all functionality behind functions, compose those functions in the top of the call to make it read like a book - showing intent and WHAT it does instead of how.
6. **Remove the lying comment:**: The Comment on top of the function actually says a lot that is not true. Read it again and realize what is it - then remove it. It's not needed!

If you have any questions, don't hesitate to contact me for help!


