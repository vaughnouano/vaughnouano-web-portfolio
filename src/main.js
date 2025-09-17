function scrollAppear() {
  var wholeSection = document.getElementById("wholeSection");
  var sectionOne = document.getElementById("intro-card");
  var sectionTwo = document.getElementById("feature-card");
  var sectionThree = document.getElementById("contact");

  var main = wholeSection.getBoundingClientRect().top;
  var introPosition = sectionOne.getBoundingClientRect().top;
  var featurePosition = sectionTwo.getBoundingClientRect().top;
  var contactPosition = sectionThree.getBoundingClientRect().top;

  var screenPosition = window.innerHeight / 2;

  if (featurePosition < screenPosition && featurePosition > 0) {
    sectionTwo.classList.add("appear-card");
    setTimeout(function() {
      sectionOne.classList.add("resize-on-scroll");
    }, 400);
    
  }

  if (contactPosition < screenPosition && contactPosition > 0) {
    sectionThree.classList.add("appear-card");
  }
}

window.addEventListener("scroll", scrollAppear);

window.addEventListener('load', function() {
    setTimeout(() => {
        window.scrollTo(0, 0);
    }, 0);
});