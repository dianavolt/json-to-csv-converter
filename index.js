const fs = require('fs')

function flattenObject(obj, prefix = '') {
  const flattened = {}
  for (let key in obj) {
    if (typeof obj[key] === 'object' && obj[key] !== null) {
      const nestedKeys = flattenObject(obj[key], prefix + key + '.')
      Object.assign(flattened, nestedKeys)
    } else {
      flattened[prefix + key] = obj[key]
    }
  }
  return flattened
}

function jsonToCsv(jsonFilePath, csvFilePath) {
  fs.readFile(jsonFilePath, 'utf8', (err, data) => {
    if (err) {
      console.error('Error reading JSON file:', err)
      return
    }

    var jsonData = ''
    try {
      jsonData = JSON.parse(data)
    } catch (err) {
      console.error('Error parsing JSON data:', err)
    }

    const flattenedData = flattenObject(jsonData)

    const csvContent = Object.entries(flattenedData)
        .map(([key, value]) => `"${key}","${value}"`)
        .join('\n')

    fs.writeFile(csvFilePath, csvContent, 'utf8', (err) => {
      if (err) {
        console.error('Error writing CSV file:', err)
        return
      }
      console.log('CSV file successfully created:', csvFilePath)
    })
  })
}

const csvFile = 'output_data.csv'
const jsonFile = './data.json'
jsonToCsv(jsonFile, csvFile)
