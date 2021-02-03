function f(n){
  if(n == 1){
    return 3
  } else {
    return f(n-1) * 2
  }
}


console.log(f(1))
console.log(f(2))
console.log(f(3))
console.log(f(4))
console.log(f(5))
console.log(f(6))