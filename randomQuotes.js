$(document).ready(function () {
    $("#getMessage").on("click", function () {
        $.getJSON("randomQuotes.json", function (json) {
            var html = "";
            var randomPick = Math.floor(Math.random() * 6);
            
            json = json.filter(function (val) {
                return (val.id === randomPick);
            });
            
            json.forEach(function (val) {
                var keys = Object.keys(val);
                html += "<div class = 'programming'>";
                html += "<strong>" + "\"" + val.quote + "\"" + "</strong>";
                
                html += "</div><br>";
            });
            
            $(".message").html(html);
        });
    });
});