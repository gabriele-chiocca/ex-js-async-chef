async function getChefBirthday(id) {
  const responseRicetta = await fetch(` https://dummyjson.com/recipes/${id}`);

  const ricetta = await responseRicetta.json();

  const userId = ricetta.userId;

  const responseChefInfo = await fetch(`https://dummyjson.com/users/${userId}`);

  const chefInfo = await responseChefInfo.json();

  const dateOfBirthdayChef = chefInfo.birthDate;

  return dateOfBirthdayChef;
}

getChefBirthday(1);
