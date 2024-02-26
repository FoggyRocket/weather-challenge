export const convertDate = (time: number) => {
  const options = {weekday: 'long'};
  const date = new Date(time * 1000);
  const dayName = date.toLocaleDateString('en-US', options);
  return dayName;
};
