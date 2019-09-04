// Return a string with each first word capitalized and rest are lower case.
function titleCase(str) {
  let newStr = str.toLowerCase()
              .split(" ")
              .map(word => word.charAt(0).toUpperCase() + word.slice(1))
              .join(" ");
  return newStr;
}

function titleCaseReg(str) {
	return str.toLowerCase().replace(/(^|\s)\S/g, (L)=>L.toUpperCase());
}