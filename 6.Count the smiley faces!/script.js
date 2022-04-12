function countSmileys(arr) {
    let face = 0
    if (arr.length ===0) {
      return face
    } else {
      for (const faceString of arr) {
        if (faceString[0] == ':'|| faceString[0] == ';') {
              if (faceString.length == 2) {
                if (faceString[1] == ')'|| faceString[1] == 'D') {
                  face++
                } 
              } else {
                if (faceString[1] == '-'|| faceString[1] == '~') {
                  if (faceString[2] == ')'|| faceString[2] == 'D') {
                    face++
                  }
                }
              }
            }
      }
      return face
    }
  }