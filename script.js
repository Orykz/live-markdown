const markdownInput = document.getElementById("input-field");
const markdownOutput = document.getElementById("output-field");
const modeSwitch = document.getElementById("switch")

document.body.classList.add("light-mode");
modeSwitch.addEventListener("change", () => {
    document.body.classList.toggle("dark-mode");
});

function updateView() {
    const markdownText = markdownInput.value;
    const parsedHTML = marked.parse(markdownText);
    const sanitizedHTML = DOMPurify.sanitize(parsedHTML);

    markdownOutput.innerHTML = sanitizedHTML;
}

markdownInput.addEventListener("input", updateView);
updateView();