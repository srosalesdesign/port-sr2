
 $(function () { // wait for document ready

  // init
 var controller = new ScrollMagic.Controller();
   

    // Create scenes in jQuery each() loop
$("section").each(function() {
  var image = $(this).find(".main-image");
  var title = $(this).find(".title");
  var cat = $(this).find(".project-category");

  var tl = new gsap.timeline();
  
  tl.from(image, 1, { opacity: 0, y: 100 });
  tl.from(title, .65, { opacity: 0, y: 25});
  tl.from(cat, .3, { opacity: 0, x: -50});

  
  var scene = new ScrollMagic.Scene({
    triggerElement: this,
    triggerHook: 0.15
  })
    .setTween(tl)
    .addIndicators()
    .addTo(controller);
});
  
  });
