// Fonction pour remplacer les occurrences de 'X' par '🐦'
// This function replace every 'X' by '🐦'
function replaceXWithBird() {
  const allElements = document.querySelectorAll('span, p');
  for (const element of allElements) {
    element.innerHTML = element.innerHTML.replace(/X/g, '🐦');
  }
  setTimeout(replaceXWithBird, 5000); // Cette ligne permet d'exécuter cette fonction toutes les 5 secondes | This line execute the function every 5 secondes.
}

replaceXWithBird();

