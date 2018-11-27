
const BASE_URL = "https://zagster-service.herokuapp.com"
$(updateView)
//Arrays to hold data points pulled from JQUERY

function updateView() {
$.getJSON(BASE_URL + "/rides/count", updateridecount);
$.getJSON(BASE_URL + "/rides/count/per_year", displayAnnualChart);
//displayMonthlyChart();
}

function updateridecount(data) {
    numberOfRides = data.count
    $("h2#ridecount").html(numberOfRides)
}
function displayAnnualChart(data) {

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


function printData(data) {


}