// create days of week array
var days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

// define types of weather
var weather = ["Sunny", "Partly Sunny", "Partly Cloudy", "Cloudy", "Raining", "Snowing", "Thunderstorm", "Foggy"];

// set min and max temps
var maxTemp = 110;
var minTemp = 32;

// cost (to you) of a cup of lemonade
var bakesCost = 0.7;

// array for storing daily temps
var dailyTemp = [];

// listen for order
document.getElementById("OpenTheStand").addEventListener("click", openTheStand);

// make the week's weather
generateWeather();

/**
generates weather for the week
**/
function generateWeather() {
    var weatherToday;
    var tempToday;
    for (var i = 0; i < days.length; i++) {
        weatherToday = weather[Math.floor(Math.random() * weather.length)];
        tempToday = Math.floor(Math.random() * (maxTemp - minTemp) + minTemp);
        dailyTemp[i] = tempToday;
        document.getElementById("7DayWeather").innerHTML += "<div id='" + days[i] + "' class='" + weatherToday + "'><b>Forecast for " + days[i] + ":</b><br><br>" + weatherToday + " and " + tempToday + " degrees.</div>";
    }
}

/**
calculates glasses of lemonade sold
**/
function openTheStand() {
    var bakesSold = 0; // daily
    var totalbakes = 0; // weekly
    var bakesLeft = 0; // left to sell

    // clear out previous results
    resetForm();

    // get input
    var numBake = Number(document.getElementById("numBake").value);
    var bakePrice = Number(document.getElementById("bakePrice").value);


    for (var i = 0; i < days.length; i++) {

        // glasses sold depends on temp and price
        bakesSold = Math.floor(dailyTemp[i] / bakePrice);

        // how many glasses do we have now?
        bakesLeft = numBake - totalbakes;

        // we can't sell more than we have
        if (bakesSold > bakesLeft) {
            bakesSold = bakesLeft;
        }

        // increase the weekly total
        totalbakes = bakesSold + totalbakes;

        // display daily total
        document.getElementById("result").innerHTML += "<p>" + days[i] + ", you sold " + bakesSold + " bake.</p>";

    }

    displayResults(numBake, bakePrice, totalBakes);

}

/**
calculates results and displays a report
**/
function displayResults(weeklyInventory, BakesPrice, weeklySales) {
    // calculate results
    var revenue = weeklySales * bakesPrice;
    var expense = weeklyInventory * BakesCost;
    var leftOver = weeklyInventory - weeklySales;
    var profit = revenue - expense;

    // print out the weekly report
    document.getElementById("result").innerHTML += "<p>You sold a total of " + weeklySales + " Bake this week.</p>";
    document.getElementById("result").innerHTML += "<p>Total revenue: $" + revenue + ".</p>";
    document.getElementById("result").innerHTML += "<p>You have " + leftOver + " Bake left over.</p>";
    document.getElementById("result").innerHTML += "<p>Each bakes costs you $" + Bake + ". Your profit was $" + profit + ".";
}

/**
resets the game so that a new order can be placed
**/
function resetForm() {
    document.getElementById("result").innerHTML = "";

}