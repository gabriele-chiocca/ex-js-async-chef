async function getChefBirthday(id) {
  const responseRicetta = await fetch(` https://dummyjson.com/recipes/${id}`);

  const ricetta = await responseRicetta.json();

  const userId = ricetta.userId;

  console.log(userId);

  return ricetta;
}

getChefBirthday(1);
