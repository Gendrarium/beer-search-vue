export const getUser = async () => {
  try {
    const response = await fetch(
      'https://random-data-api.com/api/users/random_user'
    );
    if (response.status === 200) {
      const json = await response.json();
      return json;
    } else {
      throw new Error('Ошибка');
    }
  } catch (e) {
    return e;
  }
};

export const getBeer = async () => {
  try {
    const response = await fetch(
      'https://random-data-api.com/api/beer/random_beer'
    );
    if (response.status === 200) {
      const json = await response.json();
      return json;
    } else {
      throw new Error('Ошибка');
    }
  } catch (e) {
    return e;
  }
};
