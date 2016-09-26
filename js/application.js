// NOTE: Closure for extra protection
(function () {
    // NOTE: Here's the initial data. Again: don't worry about persistence :)
    data = [
      { name: "Mark-Paul Gosselaar", photo_url: "" },
      { name: "Delta Burke", photo_url: "img/avatars/delta.png" },
      { name: "Alf", photo_url: "img/avatars/alf.png" },
      { name: "Jaleel White", photo_url: "img/avatars/jaleel.png" },
      { name: "Ralph Macchio", photo_url: "img/avatars/ralph.png" },
      { name: "Candace Cameron", photo_url: "img/avatars/candace.png" },
      { name: "Patrick Duffy", photo_url: "img/avatars/pduff.png" },
      { name: "Arnold Schwartzengger", photo_url: "img/avatars/arnold.png" }
    ];

    $(document).on('submit', function (e) {
        e.preventDefault();
        $('.section').prepend(generateCard(e.target["name"].value, e.target["photo_url"].value));
        e.target.reset();
    });

    $(document).ready(function () {
        for (var i = 0; i < data.length; i++) {
            $('.section').prepend(generateCard(data[i].name, data[i].photo_url));
        }
    });

    function generateCard(text, url) {
        var returnValue = '';

        if (url === "") url = "img/default.jpg";

        // NOTE: I'm aware that I don't add/delete the person from the data data-structure. I didn't want to change the format. There is no unique identifier on it, thought you could do a delete with out it.  Just as I have below. I didn't think keeping the "data" variable up-to-date was important, as we didn't care about persisting the data.
        // NOTE: String concatination isn't great and I don't verify the input values. Something to improve upon.
        returnValue = '<div class="box">';
        returnValue += '    <img src="' + url + '"></img>';
        returnValue += '    <label>' + text + '</label>';
        returnValue += '    <img src="img/close.jpg" class="close" onclick="this.parentElement.parentElement.removeChild(this.parentElement);"></img>';
        returnValue += '</div>';

        return returnValue;
    }
})();