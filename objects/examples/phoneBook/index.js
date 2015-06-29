function sizeToWords () {
  for (var i = 0; i < 8; i++) {
    if ( i < 3 ) {
      console.log ( i + " is very little")
    }
    else if ( i < 6) {
      console.log ( i + " is a few")
    }
    else {
      console.log ( i + " is many")
    }
  }
}

sizeToWords()