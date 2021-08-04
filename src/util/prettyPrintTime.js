const prettyPrintTime = (time) => { // 80000
  const hr = Math.floor(time / 36000000)
  const minutes = Math.floor(time / 60000 % 60)
  const sec = Math.floor((time / 1000) % 60)
  const cs = ((time / 10) % 100)

  return `${("0" + hr).slice(-2)}:
          ${("0" + minutes).slice(-2)}:
          ${("0" + sec).slice(-2)}:
          ${("0" + cs).slice(-2)}`
}

export default prettyPrintTime