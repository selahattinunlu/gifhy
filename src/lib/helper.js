export const dateFormat = (dateString) => {
  const now = new Date();
  const date = new Date(dateString);
  const nowTimestamp = now.getTime();
  const timestamp = date.getTime();

  const difference = nowTimestamp - timestamp;
  const minutes = Math.round(difference / 1000 / 60);

  if (minutes <= 1) {
    return 'Just now';
  }

  if (minutes < 60) {
    return `${minutes} mins ago`;
  }

  const hours = Math.round(minutes / 60);

  if (hours < 24) {
    return `${hours} hours ago`;
  }

  const day = date.getDate();
  const month = date.toLocaleString('en-us', {month: 'long'});
  const year = date.getFullYear();
  const hour = String(date.getHours()).padStart(2, 0);
  const minute = String(date.getMinutes()).padStart(2, 0);

  let targetDateString = `${day} ${month}`;

  if (year != now.getFullYear()) {
    targetDateString += `, ${year}`;
  }

  targetDateString += ` at ${hour}:${minute}`;

  return targetDateString;
};
