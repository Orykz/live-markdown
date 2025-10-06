const markdownInput = document.getElementById("input-field");
const markdownOutput = document.getElementById("output-field");
const modeSwitch = document.getElementById("switch")

document.body.classList.add("light-mode");
modeSwitch.addEventListener("change", () => {
    document.body.classList.toggle("dark-mode");
});

function debounce(func, wait) {
    let timeoutId = null;
    return (...args) => {
        window.clearTimeout(timeoutId);
        timeoutId = window.setTimeout(() => {
            func(...args);
        }, wait);
    }
}

function updateView() {
    const markdownText = markdownInput.value;
    const parsedHTML = marked.parse(markdownText);
    const sanitizedHTML = DOMPurify.sanitize(parsedHTML);

    markdownOutput.innerHTML = sanitizedHTML;
}

const inputChange = debounce(updateView, 300) // 300ms delay
markdownInput.addEventListener("input", inputChange);

markdownInput.value = `# Markdown Text Viewer
1. Type on the left.
2. See the results on the right.
3. You can toggle light or dark mode on the top right of navbar.
\`\`\`
console.log("Alright, good luck!");
\`\`\`
`
updateView();