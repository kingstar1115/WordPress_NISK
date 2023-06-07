$(document).ready(function () {
  // code from https://code.mukto.info/counter-up-with-a-simple-jquery/
  // Create new intersection observer
  var observer = new IntersectionObserver(function (entries, observer) {
    entries.forEach(function (entry) {
      // If the element is in view, start counter animation
      if (entry.isIntersecting) {
        $(entry.target)
          .prop("Counter", 100)
          .animate(
            {
              Counter: $(entry.target).text(),
            },
            {
              duration: 2000,
              easing: "swing",
              step: function (now) {
                $(entry.target).text(Math.ceil(now));
              },
            }
          );
        // Stop observing the element to prevent duplicate animations
        observer.unobserve(entry.target);
      }
    });
  });

  // Observe each .counterup element
  $(".counterup").each(function () {
    observer.observe(this);
  });
});
