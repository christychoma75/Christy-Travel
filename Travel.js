//sidenav
var elem = document.querySelector('.sidenav');
var instance = new M.Sidenav(elem);

//slider

var elem = document.querySelector('.slider');
var slider2 = new M.Slider(elem, {
    indicators: false,
    height: 500,
    transition: 500,
    interval: 6000
});

//Autocomplete

const ac = document.querySelector('.autocomplete');
const Autocomplete = new M.Autocomplete(ac, {
    data: {
        "Miami": null,
        "cancun Mexico": null,
        "Dubai": null,
        "London": null,
        "Kinshasa": null,
        "los angeles": null,
        "Jamaica": null,
        "Nairobi": null,
        "Brazzaville": null,
    }
})

//material boxed
document.addEventListener('DOMContentLoaded', function () {
    var elems = document.querySelectorAll('.materialboxed');
     M.Materialbox.init(elems, {});
});