function alphabetSort(message) {
  let arr = message.split('')
  arr.sort((a, b) => {
    return a.charCodeAt() - b.charCodeAt()
  })
  return arr.join('')
}
alphabetSort('hello'); // should return 'ehllo'