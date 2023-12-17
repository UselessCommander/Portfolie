// Vent på, at DOM'en er klar før kørsel af JavaScript.
document.addEventListener('DOMContentLoaded', function() {
  
  // Tilføj klik-hændelse til '.burger' for mobil-menu toggling.
  document.querySelector('.burger').addEventListener('click', function() {
    // Toggle 'active' klassen på '.nav-menu' for at styre menuvisning.
    document.querySelector('.nav-menu').classList.toggle('active');
  });
});

// En anden DOMContentLoaded hændelse for at animere '.hero-container'.
document.addEventListener("DOMContentLoaded", function() {
  // Animer '.hero-container' med GSAP: flyt til x: 0, gør synlig, varighed på 2s.
  gsap.to(".hero-container", {
    x: 0,
    opacity: 1,
    duration: 2, 
    ease: "circ.out" 
  });
});