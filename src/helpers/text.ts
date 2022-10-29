export const highlighKeyWord = (text: string, keyword: string) => {
  const highlightedText = text.replaceAll(
    new RegExp(`${keyword}\\w*\\s`, "ig"),
    `<b>$&</b>`
  );

  return highlightedText;
};
