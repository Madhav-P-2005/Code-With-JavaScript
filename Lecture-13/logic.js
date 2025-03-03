// const BASE_URL = "https://latest.currency-api.pages.dev/v1/currencies.json";

const BASE_URL =
  "https://v6.exchangerate-api.com/v6/6ccca997121686ca95a4c8a8/latest";


const dropdown_Selects = document.querySelectorAll(".dropdown select")
const btn  = document.querySelector("form button")

const fromCurr = document.querySelector(".from select")

const toCurr = document.querySelector(".to select")


// for (let code in countryList){
//     console.log(code ,  countryList[code])
// }


for(let select of dropdown_Selects){
    for(currcode in countryList){
        let newOption = document.createElement("option");
        newOption.innerText = currcode;
        // newOption.value = currcode;
        if(select.name  === "from" && currcode === "USD"){
            newOption.selected = "USD Got Selected";
        }else
        if (select.name  === "to" && currcode === "INR"){
            newOption.selected = "INR Got Selected";
        }
        select.append(newOption);
    }

    select.addEventListener("change" , (evt) =>{
        updateFlag(evt.target)
    })
}





const updateFlag = (element) =>{
         let currcode = element.value;
         let countryCode = countryList[currcode];
         let newSrc = `https://flagsapi.com/${countryCode}/flat/64.png`;
        let img = element.parentElement.querySelector("img");
        img.src  = newSrc; 
};





// btn.addEventListener("click" , async(evt) =>{
//   evt.preventDefault(); // form has a default behaviour so we need do all manually not automatically by the browser actions

//   let amount = document.querySelector(".amount input");
//   let amountValue = amount.value;
//   if (amountValue === "" || amountValue < 1) {
//     amountValue = 1;
//     amount.value = 1;
//   }
//   console.log(fromCurr.value, toCurr.value);          // Output :- USD INR


//  const URL = `${BASE_URL}/${toCurr.value}.json`;
 

//    let response = await fetch(URL);
//    console.log(response)



// });   // Madam 's Api is not working .... so use others's  :- https://www.exchangerate-api.com/


btn.addEventListener("click", async (evt) => {
  evt.preventDefault();             // Stop form from reloading the page

  let amount = document.querySelector(".amount input");
  let amountValue = amount.value;

  // Ensure at least 1 is entered
  if (amountValue === "" || amountValue < 1) {
    amountValue = 1;
    amount.value = 1;
  }

  console.log(fromCurr.value, toCurr.value);      // Output :-  USD INR

  const URL = `${BASE_URL}/${fromCurr.value}`;     // ✅ Corrected API URL

  try {
    let response = await fetch(URL);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    let data = await response.json();
    console.log("API Response:", data);    // Debugging :-  Check full response


    let exchangeRate = data.conversion_rates[toCurr.value];    // ✅ Extracting correct rate
    console.log(
      `Exchange Rate: 1 ${fromCurr.value} = ${exchangeRate} ${toCurr.value}`
    );


    let convertedAmount = (amountValue * exchangeRate).toFixed(2);
    console.log(`Converted Amount: ${convertedAmount}`);


    // ✅ Display the converted amount in the UI
    document.querySelector(
      ".msg"
    ).innerText = ` ${amountValue} ${fromCurr.value} = ${convertedAmount} ${toCurr.value}`;
  } catch (error) {
    console.error("Error fetching exchange rate:", error);
    document.querySelector(".msg").innerText = "Failed to fetch exchange rate!";
  }
});