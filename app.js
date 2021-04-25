const tags = document.querySelector("#tags")
const textarea = document.querySelector("#choices")
const result = document.querySelector("#result")
let choices = []
let randomnumber = 0
textarea.focus();

textarea.addEventListener("keyup", e => {
    createTags(e.target.value);

    if (e.key === "Enter") {

        setTimeout(() => {
            e.target.value = ""
        }, 10)
    result.innerHTML = "";
        randomSelect()
    }
})

function randomSelect() {
    let times = 20;

    let choiceinterval = setInterval(() => {
        const randomtag = pickRandomTag();
        highlightTag(randomtag)

        setTimeout(() => { unhighlightTag(randomtag) }, 100)
    }, 100);

    setTimeout(() => {
        clearInterval(choiceinterval);

        setTimeout(() => {
            const randomtag = pickRandomTag();
            highlightTag(randomtag)
            showChoice(choices[randomnumber])
        }, 100);
    }, times * 100);
}

function pickRandomTag() {
      const choicetags = document.getElementsByClassName("tag");
    const random = Math.floor(Math.random() * choicetags.length);
    randomnumber = random
    return choicetags[random]

}

function highlightTag(tag) {
    tag.classList.add("highlight")
}

function unhighlightTag(tag) {
    tag.classList.remove("highlight")
}

function showChoice(tag) {
    result.innerHTML = "";
    let span = document.createElement("span");
        span.classList.add("tag","highlight");
        span.innerText = tag;
    let ptag = document.createElement("p");
    ptag.innerHTML = `the tag chosen is ${span.outerHTML}`
    result.appendChild(ptag);
    result.style.display = "block";

}

function createTags(input) {
    // console.log(input);
    choices = input.split(',').filter(tag => tag.trim()).map(tag => tag.trim());
    // console.log(choices);
    tags.innerHTML = "";
    choices.forEach(tag => { 
        let span = document.createElement("span");
        span.classList.add("tag");
        span.innerText = tag;
        tags.appendChild(span)
    });
}