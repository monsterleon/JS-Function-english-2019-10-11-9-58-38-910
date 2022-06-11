function reverseString(message) {
  let res = ''
  for (let i = message.length - 1; i >= 0; i--) {
    res += message[i]
  }
  return res
}
reverseString('hello') // should return 'olleh'