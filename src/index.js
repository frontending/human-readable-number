module.exports = function toReadable (number) {
    if (number === 0) {
        return 'zero'
    }
    let result = ''
  number = number.toString()
  while (number.length < 3) {
    number = '0' + number
  }
  let a = Number(number[0])
  let b = Number(number[1])
  let c = Number(number[2])
  if (a !== 0) {
    result = result + simpleNumber(a) + ' hundred'
  }
  if (b !== 0) {
    result += ' '
    result = result + desNumber(b)
  }
  if (b !== 1 && c !== 0)
  result = result + ' ' + simpleNumber(c)
  function simpleNumber(n) {
    if (n === 0) {
        return ''
    }
    else if (n === 1) {
        return 'one'
    }
    else if (n === 2) {
        return 'two'
    }
    else if (n === 3) {
        return 'three'
    }
    else if (n === 4) {
        return 'four'
    }
    else if (n === 5) {
        return 'five'
    }
    else if (n === 6) {
        return 'six'
    }
    else if (n === 7) {
        return 'seven'
    }
    else if (n === 8) {
        return 'eight'
    }
    else if (n === 9) {
        return 'nine'
    }
  }
  function desNumber(d) {
    if (d === 0) {
        return ''
    }
    else if (d === 1) {
        return elevenNumber(c)
    }
    else if (d === 2) {
        return 'twenty'
    }
    else if (d === 3) {
        return 'thirty'
    }
    else if (d === 4) {
        return 'forty'
    }
    else if (d === 5) {
        return 'fifty'
    }
    else if (d === 6) {
        return 'sixty'
    }
    else if (d === 7) {
        return 'seventy'
    }
    else if (d === 8) {
        return 'eighty'
    }
    else if (d === 9) {
        return 'ninety'
    }
  }
  function elevenNumber(e) {
    if (e === 0) {
        return 'ten'
    }
    else if (e === 1) {
        return 'eleven'
    }
    else if (e === 2) {
        return 'twelve'
    }
    else if (e === 3) {
        return 'thirteen'
    }
    else if (e === 4) {
        return 'fourteen'
    }
    else if (e === 5) {
        return 'fifteen'
    }
    else if (e === 6) {
        return 'sixteen'
    }
    else if (e === 7) {
        return 'seventeen'
    }
    else if (e === 8) {
        return 'eighteen'
    }
    else if (e === 9) {
        return 'nineteen'
    }
  }
  return result.trim()
}

