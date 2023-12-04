/**
 * Truncates string to desires length, adding seperator in the middle.<br />
 * Credit to: http://jsfiddle.net/2eUYN/1/
 * @param fullStr {string} - string to be shortened
 * @param strLen {string} - desired string length
 * @param separator {string} - seperator
 * @returns {string}
 */
export const truncate = (
  fullStr: string,
  strLen: number,
  separator?: string
) => {
  if (fullStr.length <= strLen) return fullStr;

  separator = separator || "...";

  const sepLen = separator.length,
    charsToShow = strLen - sepLen,
    frontChars = Math.ceil(charsToShow / 2),
    backChars = Math.floor(charsToShow / 2);

  return (
    fullStr.substring(0, frontChars) +
    separator +
    fullStr.substring(fullStr.length - backChars)
  );
};
