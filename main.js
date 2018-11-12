
const BASE_URL = "https://zagster-service.herokuapp.com"
$(updateView)

function updateView() {
    $.getJSON(BASE_URL + "/rides/count", updateridecount)
 
}

function updateridecount(data) {
    numberOfRides = data.count
    $("h2#ridecount").html(numberOfRides)
}


