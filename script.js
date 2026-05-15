async function getChefBirthday(id) {
  try {
    const responseRicetta = await fetch(`https://dummyjson.com/recipes/${id}`);

    const ricetta = await responseRicetta.json();

    const userId = ricetta.userId;

    const responseChefInfo = await fetch(
      `https://dummyjson.com/users/${userId}`,
    );

    const chefInfo = await responseChefInfo.json();

    const dateOfBirthdayChef = chefInfo.birthDate;

    return dateOfBirthdayChef;
  } catch (error) {
    console.error("L'errore è", error.message);
  }
}

// getChefBirthday(505050)
//   .then((birthday) => console.log('La data di nascita dello chef è:', birthday))
//   .catch((errore) => console.error(errore.message))
//   .finally((messaggio) => console.log('Operazione conclusa'));

(async () => {
  try {
    const birthday = await getChefBirthday(1);

    console.log('la data di nascia dello chef è:', birthday);
  } catch (errore) {
    throw new Error("L'errore è questo", errore);
  }
})();
