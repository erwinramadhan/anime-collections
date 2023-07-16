export const convertMinutesToString = (minutes: number) => {
  if (typeof minutes !== 'number' || isNaN(minutes)) {
    return 'Invalid input';
  }

  const hours = Math.floor(minutes / 60);
  const remainingMinutes = minutes % 60;

  const hourString = hours > 0 ? `${hours}h ` : '';
  const minuteString = remainingMinutes > 0 ? `${remainingMinutes} min` : '';

  return hourString + minuteString;
}

export const getRating = (averageScore: number) => {
  const ratingValue = averageScore / 10
  const maxRating = 10
  const result = `${ratingValue} / ${maxRating}`
  
  return result
}