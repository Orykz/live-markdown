const markdownInput = document.getElementById("input-field");
const markdownOutput = document.getElementById("output-field");

function updateView() {
    const markdownText = markdownInput.value;

    const parsedHTML = marked.parse(markdownText);
    const sanitizedHTML = DOMPurify.sanitize(parsedHTML);

    markdownOutput.innerHTML = sanitizedHTML;
}

markdownInput.addEventListener("input", updateView);

updateView();