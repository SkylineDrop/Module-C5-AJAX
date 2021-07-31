const xml = `<list>
    <student>
        <name lang="en">
            <first>Ivan</first>
            <second>Ivanov</second>
        </name>
        <age>35</age>
        <prof>teacher</prof>
    </student>
    <student>
        <name lang="ru">
            <first>Петр</first>
            <second>Петров</second>
        </name>
        <age>58</age>
        <prof>driver</prof>
    </student>
    </list>`;

const parser = new DOMParser();
const xmlString = parser.parseFromString(xml, "application/xml");

let students = xmlString.querySelectorAll("student");
let result = {"list": []}
for (const studentNode of students) {
    let nameNode = studentNode.querySelector("name");
    let ageNode = studentNode.querySelector("age");
    let profNode = studentNode.querySelector("prof");
    
    let fName = nameNode.querySelector("first").textContent;
    let sName = nameNode.querySelector("second").textContent;

    let resObj = {
        name: `${fName} ${sName}`, 
        age: ageNode.textContent,
        prof: profNode.textContent,
        lang: nameNode.getAttribute("lang"),
    }

    result.list.push(resObj)
}
console.log(result)
