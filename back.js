// Side Menu
const sideNav = document.querySelector('.sidenav');
M.Sidenav.init(sideNav, {});

// Slider
const slider = document.querySelector('.slider');
M.Slider.init(slider, {
    indicators: false,
    height: 500,
    transition: 500,
    interval: 6000
  });

// Scrollspy
const ss = document.querySelectorAll('.scrollspy');
M.ScrollSpy.init(ss, {});

// Material Boxed
const mb = document.querySelectorAll('.materialboxed');
M.Materialbox.init(mb, {});

// Auto Complete
// const ac = document.querySelector('.autocomplete');
// M.Autocomplete.init(ac, {
//     data: {
//       "Traditional Dresses": null,
//       "Tradtional Wedding Dresses": null,
      
//       "Matric Dance Dress": null,
      
      
//       "Ndebele": null,
//     }
//   });

  // Auto Complete
const ac = document.querySelector('.autocomplete');
M.Autocomplete.init(ac, {
  data: {
    "Traditional Dresses": "/xhosa-page",
    "Tradtional Wedding Dresses": "/pedi-page",
    "Jackets": "/jackets-page",
    "Matric Dance Dress": "/matric-dance-dress-page",
  },
  onAutocomplete: function (selectedOption) {
    const selectedPage = M.Autocomplete.getInstance(ac).options.data[selectedOption];
    if (selectedPage) {
      window.location.href = selectedPage;
    }
  }
});
