//---------------------ДЗ 6---------------------------------//
birthYear = prompt('What is your year of birth?');
cityOfLive = prompt('What city do you live?');
favoriteSport = prompt('What is your favorite sport?');
currentYear = new Date().getFullYear();
userAge = currentYear - birthYear;
//------------------------Год рождения---------------------//
if (!birthYear) {
    answerbBirthYear = ('Too bad you didn\'t want to enter your birth year!');
} else { 
    answerbBirthYear = (`Hello! You are ${userAge} years old!`); 
}
// ----------------------Город проживания-------------------//
if (!cityOfLive) {
    answearCityOfLive = ('Too bad you didn\'t want to enter your city!');
} else if (cityOfLive.toLowerCase()==='київ') {
    answearCityOfLive = ('You live in the capital of Ukraine!'); 
} else if (cityOfLive.toLowerCase()==='лондон') {
    answearCityOfLive = ('You live in the capital of Great Britain!'); 
} else if (cityOfLive.toLowerCase()==='вашингтон') {
    answearCityOfLive = ('You live in the capital of of USA!'); 
} else  {
    answearCityOfLive = (`You live in ${cityOfLive}!`); 
}
//-------------------Любимый вид спорта------------------------------//
if (!favoriteSport) {
    answerFavoritSport = ('Too bad you didn\'t want to enter your favorite sport!');
} else if (favoriteSport.toLowerCase()==='бокс') {
    answerFavoritSport = ('Cool! Do you want to be Mike Tyson?'); 
} else if (favoriteSport.toLowerCase()==='бег') {
    answerFavoritSport = ('Cool! Do you want to be Usain Bolt?'); 
} else if (favoriteSport.toLowerCase()==='плавание') {
    answerFavoritSport = ('Cool! Do you want to be Michael Fred Phelps II?'); 
} else  {
    answerFavoritSport = (`Your favorite sport is ${favoriteSport}!`); 
}

alert(`${answerbBirthYear} ${answearCityOfLive} ${answerFavoritSport}`);

