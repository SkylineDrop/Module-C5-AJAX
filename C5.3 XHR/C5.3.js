function useRequest() {
    const inputNumber = document.getElementById("inp").value;

    if (0 > inputNumber || inputNumber > 10) {
        let text = "Число вне диапазона от 1 до 10";
        document.querySelector('output').innerHTML = text;
        return;
    }

    var xhr = new XMLHttpRequest();
    const reqURL = `https://picsum.photos/v2/list?limit=${inputNumber}`;

    xhr.open('GET', reqURL, true);
    xhr.send();
    xhr.onload = function() {
        const data = JSON.parse(xhr.response);
        let imgs = "";
        for (const x of data) {
            imgs = imgs + `<img src="${x.download_url}" class="myImg">`;
        }
        document.querySelector('output').innerHTML = imgs;
    }
   
};