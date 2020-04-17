var str1="Welcome to Javascript Tutorial, Javascript is a scripting language";

//length - count the total characters 
console.log("Length of String :"+str1.length);

//charAt -give character of given index
var char=str1.charAt(4);
console.log("Character at position 4 :"+char);

//charCodeAt - give unicode of character of given index
console.log("Character unicode at position 4 :"+str1.charCodeAt(4));

//indexOf - gives begining position of specified String
var posOfStr=str1.indexOf("Java");
console.log("Position of Java in Given String :"+posOfStr);
console.log("Position of Java from given position :"+str1.indexOf("Java",20));

//lastIndexOf- Gives last position of specified String 
var lastPosOfStr=str1.lastIndexOf("Java");
console.log("Last Index of Java in String:"+lastPosOfStr); 
console.log("Position of Java given end position :"+str1.lastIndexOf("Java",15));

//search-same as indexOf but second parameter is not allowed
console.log("search gives exact match :"+str1.search("Java"));

//var s1=" Welcome To";
//var s2="Javacsript Tutorial";
var s1="d";
var s2="a";

//concat- It Joins multiple Strings
console.log("Concatnation Of Two Strings :"+s1.concat(" ",s2));

//toUpperCase -convert into capital letter && toLocaleUpperCase
console.log("Upper Case:"+s1.toUpperCase());
console.log("Upper Case With Locale :"+s1.toLocaleUpperCase());

//toLowerCase -convert into small letter && toLocaleLowerCase
console.log("Lower Case :"+"HELLO".toLowerCase());
console.log("Lower Case With Locale :"+"HELLO".toLocaleLowerCase());

//trim -removes the leading & trailing Spaces
console.log("Removes WhiteSpace :"+s1.trim());

//split -splits data into array
console.log("Spilting of String:"+str1.split(" "));

var splitStr=str1.split(" ");
console.log("Find Particular word in string :"+splitStr[2]);

//slice(beg,end)- It gives the Portion of String
console.log("Slice gives part of string:"+str1.slice(6,15));
console.log("Slice from position 9:"+str1.slice(9));
console.log("Slice from position 9:"+str1.slice(-19,-4));

//substring(beg,end) - same as slice but we can not apply negative index
console.log("substring gives portion of String :"+str1.substring(9,19));
console.log("substring gives portion of String :"+str1.substring(20));

//substr(position,length)- It also gives portion of string with specified length,can apply negative index
console.log("substr gives portion of String of given length:"+str1.substr(9,10));
console.log("substr gives portion of String from position:"+str1.substr(9));
console.log("substr with negative index:"+str1.substr(-19));
console.log("substr with negative index of given length:"+str1.substr(-19,10));

//replace- it changes the particular word but it replace only first match for that we use /g for all changes
console.log("replace :"+str1.replace("Javascript","JS"));
console.log("replace with /g global change:"+str1.replace(/Javascript/g,"JS"));
console.log("replace with /i case insensitive:"+str1.replace(/JAVASCRIPT/i,"JS"));
console.log("replace with /ig case insensitive global change:"+str1.replace(/JAVASCRIPT/ig,"JS"));

//repeat -repeat same String with specified count
console.log("repeat same String with count :"+str1.repeat(2))

//startsWith- gives boolean values if starts with specified string
console.log("starts with Welcome :"+str1.startsWith("Welcome to"));

//endsWith- gives boolean values if ends with specified string
console.log("ends with Welcome :"+str1.endsWith("language"));

//match - gives how many matches strings
console.log("Java matches in String :"+str1.match(/ipt/g));

//localeCompare - compare two stings before sorted:-1,after:1,equal:0
console.log("localeCompare :"+s1.localeCompare(s2));