const btnOrder = document.querySelector(".btn-order");
const inputVal = document.querySelector(".input-order");

btnOrder.addEventListener("click", (e) => {
  if (inputVal.value.length) {
    e.preventDefault();

    let chips = document.createElement("div");
    chips.innerText = fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: JSON.stringify({
        title: "phoneNumber",
        body: inputVal.value,
        userId: 1,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((json) => {
        let chips = document.createElement("div");
        chips.classList.add("chips");
        chips.innerText = json.body ;

        let chipsField = document.createElement("div");
        chipsField.classList.add("chips-field");
        document.body.append(chipsField);
        document.querySelector(".chips-field").append(chips);
        console.log(json);
        setTimeout(() => {
          chips.remove();
          chipsField.remove();
        }, 3000);
      });
  }
  inputVal.value = "";
});
