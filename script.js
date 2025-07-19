const lines = [
  "> HeartOS v2.0.1 - Special Edition for the Most Wonderful Lady 🌹",
  "> Author: Krishna (your caring friend) 🧑‍💻",
  "",
  "> Starting HeartOS just for you...",
  "> Checking all happiness modules...",
  "> Warmth.js ✅",
  "> Patience.config ✅",
  "> JokesHandler.js ✅",
  "> SarcasmHandler.js ❌ (not needed for you!)",
  "",
  "> FOUND: kindness.infiniteException",
  "> Fixing with extra love... 💖",
  "> Loading best_version.forYou()",
  "",
  "> Memories saved to: /memories/PreciousMoments/happy_days.log",
  "> Would you like to see a smile? (Type: smile)",
  "",
  "> Would you like to continue this lovely chat? (Type: yes or no)"
];

let index = 0;
const output = document.getElementById("output");
const input = document.getElementById("commandInput");

function typeLine() {
  if (index < lines.length) {
    output.innerHTML += lines[index] + "\n";
    index++;
    setTimeout(typeLine, 700);
  } else {
    input.disabled = false;
    input.focus();
  }
}

typeLine();

input.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    const command = input.value.trim().toLowerCase();
    output.innerHTML += `> ${command}\n`;

    switch (command) {
      case "yes":
        output.innerHTML += "> Thank you for staying! Your company makes everything brighter. ❤️\n";
        break;
      case "no":
        output.innerHTML += "> That's okay! Remember, you are always loved and welcome here. 🌷\n";
        break;
      case "smile":
        output.innerHTML += "> Here is a big smile for you! 😊\n";
        output.innerHTML += "> You make the world a happier place just by being you.\n";
        break;
      case "her_name":
        output.innerHTML += "> You are the heart and soul of this system. 👑\n";
        break;
      case "your_name":
        output.innerHTML += "> Krishna, your friend who is always here to help. 🧑‍💻\n";
        break;
      default:
        output.innerHTML += "> Sorry, I didn't understand that. Please type: yes, no, or smile.\n";
    }

    input.value = "";
    window.scrollTo(0, document.body.scrollHeight);
  }
});
