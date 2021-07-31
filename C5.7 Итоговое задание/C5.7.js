function parseResp(parsed) {
    let result = "";
    for (const image of parsed) {
        result += `<img src="${image.download_url}">`;
    }
    document.querySelector('output').innerHTML = result;
} 

function useRequest() {
    const inputPage = Number(document.getElementById("inp_1").value);
    const inputLimit = Number(document.getElementById("inp_2").value);

    const limitOk = Number.isInteger(inputLimit) && (1 <= inputLimit && inputLimit <= 10)
    const pageOk = Number.isInteger(inputPage) && (1 <= inputPage && inputPage <= 10)
    
    if (!limitOk && !pageOk)  {
        let text = "Номер страницы и лимит вне диапазона от 1 до 10";
        document.querySelector('output').innerHTML = text;
        return;
    }
    else if (!limitOk) {
        let text = "Лимит вне диапазона от 1 до 10";
        document.querySelector('output').innerHTML = text;
        return;
    }
    else if (!pageOk) {
        let text = "Номер страницы вне диапазона от 1 до 10";
        document.querySelector('output').innerHTML = text;
        return;
    }

    fetch(`https://picsum.photos/v2/list?page=${inputPage}&limit=${inputLimit}`)
        .then((response) => {
            return response.json()   
        }).then((parsed) => {
            parseResp(parsed)
            localStorage.setItem("savedRes", JSON.stringify(parsed))
        })
}

function checkStorage () {
    let storage = localStorage.getItem("savedRes");
    console.log(storage)
    if (storage) {
        parseResp(JSON.parse(storage))
    }
}

window.onload = checkStorage
