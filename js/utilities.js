/**
 * Gets the raw string value of an input field by its ID
 */
function getInputValueById(id) {
  return document.getElementById(id).value.trim();
}

/**
 * Gets the numerical value of an input field by its ID
 */
function getInputNumberById(id) {
  const value = document.getElementById(id).value;
  return parseFloat(value) || 0;
}

/**
 * Gets the inner text element as a number
 */
function TextElementValueById(id) {
  const textValue = document.getElementById(id).innerText;
  return parseFloat(textValue) || 0;
}
