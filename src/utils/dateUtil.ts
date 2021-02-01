export const getTimeFromISODateString = (date: string) => {
  const defValue = "00:00:00";
  if (!date) {
    return defValue;
  }
  const parts = date.split("T");
  if (parts.length === 1) {
    return defValue;
  }
  return parts[1];
};

export const formatDate = (date: Date) => date.toLocaleDateString("en-GB", {
  day: "2-digit",
  month: "2-digit",
  year: "2-digit",
});
