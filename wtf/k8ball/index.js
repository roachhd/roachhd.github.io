var responses =
    ["Sorry, I'm watching TV...",
        "There's no doubt about it!",
        "I wouldn't think so...",
        "Maybe, if you are lucky...",
        "No time soon...",
        "Eventually...",
        "Your life depends on it!",
        "The odds are in your favor!",
        "I'd say so.",
        "Absolutely!"];


function getResponse() {


        $("#response").text(responses[Math.floor((Math.random() * 10))]);
}
