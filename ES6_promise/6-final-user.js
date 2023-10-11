import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

async function handleProfileSignup(firstName, lastName, fileName) {
  try {
    const userResult = await signUpUser(firstName, lastName);
    const photoResult = await uploadPhoto(fileName);

    return [
      { status: 'fulfilled', value: userResult },
      { status: 'fulfilled', value: photoResult },
    ];
  } catch (error) {
    return [
      { status: 'rejected', value: error.message },
      { status: 'rejected', value: `Error: ${fileName} cannot be processed` },
    ];
  }
}

export default handleProfileSignup;
