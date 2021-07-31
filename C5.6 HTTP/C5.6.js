function useRequest() {
    const inputNumber_1 = document.getElementById("inp_1").value;
    const inputNumber_2 = document.getElementById("inp_2").value;


    if ((100 > inputNumber_1 || inputNumber_1 > 300) ||
    (100 > inputNumber_2 || inputNumber_2 > 300)) {
        let text = "Одно из чисел вне диапазона от 100 до 300";
        document.querySelector('output').innerHTML = text;
        return;
    }


    fetch(`https://picsum.photos/${inputNumber_1}/${inputNumber_2}`)
        .then((response) => {
            let imgs = `<img src="${response.url}">`;
            document.querySelector('output').innerHTML = imgs;
        })
}
