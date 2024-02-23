export const truncatedContent = (content, maxLength) => {
  if (content.length <= maxLength) {
    return content;
  }
  return content.slice(0, maxLength) + "...";
};
