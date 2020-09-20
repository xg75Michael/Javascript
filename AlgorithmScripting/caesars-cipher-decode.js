function rot13(str) {
  return str.split('').map( i => {
    return /[A-Z]/.test(i) ? 
      String.fromCharCode(i.charCodeAt() > 77 ?
        i.charCodeAt() - 13 :
        i.charCodeAt() + 13) :
      i;
  }).join('');
}

rot13("SERR PBQR PNZC");
rot13("SERR CVMMN");
rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT.");