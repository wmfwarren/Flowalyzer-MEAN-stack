"usestrict";

module.exports = (word) => {
  return word.replace(/[.,\/#!$%\^&\*;'":{}=\-_`~()]/g,"").toLowerCase();
}
