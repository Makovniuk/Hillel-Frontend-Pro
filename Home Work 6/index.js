//---------------------ДЗ 6---------------------------------//

birthYear = prompt('What is your year of birth?');
cityOfLive = prompt ('What city do you live?');
favoriteSport = prompt('What is your favorite sport?');
currentYear =new Date().getFullYear()
userAge = currentYear - birthYear;
//------------------------Год рождения---------------------//
if (!birthYear) {
    result1 =('Too bad you didn\'t want to enter your birth year!');
} else { 
    result1 =(`Hello! You are ${userAge} years old!`); 
}

// ----------------------Город проживания-------------------//
if (!cityOfLive) {
    result2 =('Too bad you didn\'t want to enter your city!');
} else if (cityOfLive.toLowerCase()==='київ') {
    result2 =('You live in the capital of Ukraine!'); 
} else if (cityOfLive.toLowerCase()==='лондон') {
    result2 =('You live in the capital of Great Britain!'); 
} else if (cityOfLive.toLowerCase()==='вашингтон') {
    result2 =('You live in the capital of of USA!'); 
} else  {
    result2 =(`You live in ${cityOfLive}!`); 
}

//-------------------Любимый вид спорта------------------------------//
if (!favoriteSport) {
    result3 =('Too bad you didn\'t want to enter your favorite sport!');
} else if (favoriteSport.toLowerCase()==='бокс') {
    result3 =('Cool! Do you want to be Mike Tyson?'); 
} else if (favoriteSport.toLowerCase()==='бег') {
    result3 =('Cool! Do you want to be Usain Bolt?'); 
} else if (favoriteSport.toLowerCase()==='плавание') {
    result3 =('Cool! Do you want to be Michael Fred Phelps II?'); 
} else  {
    result3 =(`Your favorite sport is ${favoriteSport}!`); 
}

alert(`${result1} ${result2} ${result3}`)
