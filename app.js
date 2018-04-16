var tempC;
var tempF;

$(document).ready(function getPosition() {

  var location = "http://ip-api.com/json";

  $.getJSON(location, function(json) {

    var lat = json.lat;
    var lon = json.lon;

    //hämta data från öppet väder API
    $.getJSON("http://api.openweathermap.org/data/2.5/weather?lat=" + lat + "&lon=" + lon + "&APPID=d934a70081a5cef84dd9dcbf3c0412ed", function(json) {

      var country = json.sys.country;
      var town = json.name;
      var location = town + ", " + country;
      $("#location").html(location);

      var weather = json.weather[0].description;
      $("#weather").html(weather);

      var tempK = json.main.temp;
      tempC = Math.round((tempK - 273.15));
      tempF = Math.round(tempC * 1.8 + 32);
      $("#temp").html(tempC);

      // bytta temparatur
      $("#fahrenheit-btn").on("click", function() {
        $("#fahrenheit-btn").is(":checked");
        $("#temp").html(tempF);
      });
      $("#celsius-btn").on("click", function() {
        $("#celsius-btn").is(":checked");
        $("#temp").html(tempC);
      });

      // byta icon
      if (tempC <= 10) {
        $(".img-main").attr("src", "http://recodenow.com/wp-content/uploads/2017/03/hat.png");
        $("#img-cap").css({
          opacity: 1
        });
      } else if (tempC > 10 && tempC <= 20) {
        $(".img-main").attr("src", "http://recodenow.com/wp-content/uploads/2017/03/jacket.png");
        $("#img-jacket").css({
          opacity: 1
        });
      } else if (tempC > 20 && tempC <= 30) {
        $(".img-main").attr("src", "http://recodenow.com/wp-content/uploads/2017/03/t-shirt.png");
        $("#img-shirt").css({
          opacity: 1
        });
      } else if (tempC > 30) {
        $(".img-main").attr("src", "http://recodenow.com/wp-content/uploads/2017/03/shorts.png");
        $("#img-shorts").css({
          opacity: 1
        });
      }

    });
  })

});






