const quotesAppend = document.querySelector('.quotes');
const quotesList = ["Get Environmental Data of Any City",
                    "Your City's Environment Data is One Search Away",
                    "Get Your City Environmental Level Instantly",
                    "Free Environmental Search and Data of Your City",
                    "Instant Search about Your City Environmental Condition"];

let iQuotes = 0;

const quotesChanger = () =>{
    quotesAppend.innerText = `${quotesList[iQuotes]}`;
    iQuotes = (iQuotes + 1) % quotesList.length;
}

setInterval(quotesChanger, 6000);