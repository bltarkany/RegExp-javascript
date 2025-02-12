// regex expression to match the pattern
/* the following are a list of previously wrritn regex expressions */

/* 
    match a string tht begins and ends with the same vowel, 
    all lowercase characters,
    and at least 3 characters long
*/
const regex = /^([aeiou]).*\1$/;
const regexalt = /^(a|e|i|o|u)([a-z]{1,})?\1$/;