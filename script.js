const lines = [
  "> HeartOS v2.0.1 - Personalized for Poorvi ❤️",
  "> Author: Ghanshyam Singh 🧑‍💻",
  "",
  "> booting HeartOS...",
  "> checking emotional modules...",
  "> empathy.js ✅",
  "> patience.config ✅",
  "> sarcasmHandler.js ❌ (crashed at 8:03PM)",
  "> running debugger...",
  "",
  "> FOUND: tone.misinterpretationException",
  "> patching... 💖",
  "> deploying better_version.ghanshyam()",
  "",
  "> logs saved to: /memories/poorvi/laughter.log",
  "> run program: smile.exe ?",
  "",
  "> Would you like to continue this connection? (yes/no)"
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
        output.innerHTML += "> syncing hearts... ❤️ completed.\n";
        output.innerHTML += "> Love you my cutie, my bacha.\n";
        break;
      case "no":
        output.innerHTML += "> closing session... but love.exe is still running in background.\n";
        break;
      case "smile":
        output.innerHTML += "> launching smile.exe... 😊\n";
        break;
      case "poorvi":
        output.innerHTML += "> You are the root user of this heart system. 👑\n";
        break;
      case "ghanshyam":
        output.innerHTML += "> The loyal developer who cares deeply. 🧑‍💻\n";
        break;
      default:
        output.innerHTML += `> command not found: ${command}\n`;
    }

    input.value = "";
    window.scrollTo(0, document.body.scrollHeight);
  }
});
