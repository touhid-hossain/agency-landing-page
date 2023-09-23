// Side Menu
const sideNav = document.querySelector('.sidenav');
M.Sidenav.init(sideNav, {});


// SLider
const slider = document.querySelector('.slider');
M.Slider.init(slider, {
    indicators: false,
    height: 500,
    transition: 500,
    interval: 6000
});


// Autocomplete Searchbar
const ac = document.querySelector('.autocomplete');
M.Autocomplete.init(ac, {
    data: {
        "Aruba":null,
        "Cancun Mexico":null,
        "Hawaii":null,
        "Florida":null,
        "California":null,
        "jamaica":null,
        "Europe":null, 
        "Mipur-2":null, 
    }
});


// Photo Gallery Section

const mb = document.querySelectorAll('materialboxed');
M.Materialbox.init(mb, {});


// Scrollspy
const ss = document.querySelectorAll('.scrollspy');
M.ScrollSpy.init(ss, {

});



// Floating action button

const fb = document.querySelectorAll('.fixed-action-btn');
M.FloatingActionButton.init(fb, {

});