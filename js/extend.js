// A class for extending JS functionality

//Name: padLeft
//Description: Pads a string to a set amount of character using defined characters
//Usage: String.padLeft(character[s], integer)
//Usage Examples:
//"string".padLeft('0', 15);
//"string".padLeft('0a', 15);
String.prototype.padLeft = function (char, length) {
    if (typeof char === "string" && typeof length === "number" && length >= 1) {
        var tempString = "";
        var loops = Math.floor((length - this.length) / char.length);
        for (var i = 0 ; i < loops; i++) {
            tempString += char;
        }
        var curLength = this.length + tempString.length;
        if (curLength < length) {
            tempString += char.substring(0, (length - curLength));
        }
        return tempString + this;
    } else {
        return this.toString();
    }
};

//Name: padRight
//Description: Pads a string to a set amount of character using defined characters
//Usage: String.padRight(character[s], integer)
//Usage Examples:
//"string".padRight('0', 15);
//"string".padRight('0a', 15);
String.prototype.padRight = function (char, length) {
    if (typeof char === "string" && typeof length === "number" && length >= 1) {
        var tempString = "";
        var loops = Math.floor((length - this.length) / char.length);
        for (var i = 0 ; i < loops; i++) {
            tempString += char;
        }
        var curLength = this.length + tempString.length;
        if (curLength < length) {
            tempString += char.substring(0, (length - curLength));
        }
        return this + tempString;
    } else {
        return this.toString();
    }
};

//Name: perfTest
//Description: Allows for easy performance testing of functions returning time taken in milliseconds (less is better) or the amount of executions per second (more is better). The specified function can ran multiple times for performance testing smaller functions. You can also optionally pass the object the function is to be called on.
//Usage: Function.perfTest(timesToExecute, executionObject, returnExecutionsPerSecond, arg1, arg2, arg3...)
//Usage Example:
//var myFunc = function(input1, input2);
//myFunc.perfTest(1, null, false, "input1", "input2"); //will run once and display the time it took in ms
//myFunc.perfTest(10, null, true, "input1", "input2"); //will run 100 times and display how many times it can run per second.
//var myArray = [];
//myArray.push.perfTest(10, myArray, true, "value"); //will insert the string "value" 10 times into "myArray" and display how many times it can run per second.
Function.prototype.perfTest = function (loops, obj, returnExecutionsPerSecond) {
    var args = [].splice.call(arguments, 3);
    var start = new Date();
    for (var i = 0; i < loops; i++) {
        this.apply(obj, args);
    }
    var end = new Date();
    var timeTaken = end - start;
    if (returnExecutionsPerSecond) {
        return Math.floor((1000 / timeTaken) * loops);
    } else {
        return timeTaken;
    }
};

//Name: isNumeric
//Description: Checks to see if the input is a number.
//Usage: isNumeric(input); //returns true.
//Usage Example: 
//isNumeric(12); //returns true.
//isNumeric("12"); //will also return true due to automatic casting.
//isNumeric("test"); //returns false.
var isNumeric = function (number) {
    return (!isNaN(number) && isFinite(number));
}

//Name: replaceChar
//Description: Allows replacement of a character at the specified index in a string
//Usage: String.replaceChar(char, index)
//Usage Example:
//'texting'.replaceChar('s', 2); //will results in 'testing'

String.prototype.replaceChar = function(char, index) {
    var str = this.split("");
    str[index] = char;
    return str.join("");
}

String.prototype.replaceChars = function (char, startIndex, length) {
    if (startIndex < this.length && startIndex + length <= this.length) {
        var returnValue = this;
        for (var i = startIndex; i < startIndex + length; i++) {
            returnValue = returnValue.replaceChar(char, i);
        }
        return returnValue
    }
    return this;
}

String.prototype.indicesOf = function (searchString) {
    var startPoint = 0;
    var result = -1;
    var indices = [];
    while ((result = this.indexOf(searchString, startPoint)) > -1) {
        indices.push(result);
        startPoint = result + searchString.length + 1;
    }
    return indices;
}