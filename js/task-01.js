// ----- 1 ----- //

const allLiRef = document.querySelectorAll(`.item`);
console.log(`Number of categories:`, allLiRef.length);

// ----- 2 ----- //

for (const item of allLiRef) {
  const categoryOfItem = item.querySelector(`h2`);
  const elementsOfItem = item.querySelectorAll(`li`);

  console.log(`Category:`, categoryOfItem.textContent);
  console.log(`Elements:`, elementsOfItem.length);
}
