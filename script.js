// Wait for the page to load before grabbing DOM elements and storing as variables
window.onload = function(){

  const explanation = document.getElementById('explanation');
  const title = document.getElementById('title');
  const description = document.getElementById('description');
  var titleString = null;
  var descriptionString = null;

  var keywords = document.getElementsByClassName("keyword");
  var buttons = document.getElementsByTagName("button");
  var buttonsCount = buttons.length;
  for (var i = 0; i <= buttonsCount; i += 1) {
      buttons[i].onclick = function(e) {
        // Get the id of the button that was clicked
          var buttonId = this.id;
          // Get the last character of the id
          var expr = buttonId.charAt(buttonId.length-1);
          // Store the content as variables according to which button was clicked
          switch (expr) {
            case '1':
              titleString = "Quicker than a rocket";
              descriptionString = "Okay, so maybe it's not quicker than a rocket. React gives you that instant go you need to do mile atfer mile, run after run.";
              break;
            case '2':
              titleString = "Soooo squishy";
              descriptionString = "React is soft and squishy, yet responsive and stable. It gives you the cushioning you need to hit mile after mile.";
              break;
            case '3':
              titleString = "Weaved upper";
              descriptionString = "A new Flyknit weave technology with an elevated fit and feel featuring a lighter and smoother experience that molds to your foot.";
              break;
            case '4':
              titleString = "Just like a kangaroo";
              descriptionString = "Ridiculously responsive. Nike React foam bounces the energy of your stride right back at you, and keeps bouncing right back at you even after hundreds of miles.";
              break;
            default:
              titleString = "Just like a kangaroo";
              descriptionString = "Ridiculously responsive. Nike React foam bounces the energy of your stride right back at you, and keeps bouncing right back at you even after hundreds of miles.";
              break;
          }
          // Remove the green from all keywords
          revertKeyword(keywords);
          // Add the green keywords back onto the corresponding one
          document.getElementById("keyword-"+expr).className += " green";
          // Set all the custom content
          title.innerHTML = titleString;
          description.innerHTML = descriptionString;
          explanation.style.backgroundImage = "url('images/bg-"+expr+".jpg')";
          // Display the section
          explanation.style.display = "block";
      };
  }

}

// Remove the "green" class from all elements
function revertKeyword(els) {
  for (var i = 0; i < els.length; i++) {
    els[i].classList.remove('green')
  }
}
