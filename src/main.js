function scrollAppear() {
  var sectionOne = document.getElementById("intro-card");
  var sectionTwo = document.getElementById("feature-card");
  var sectionThree = document.getElementById("contact");

  var introPosition = sectionOne.getBoundingClientRect().top;
  var featurePosition = sectionTwo.getBoundingClientRect().top;
  var contactPosition = sectionThree.getBoundingClientRect().top;

  var screenPosition = window.innerHeight / 2;

  if (featurePosition < screenPosition && featurePosition > 0) {
    sectionTwo.classList.add("appear-card");
  }

  if (contactPosition < screenPosition && contactPosition > 0) {
    sectionThree.classList.add("appear-card");
  }
}
window.addEventListener("scroll", scrollAppear);
