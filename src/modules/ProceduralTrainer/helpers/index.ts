export const getDayName = (date: Date) => {
  return new Intl.DateTimeFormat("en-US", { weekday: "long" })
    .format(date)
    .toUpperCase();
};

export const getMonthName = (date: Date) => {
  return new Intl.DateTimeFormat("en-US", { month: "long" }).format(date);
};

export const getDayOfMonth = (date: Date) => {
  return date.getDate();
};
