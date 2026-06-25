export const getNotifications = async () => {
  const response = await fetch(
    "http://localhost:5000/notifications"
  );

  return await response.json();
};