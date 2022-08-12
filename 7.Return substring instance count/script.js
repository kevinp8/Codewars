function solution(fullText, searchText){
    let arr = fullText.split(searchText)
    return arr.length - 1
}