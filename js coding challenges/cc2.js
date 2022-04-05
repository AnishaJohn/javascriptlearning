// Function definition
function calcScore(a, b, c, d) {
    var sumationScore = a + b + c;
    return sumationScore / d;
}


var johnScore, mikeScore, maryScore;
// calling function called as function declaration
johnScore = calcScore(89, 200, 103, 3);
mikeScore = calcScore(119, 100, 123, 3);
maryScore = calcScore(97, 134, 105, 4);

console.log('johnScore : ' + johnScore);
console.log('mikeScore : ' +  mikeScore);
console.log('maryScore : ' +  maryScore);


/* if (johnScore > mikeScore)
{
    console.log('johnteam score\'s ' + johnScore +  ' is highest ' );
}
else if (mikeScore > johnScore)
{
    console.log('miketeam score\'s ' + mikeScore + ' is highest ' ); 
}
else
{
    console.log('The match is draw');
}
(johnScore > mikeScore) ? console.log('johnScore : ' + johnScore ) :  console.log('mikeScore : ' +  mikeScore); 




johnScore = (89  + 120 + 103) / 3; // 104
mikeScore = (116 + 94 + 123) / 3;  // 111
maryScore = (97 + 134 + 105) / 3;  //112 
*/



if (johnScore > mikeScore &&  johnScore > maryScore)
{
    console.log('johnteam score\'s ' + johnScore +  ' is highest ' );
}
else if (mikeScore > johnScore && mikeScore > maryScore)
{
    console.log('miketeam score\'s ' + mikeScore + ' is highest ' ); 
}
else if (maryScore > johnScore && maryScore > mikeScore)
{
    console.log('mary score\'s ' + maryScore + ' is highest ' ); 

}
else
{
    console.log('The match is draw');
}