# JSON to CSV Converter

This is a simple local JavaScript function that converts a JSON file to a CSV file. It reads the JSON data from a file, flattens the JSON object, and generates a CSV file with keys in one column and values in another column.

## Usage

Clone this repository and install the required dependencies by running `npm install`

Replace the placeholder JSON file path and CSV file path in the jsonToCsv function with your own file paths or update `data.json` content:

```
const csvFile = 'output_data.csv'
const jsonFile = './data.json'
```

Run the script by executing the following command:

```
npm run start
```

This will convert the JSON file to CSV and save it to the specified output file path.

Check the output CSV file in the specified file path. It should contain the keys in one column and the corresponding values in another column.

## Notes

- Make sure your input JSON file contains valid JSON data. Any syntax errors in the JSON file may cause the script to fail.

- If your JSON file contains nested objects, the script will flatten them and include the nested keys as part of the CSV headers.
