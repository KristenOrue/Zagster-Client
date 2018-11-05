
const BASE_URL = "http://zagster-service.herokuapp.com"
$(updateView)

function updateView() {
    $.getJSON(BASE_URL + "/rides/count", updateRideCount)
  alert("hopethisworks!")
}

function updateRideCount(data) {
    numberOfRides = data.count
    $("h2#rideCount").html(numberOfRides)
}