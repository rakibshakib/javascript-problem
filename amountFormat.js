const formatMoney = (amount) => {
  try {
    const decimalCount = 2;
    const decimal = "."; 
    const thousands = ","
    const negativeSign = amount < 0 ? "-" : "";
    console.log(negativeSign);

    // let i = parseInt((amount = Math.abs(Number(amount) || 0).toFixed(decimalCount))).toString();
    let i = parseInt((Number(amount).toFixed(decimalCount))).toString();
    let j = i.length > 3 ? i.length % 3 : 0;
    console.log(i.length, i.length % 3);
    return (
      negativeSign +
      (j ? i.substr(0, j) + thousands : "") +
      i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + thousands) +
      (decimalCount
        ? decimal +
          Math.abs(amount - i)
            .toFixed(decimalCount)
            .slice(2)
        : "")
    );
  } catch (e) {
    console.log(e);
  }
};
console.log(formatMoney(323800));
console.log(formatMoney(3723800));
console.log(formatMoney(80));
console.log(formatMoney(8000));
