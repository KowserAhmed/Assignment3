// Convert Kilometer to Meter
function kilometerToMeter(kilo)
{
    var multiplication=0;

    if(kilo>=0){
        multiplication=kilo*1000;

    }
    return multiplication;
}

var result=kilometerToMeter(120);
console.log(result);

// budget calculator
function budgetCalculator(clock , phone , laptop)
{
    let sum=0;
    if(clock>=0)
    {
        sum=sum+clock*50;
    }
    if(phone>=0)
    {
        sum=sum+ phone*100;
    }
    if(laptop>=0)
    {
        sum=sum+laptop*500;
    }

    return sum;
}

var result=budgetCalculator(10,10,10);
console.log(result);

// Hotel cost calculate
function hotelCost(day)
{
    let total=0;
    if(day>0 && day<=10)
    {
        total=day*100;      
    }
   if(day<=20)
   {
       total=(100*10)+(day-10)*80;
   }
   if(day>20)
   {
       total=(100*10)+(10*80)+((day-20)*50);
   }
   return total;
}
var totalCost=hotelCost(25);
console.log(totalCost);

// print the longest word in an array

function megaFriend(name)
{
    var longestName='';
    for(var i=0;i<name.length; i++)
    {
        if(name[i].length>longestName.length)
        {
            longestName=name[i];

        }
    }
    return longestName;

}
var string=["jui" , "Karim" , "john" , "herry" ,"sinthia"]
let longestWord=megaFriend(string);
console.log(longestWord);