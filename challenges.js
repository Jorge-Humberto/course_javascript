'use strict';

///////////////////////////
// CODING CHALLENGE #1
///////////////////////////
/* function calcAverage(score01,score02,score03){
    return (score01+score02+score03) / 3;
}

const avgDolphins = calcAverage(44,23,71);
const avgKoalas = calcAverage(65,54,49);

function checkWinner(avgDolphins, avgKoalas){
    if(avgDolphins >= (2*avgKoalas)){
        return console.log(`Dolphins win ${avgDolphins} vs ${avgKoalas}`);
    }else if(avgKoalas >= (2*avgDolphins)){
        return console.log(`Koalas win ${avgKoalas} vs ${avgDolphins}`);
    }else{
        return console.log('No one wins! 😥');
    }

}

checkWinner(avgDolphins,avgKoalas); */

//////////////////////////
// TEACHER SOLUTION
//////////////////////////

/* const calcAverage = (a,b,c) => (a + b + c) / 3;
console.log(calcAverage(3,4,5));

// Test 1
let scoreDolphins = calcAverage(44,23,71);
let scoreKoalas = calcAverage(65,54,49);
console.log(scoreDolphins,scoreKoalas);

const checkWinner = function(avgDolphins,avgKoalas){
    if(avgDolphins >= 2 * avgKoalas){
        console.log(`Dolphins win (${avgDolphins} vs ${avgKoalas})`);
    }else if(avgKoalas >= 2 * avgDolphins){
        console.log(`Koalas win (${avgKoalas} vs ${avgDolphins})`);
    }else{
        console.log('No team wins...');
    }
}
checkWinner(scoreDolphins,scoreKoalas);

checkWinner(576,111);

// Test 2
scoreDolphins = calcAverage(85,54,41);
scoreKoalas = calcAverage(23,34,27);
console.log(scoreDolphins,scoreKoalas);
checkWinner(scoreDolphins,scoreKoalas); */

///////////////////////////
// CODING CHALLENGE #2
///////////////////////////
/* const calcTip = function(bill){
    if(bill >= 50 && bill <= 300){
        return bill = bill * 0.15;
    }else{
        return bill * 0.20;
    }
}

console.log(calcTip(100));

const bills = [125,555,44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
const total = [bills[0]+tips[0], bills[1]+tips[1], bills[2]+tips[2]];

console.log(bills);
console.log(tips);
console.log(total); */

//////////////////////////
// TEACHER SOLUTION
//////////////////////////
const calcTip = function(bill){
    return bill >= 50 && bill <= 300 ? bill * 0.5 : bill * 0.2;
}

const bills = [125,555,44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
const totals = [bills[0]+tips[0], bills[1]+tips[1], bills[2]+tips[2]];
console.log(bills,tips,totals);