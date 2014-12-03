$(function() {
    $("#msg,#user-search-results").hide();
    $.get("/api/v0/stats/", function(data) {
		$("#nicelist-count").text(data.nice_list);
		$("#naughtylist-count").text(data.naughty_list);

        var table = $("#top-offenders tbody");
        for(var i in data.nicest) {
            table.append(
                "<tr><td><img class='top-offender-pic' src='" +
                data.nicest[i].pic +
                "'>" +
                data.nicest[i].name +
                "</td><td><img class='top-offender-pic' src='" +
                data.naughtiest[i].pic +
                "'>" +
                data.naughtiest[i].name +
                "</tr></td>"
            );
        }
	});
    $(':input').keydown(function (e){
        if(e.keyCode == 13){
            search();
        }
    })
    setupWS();
});

function setupWS() {
    a = document.createElement("a");
    a.href = document.URL;
    url = "ws://" + a.hostname + ":9325/ws/";
    websocket = new WebSocket(url);
    websocket.onopen = function(evt) { onOpen(evt) };
    websocket.onclose = function(evt) { onClose(evt) };
    websocket.onmessage = function(evt) { onMessage(evt) };
    websocket.onerror = function(evt) { onError(evt) };
}

function onOpen(e) {
    console.log("websocket opened");
}

function onClose(e) {
    console.log("websocket disconnected");
    $("#msg").fadeOut();
    $("#alert").show().text("reload page");
}

function onMessage(e) {
    var payload = JSON.parse(e.data);
    var tw = $("#msg").clone();

    tw.find(".tweet-text").text(payload['text']);
    tw.find(".tweet-pic").attr("src", payload['user']['profile_image_url']);

    $("#stream").prepend(tw.show());
    var s = $("#stream").children().size();
    if (s > 10) {
        var s = $("#stream").children().last().remove();
    }
}

function onError(e) {
    console.log("websocket connection failure: " + JSON.stringify(e));
}

function search() {
    var name = $("#twitter-name").val();
    $.post(
        "/api/v0/user/",
        JSON.stringify({
            "name": name
        }),
        function(data) {
            var tw = $("#msg").clone();
            tw.find(".tweet-text").text(
                data["Name"]
                +  ": Nice: "    + data["Nice"]
                + ", Naughty: " + data["Naughty"]
            );
            tw.find(".tweet-pic").attr("src", data['Pic']);
            tw.show();
            $("#user-search-results").empty().append(tw).fadeIn(250);
        },
        "json"
    ).fail(function(data) {
        var reason = JSON.parse(data.responseText).reason;
        $("#user-search-results").hide();
        $("#alert").text(reason).show();
    });
}
