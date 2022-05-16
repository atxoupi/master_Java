function computePower(num, exponent) {
  // your code here
  let elevate=1;
  for(let i=exponent;i>0;i--){
    elevate*=num;
  }
  return elevate;
}
