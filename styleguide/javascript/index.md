---
layout: inner
title: JavaScript Style Guide
---

###### CodeStyle

## General Provisions

- Code should be in UTF-8.
- A new line should be  LF.
- Indentation should be tabs. 
- No extra spaces at the end of lines (set up your text editor, so that it removes extra spaces when saving).

## Naming

Naming should be as descriptive as possible. The only exception is the indexing variable in an loop. That can be shortened to a single letter starting from i.

- variableNamesLikeThis
- functionNamesLikeThis
- ClassNamesLikeThis
- methodNamesLikeThis
- ConstantsLikeThis

Private properties and methods of objects begin with an underscore _.

## Literals

### Objects

- Object should always be created by `{}` and not `new Object()`.
- When creating an empty Object, use `{}` without spaces.
- When creating an Object with keys, 
   - There should be a single space after the opening bracket.
   - There should be a single space before the closing bracket.
   - Keys should be written without quotes. The exception is when it is necessary.
   - There should be a space between the key word and the colon.
   - There should be a space between the colon and the value.
   - The comma should have no space before and 1 space behind itself.
   - The last value shouldn't be trailed with a comma.
   - The comma shouldn't start a new line. It should always trail the previous value.

good:

    var obj = { A: 1, b: 2, C: 3 };

    var obj = {
        A: 1, 
        b: 2, 
        C: 3 
    };

poor:

    var obj = {A:1,b:2,C:3};

    var obj = {A:1, b:2, C:3};

    var obj = {A : 1, b : 2, C : 3};

    var obj = { "A" : 1, "b" : 2, "C" : 3 };

    var obj = { A : 1, b : 2, C : 3 };

    var obj = { A :1, b :2, C :3 };

    var obj = { A : 1 , b : 2 , C : 3 };

    var obj = {
        A : 1, 
        b : 2, 
        C : 3, 
    };


    var obj = {
        A : 1 
      , b : 2
      , C : 3 
    };

### Arrays

- Arrays should always be created by `[]` and not `new Array()`.
- When creating an empty Array, use `[]` without spaces.
- When creating an Array with values, 
   - There should be a single space after the opening bracket.
   - There should be a single space before the closing bracket.
   - The comma should have no space before and 1 space behind itself.
   - The last value shouldn't be trailed with a comma.
   - The comma shouldn't start a new line. It should always trail the previous value.

good:

    var arr = [ 1, 2, 3 ];

    var arr = [
        1, 
        2, 
        3 
    ];

poor:

    var arr = [1,2,3];

    var arr = [1, 2, 3];

    var arr = [ 1 , 2 , 3 ];

    var arr = [
        1, 
        2, 
        3,
    ];

    var arr = [
        1
      , 2
      , 3 
    ];

### Strings

Strings are written using single quotes or double quotes:

good:

    var  lyrics  =  'Never gonna Give you up, Never gonna Let you down' ;
    var  lyrics  =  "Never gonna Give you up, Never gonna Let you down" ;


### Semicolon

Semicolon are always placed.

## Blocks

- The opening brackets should be followed by 1 new line.
- The closing brackets should be behind 1 new line.
- The opening brackets should always follow a space and not start at a new line

good:

    if ( a === 0 ) {

       // this is good
       return true;

    }

poor:

    if ( a === 0 ) {
        // this is good
        return true;

    }

    if ( a === 0 ) {

        // this is good
        return true;
    }

    if ( a === 0 ) { // this is good

        return true;

    }

    if ( a === 0 ){

       // this is good
       return true;

    }


## Conditional instructions

### if statement

- The if keyword should always be followed with a space, an opening parenthesis and another space.
- The test should end with a space, an closing parenthesis and another space.
- The if statement should always contain a block.
- If there is an else statement, it should be on the same line as the closing bracket of the block.
- The else statement is followed by another block and should be seperated from both blocks with a single space on both sides.
- Assignment in a test is not use.

good:

    if ( test ) { 

        // ... 

    } else { 

        // ... 

    }

poor:

    if (test) { 

        // ... 

    }

    if( test ) { 

        // ... 

    }

    if (test ) { 

        // ... 

    }

    if ( test) { 

        // ... 

    }

    if ( test ){ 

        // ... 

    }

    if ( test ) { 

        // ... 

    }else { 

        // ... 

    }

    if ( test ) { 

        // ... 

    } else{ 

        // ... 

    }


### switch

- The switch keyword should always be followed with a space, an opening parenthesis and another space.
- The test value should end with a space, an closing parenthesis and another space.
- Every case should have a break statement, except for the default case or when returning a value.
- Every case should have a space between the colon and the test.
- Before and after each case, there should be a new line.
- Assignment in a test is not use.

good:

    switch ( value ) { 

        case 1 : 

            // ... 
            break ;

        case 2 : 

            // ... 
            break ;

        default : 

            // ... 
            // no break keyword on the last case 

    }

## Cycles

### for

- Don't use foreach loops.
- Don't use for in loops on arrays.
- The for keyword should always be followed with a space, an opening parenthesis and another space.
- The assignment part should start with a space.
- The assignment part should end with a semicolon and a space.
- The test part should start with a space.
- The test part should end with a semicolon and a space.
- The update part should start with a space.
- The update part should end with a space, a closing parenthesis and another space 

## Operators

### with

Operator `with` not used.

### The equality operator

Always use strict equality `===` (inequality `!==` ).

### Ternary operator

Always use spaces around the colon and question mark.

### Unary

All unary operators are written together with the following operands:

var  foo  =  ! bar;

### eval

Avoid using eval. To parse json using JSON.parse.

### undefined

Check the value through a strict comparison.

Good:

    x === undefined;
Poor:

    / / In modern browsers already defined immutable undefined. 
    var undefined; 
    x === undefined;

    typeof x === 'undefined'

    x === void 0
