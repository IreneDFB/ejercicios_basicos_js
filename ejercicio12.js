const duplicates = [
  'sushi',
  'pizza',
  'burger',
  'potatoe',
  'pasta',
  'ice-cream',
  'pizza',
  'chicken',
  'onion rings',
  'pasta',
  'soda'
]

function removeDuplicates(list) {
  const uniqueList = []

  for (let i = 0; i < list.length; i++) {
    if (!uniqueList.includes(list[i])) {
      uniqueList.push(list[i])
    }
  }

  return uniqueList
}

console.log(removeDuplicates(duplicates))
