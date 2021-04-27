## Part 1a #1
    Line 9 prints "values added:" and the value stored in the result after adding the parameters num1 and num2 but only if add is true.

## Part 1a #2
    Line 13 will print "final result:" and then the sum of num1 and num2.

## Part 1a #3
    Just like #1 line 9 prints "values added:" and the value stored in the result after adding the parameters num1 and num2 but only if add is true.

## Part 1a #4
    Line 13 results in an error because result was declared a let variable so its scope was only within the if statement.

## Part 1a #5
    Line 9 will print "values added: 0".

## Part 1a #6
     Just like using a let variable, Line 13 results in an error because result was declared a const variable so it has the same scope as a let variable.

## Part 1b #1
    Line 12 will print the number of prices minus 1 because i was declared a var varible so its scope is everythin inside discountPrices.

## Part 1b #2
    Line 13 will print the discounted price of the last price in the list of prices.

## Part 1b #3
    Line 14 will print the final price of the last price in the list of prices after the discount was applied to it.

## Part 1b #4
    discountPrices will return the list of prices after the discount has been applied to it.

## Part 1b #5
    Line 12 will result in an error because it is trying to print i which was declared as a let variable so its scope is only withing the for loop.

## Part 1b #6
    Line 13 will also result in an error because it is also a let variable so its scope is only wihting the for loop.

## Part 1b #7
    Line 14 will print the final price of the last price in the list after the discount was applied.

## Part 1b #8
    discountPrices will return the list of prices after the discount was applied.

## Part 1b #9
    Line 11 will result in an error becuas it tries to print i which only has scope within the for loop.

## Part 1b #10
    Line 12 will print the length of the list of prices.

## Part 1b #11
    discountPrices will return an empty list because when it was declared as a const, it was also initialized as an empty list so it could not be changed after initialization.

## Part 1b #12A
    "student.name"

## Part 1b #12B
    "student['Grad Year']"

## Part 1b #12C
    "student.greeting()"

## Part 1b #12D
    "student['Favorite Teacher'].name"

## Part 1b #12E
    "student.courseload[0]"

## Part 1b #13A
    '3' + 2 = "32'
    This is because 2 maps to '2' as a string.

## Part 1b #13B
    '3' - 2 = 1
    This is because '3' maps to 3 as an integer.

## Part 1b #13C
    3 + null = 3
    This is becuase null maps to 0 as an integer.

## Part 1b #13D
    '3' + null = '3null'
    This is because null maps to 'null' as a string.

## Part 1b #13E
    true + 3 = 4
    This is because true maps to 1 as an integer.

## Part 1b #13F
    false + null = 0
    This is because false maps to 0 and null maps to 0 as integers.

## Part 1b #13G
    '3' + undefined = '3undefined'
    This is because undefined maps to 'undefined' as a string.

## Part 1b #13H
    '3' - undefined = NaN
    This error is because undefined can't map to an integer even if '3' maps to 3.

## Part 1b #14A
    '2' > 1 = true
    This is because '2' maps to 2 as an integer.

## Part 1b #14B
    '2' < '12' = false
    This is becase the < operator is comparing strings and 2 is greater than 1.

## Part 1b #14C
    2 == '2' = true
    This is because == converts '2' to integer 2.

## Part 1b #14D
    2 === '2' = false
    This is because 2 and '2' are both different values so strict equality dictates this is false.

## Part 1b #14E
    true == 2 = false
    This is because true is converted to integer 1.

## Part 1b #14F
    true === boolean(2) = true
    This is because converting a non zero integer like 2 to a boolean, makes a true value.

## Part 1b #15
    The == operator converts the values before making the comparison while the === comparator makes a strict comparison wihtout converting the values.

## Part 1b #16
    check file part1b-question16.js

## Part 1b #17
    When calling modifyArray([1,2,3], doSomething), the result will be [2, 4, 6]. This is because for each element in the array [1,2,3], modifyArray will add to a new array newArr at index i the result from doSomething when passing in the element from index i in [1,2,3].

## Part 1b #18
    check file part1b-question18.js

## Part 1b #19
    1324