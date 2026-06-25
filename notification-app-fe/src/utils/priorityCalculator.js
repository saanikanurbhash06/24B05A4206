const weights = {
  Placement: 3,
  Result: 2,
  Event: 1,
};

export const getTopNotifications = (notifications) => {
  return [...notifications]
    .sort((a, b) => {
      if (weights[b.type] !== weights[a.type]) {
        return weights[b.type] - weights[a.type];
      }

      return new Date(b.time) - new Date(a.time);
    })
    .slice(0, 10);
};