$.get("http://ipinfo.io", function (response) {
    $("#country").html("living in "+response.country);
}, "jsonp");