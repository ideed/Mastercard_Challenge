//Declaring array for integers.
var intArray = [];
//Adding and displaying integer arrays.
function addInteger(){
  var integerAdded = document.getElementById('noInput').value;
  if(integerAdded==null||integerAdded=="")//Checking for integer values
  {
    alert("Please enter a value.");//Allerting about no value inputted
  }
  else if(integerAdded % 1 == 0)//Correct value inputted
  {
    alert("Success! Integer added.");//Alerting user on success.
    intArray.push(integerAdded);//Adding int to array.
    document.getElementById('arrayOutput').innerHTML = "";//Clearing input box.
    for(i = 0; i < intArray.length; i++)//Loop displaying current Array
    {
      document.getElementById('arrayOutput').innerHTML = document.getElementById('arrayOutput').innerHTML+" "+intArray[i];//Adding element to innerHTML
    }
    commonInteger()//Calling commonInteger function
    document.getElementById('noInput').value = "";//Clearing input box
  }
  else//If an decimal value gets inputted
  {
    alert("Only integer values can be added to the array.");//Allerting to user about invalid value.
    document.getElementById('noInput').value = "";//Clearing input box
  }
}
// Finding common integer algorithm.
function commonInteger(){
  var mf = 0; //Default maximum frequency
  var m = 0;  //Counter
  var commonInt;
  for(i = 0; i < intArray.length; i++)//Looping through next elements in list
  {
    for (var j=i; j<intArray.length; j++)//Looping in array to compare the frequency of current element.
        {
          if (intArray[i] == intArray[j])//See if element occurs again in the array
          m++;//Increment counter if it does
          if (mf<m)//Compare current items frequency with maximum frequency
          {
            mf=m;//If m>mf store m in mf for upcoming elements
            commonInt = intArray[i];// Store the current element
          }
        }
      m=0;// Make counter 0 for next element
  }
  document.getElementById('commonNumberOutput').innerHTML = commonInt;//Displaying common integer in array
}

function reverseStringIter(str)//Iteratively reversing string function
{
    var newString = "";//Declaring new string value
    for (var i = str.length - 1; i >= 0; i--)//Reverse loop going through the inputted string
    {
        newString += str[i];//Adding element at orginal index to the new string
    }
    return newString;//Returning the new string created from function
}

function reverseStringRec(str)//Recursively reversing string function
{
  if (str === "")//Checking if the string is empty
  {
    return "";//Returning it empty
  }else//In case it is not null
  {
    return reverseStringRec(str.substr(1)) + str.charAt(0);//Calling the method again and adding the sub string and the charather at index 0 into the argument
  }
}

function stringSubmitted()//Reversing strings both iteratively and recursively.
{
  var stringAdded = document.getElementById('textSubmitted').value;// Gathering string value.
  document.getElementById('stringOutputIter').innerHTML = reverseStringIter(stringAdded);//Iteratively reversing string function called.
  document.getElementById('stringOutputRec').innerHTML = reverseStringRec(stringAdded);//Recursively reversing string function called.
}
