// document.getElementById("app").innerHTML = `
// <h1>Hello Parcel!</h1>
// <div>
//   Look
//   <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>
//   for more info about Parcel.
// </div>
// `;

Number.prototype.countDecimals = function() {
  if (Math.floor(this.valueOf()) === this.valueOf()) return 0;
  return this.toString().split(".")[1].length || 0;
};

function toFixed(num, fixed) {
  var re = new RegExp("^-?\\d+(?:.\\d{0," + (fixed || -1) + "})?");
  return num.toString().match(re)[0];
}

function validate(num: number): boolean {
  let result = true;
  if (num < 1001) {
    result = false;
  }
  if (num.countDecimals() > 4) {
    result = false;
  }
  return result;
}

const output = document.getElementById("output");
document.getElementById("clickme").addEventListener("click", (el, ev) => {
  const input = document.getElementById("inputastext").value;
  const inputAsStringTruncated = toFixed(input, 5).replace(",", ".");
  const inputAsFloat = parseFloat(inputAsStringTruncated);
  const isValid = validate(inputAsFloat) ? "OK" : "INVALID";
  // output.innerHTML =
  //   inputAsStringTruncated + "  -- " + inputAsFloat + " --- " + isValid;
  output.innerHTML = `
  <p>input = ${input}</p>
    <p>string = ${inputAsStringTruncated}</p>
    <p>float = ${inputAsFloat}</p>
    <p>valid = ${isValid}</p>
  `;
});
