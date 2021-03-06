var takeANumber = (katzDeliLine, name) => {
  katzDeliLine.push(name);

  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`;
}

var nowServing = katzDeliLine => {
  if (katzDeliLine.length === 0) {
    return "There is nobody waiting to be served!";
  } else {
    return `Currently serving ${katzDeliLine.shift()}.`;
  }
}

function currentLine(katzDeliLine){
  var current_array = [];
  if (katzDeliLine.length === 0){
    return "The line is currently empty."
  } else {
    for (let i = 0; i < katzDeliLine.length; i++) {
      current_array.push(`${i + 1}. ${katzDeliLine[i]}`)
    }
  }

  return `The line is currently: ${current_array.join(', ')}`
}
