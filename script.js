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

markdownInput.value = `# Markdown Text Viewer
1. Type on the left.
2. See the results on the right.
3. You can toggle light or dark mode on the top right of navbar.
\`\`\`
console.log("Alright, good luck!");
\`\`\`
`
updateView();