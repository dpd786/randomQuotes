$(document).ready(function () {
    
    $("#getMessage").on("click", function () {
        $.getJSON("randomQuotes.json", function (json) {
            var text = "";
            var randomPick = Math.floor(Math.random() * json.length);
            
            json = json.filter(function (val) {
                return (val.id === randomPick);
            });
            
            json.forEach(function (val) {
                var keys = Object.keys(val);
                text += "<div class = 'programming'>";
                text += "<strong>" + "\"" + val.quote + "\"" + "</strong>";
                text += "</div><br>";
            });
        
            $(".message").html(text);
        });
        
        $(".twitter-share-button").attr("href", 'https://twitter.com/intent/tweet?text=' + myquote);
    });
    
    
    
});