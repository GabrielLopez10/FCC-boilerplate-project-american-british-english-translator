const lightIcon = document.getElementById("light-icon");
const darkIcon = document.getElementById("dark-icon");

let darkMode =
  localStorage.getItem("dark-mode") ??
  window.matchMedia("(prefers-color-scheme: dark)").matches;

if (darkMode) {
  document.body.classList.add("dark-mode");
  darkIcon.setAttribute("display", "none");
} else {
  lightIcon.setAttribute("display", "none");
}

function toggleDarkMode() {
  darkMode = !darkMode

  // Store darkMode variable in localStorage
  localStorage.setItem("dark-mode", darkMode);

  document.body.classList.toggle("dark-mode");

  if (darkMode) {
    lightIcon.setAttribute("display", "block");
    darkIcon.setAttribute("display", "none");
  } else {
    lightIcon.setAttribute("display", "none");
    darkIcon.setAttribute("display", "block");
  }
}

document.getElementById('translate-btn').addEventListener('click', function() {
  window.scrollTo({
      top: document.body.scrollHeight,
      behavior: 'smooth'
  });
});

const translateHandler = async () => {
  const textArea = document.getElementById("text-input");
  const localeArea = document.getElementById("locale-select");
  const errorArea = document.getElementById("error-msg");
  const translatedArea = document.getElementById("translated-sentence");

  const stuff = {"text": textArea.value, "locale": localeArea.value};
  errorArea.innerText = "";
  translatedArea.innerText = "";

  const data = await fetch("/api/translate", {
    method: "POST",
    headers: {
      "Accept": "application/json",
      "Content-type": "application/json"
    },
    body: JSON.stringify(stuff)
  });

  const parsed = await data.json();
  if (parsed.error) {
    errorArea.innerText = JSON.stringify(parsed);
    return;
  }

  translatedArea.innerHTML = parsed.translation;
  return;
};

document.getElementById("translate-btn").addEventListener("click", translateHandler)
