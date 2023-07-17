export const parseManaCostAndText = (manaCostAndText: string) =>
  manaCostAndText
    ? manaCostAndText.split('\n').map((line) => line.split('|').filter(Boolean))
    : [];