
const BASE_URL = "https://zagster-service.herokuapp.com"

var monthlyCounts = [];

$(updateView)
//Arrays to hold data points pulled from JQUERY

function updateView() {
$.getJSON(BASE_URL + "/rides/count", updateridecount);
$.getJSON(BASE_URL + "/rides/count/per_year", displayAnnualChart);

$.when(
    $.getJSON(BASE_URL + "/rides/count/per_month", prepareMonthlyData)
    ).then(
        displayMonthlyChart
        );
}

function updateridecount(data) {
    numberOfRides = data.count
    $("h2#ridecount").html(numberOfRides)
}

function displayAnnualChart(data) {
var ctx = document.getElementById('myChart').getContext('2d');
var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'bar',

    // The data for our dataset
    data: {
        labels: ["2016", "2017", "2018"],
        datasets: [{
            label: "Annual Rides per year",
            backgroundColor: 'rgb(255, 99, 132)',
            borderColor: 'rgb(255, 99, 132)',
            data: [ data['2016'], data['2017'], data['2018'] ],
        }]
    },

    // Configuration options go here
    options: {}
});
 
}


function prepareMonthlyData(data) {
for (var i = 0; i <=3; ++i){
monthlyCounts.push(data[2016] [i] [i+9]);
}
for (var i = 0; i <=11; ++i){
monthlyCounts.push(data[2017] [i] [i+1]);
}
for (var i = 0; i <=9; ++i){
monthlyCounts.push(data[2018] [i] [i+1]);
}
console.log(monthlyCounts);

var ctx = document.getElementById('ridesPerMonthChart').getContext('2d');
var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'bar',

    // The data for our dataset
    data: {
        labels: ['1','2','3','4','5','6','7','8','9','10','11','12'],
        datasets: [{
            label: "Rides Per Month",
            backgroundColor: 'rgb(255, 99, 132)',
            borderColor: 'rgb(255, 99, 132)',
            data: monthlyCounts,
        }]
    },

    // Configuration options go here
    options: {}
});

}
function printData(data) {
    
}
