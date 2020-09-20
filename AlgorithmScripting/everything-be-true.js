function truthCheck(collection, pre) {
  return collection.every((d,i) => {
      return pre in d ? Boolean(d[pre]) : false;
  });
}
truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex");
