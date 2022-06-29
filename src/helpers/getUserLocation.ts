export const getUserLocation = async(): Promise<[number, number]> => {
  return new Promise( (resolve, reject) => {
      navigator.geolocation.getCurrentPosition(
        ({coords}) => {
          console.log(coords);
          resolve([coords.longitude, coords.latitude])
        },
        (err) => {
          alert('Couldn\'t get geolocation.');
          console.log(err);
          reject();
        }
      );
  });
}