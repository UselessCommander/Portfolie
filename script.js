// Vent på at hele DOM'en er indlæst før koden udføres.
document.addEventListener('DOMContentLoaded', function() {
  
  // Tilføj klik-hændelse til '.burger' for at håndtere mobil-menu toggling.
  document.querySelector('.burger').addEventListener('click', function() {
  
    // Toggle 'active' klassen på '.nav-menu' ved klik for at vise/skjule menuen.
    document.querySelector('.nav-menu').classList.toggle('active');
  });
});



document.addEventListener("DOMContentLoaded", function() {
  gsap.to(".hero-container", {
    x: 0,
    opacity: 1,
    duration: 2, 
    ease: "circ.out" 
  });
});
