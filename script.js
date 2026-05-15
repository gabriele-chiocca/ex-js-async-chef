async function getChefBirthday(id) {
  try {
    const responseRicetta = await fetch(`https://dummyjson.com/recipes/${id}`);

    if (!responseRicetta.ok) {
      throw new Error('Ricetta non trovata');
    }

    const ricetta = await responseRicetta.json();

    const userId = ricetta.userId;

    const responseChefInfo = await fetch(
      `https://dummyjson.com/users/${userId}`,
    );

    if (!responseChefInfo.ok) {
      throw new Error('Data non trovata');
    }

    const chefInfo = await responseChefInfo.json();

    const dateOfBirthdayChef = chefInfo.birthDate;

    return dateOfBirthdayChef;
  } catch (error) {
    throw new Error(error);
  }
}

// getChefBirthday(505050)
//   .then((birthday) => console.log('La data di nascita dello chef è:', birthday))
//   .catch((errore) => console.error(errore.message))
//   .finally((messaggio) => console.log('Operazione conclusa'));

(async () => {
  try {
    const birthday = await getChefBirthday(1);

    const formatbirthday = dayjs(birthday).format('DD/MM/YYYY');

    console.log('la data di nascia dello chef è:', formatbirthday);
  } catch (errore) {
    console.error("L'errore è", errore.message);
  }
})();
