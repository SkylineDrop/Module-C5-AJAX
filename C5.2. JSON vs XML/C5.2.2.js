const inputObj = `{
    "list": [
     {
      "name": "Petr",
      "age": "20",
      "prof": "mechanic"
     },
     {
      "name": "Vova",
      "age": "60",
      "prof": "pilot"
     }
    ]
   }`;
  
  const data = JSON.parse(inputObj);
  const resultArray = data.list;
  
  const result = {"list": []}
  
  for (const x of resultArray) {
    result.list.push(x);
  }
  
  console.log(result)