// --- Problems (example, adapt as needed) ---
const problems = [
  {
    id: 1,
    title: "GCD (Euclidean Algorithm)",
    desc: "Write a function to compute the GCD of two numbers using the Euclidean algorithm.",
    template: [
      "int gcd(int a, int b) {",
      "    if (_____)", // blank 0
      "        return a;",
      "    else",
      "        return gcd(_____, _____);", // blank 1, 2
      "}",
      "int main() {",
      "    int a, b;",
      '    scanf(\"%d %d\", &a, &b);',
      '    printf("%d\\n", gcd(a, b));',
      "    return 0;",
      "}",
    ],
    blanks: [
      {
        line: 1,
        answers: ["b == 0", "b==0", "(b == 0)", "(b==0)"],
        placeholder: "base case",
      },
      { line: 4, answers: ["b", "b "], placeholder: "first argument" },
      {
        line: 4,
        answers: ["a % b", "a%b", "(a % b)", "(a%b)"],
        placeholder: "second argument",
      },
    ],
    hints: [
      "What is the base case for GCD?",
      "What is the first argument in the recursive call?",
      "What is the second argument in the recursive call?",
      "For a=24, b=18, output is 6. For a=17, b=13, output is 1.",
    ],
    compilerOutput: "Compiled successfully.",
    runtimeOutput: "For a=24, b=18, output is 6. For a=17, b=13, output is 1.",
  },
  {
    id: 2,
    title: "Modular Exponentiation",
    desc: "Write a function to compute (a^b) % m efficiently.",
    template: [
      "int mod_exp(int a, int b, int m) {",
      "    int res = 1;",
      "    a = a % m;",
      "    while (b > 0) {",
      "        if (_____)", // blank 0
      "            res = (res * a) % m;",
      "        b = _____;", // blank 1
      "        a = (a * a) % m;",
      "    }",
      "    return res;",
      "}",
      "int main() {",
      "    int a, b, m;",
      '    scanf("%d %d %d", &a, &b, &m);',
      '    printf("%d\\n", mod_exp(a, b, m));',
      "    return 0;",
      "}",
    ],
    blanks: [
      {
        line: 4,
        answers: ["b % 2 == 1", "b%2==1", "(b % 2 == 1)", "(b%2==1)"],
        placeholder: "odd check",
      },
      {
        line: 6,
        answers: ["b / 2", "b/2", "(b / 2)", "(b/2)"],
        placeholder: "divide by 2",
      },
    ],
    hints: [
      "How do you check if b is odd?",
      "How do you halve b in each iteration?",
      "For a=2, b=5, m=13, output is 6. For a=3, b=4, m=5, output is 1.",
    ],
    compilerOutput: "Compiled successfully.",
    runtimeOutput:
      "For a=2, b=5, m=13, output is 6. For a=3, b=4, m=5, output is 1.",
  },
  {
    id: 3,
    title: "Extended Euclidean Algorithm",
    desc: "Write a function to compute the GCD of a and b, and also find integers x and y such that ax + by = gcd(a, b).",
    template: [
      "int extended_gcd(int a, int b, int *x, int *y) {",
      "    if (_____)", // blank 0
      "    {",
      "        *x = 1; *y = 0;",
      "        return a;",
      "    }",
      "    int x1, y1;",
      "    int gcd = extended_gcd(b, a % b, &x1, &y1);",
      "    *x = y1;",
      "    *y = x1 - (a / b) * _____;", // blank 1
      "    return gcd;",
      "}",
      "int main() {",
      "    int a, b, x, y;",
      '    scanf(\"%d %d\", &a, &b);',
      "    int g = extended_gcd(a, b, &x, &y);",
      '    printf("%d %d %d\\n", g, x, y);',
      "    return 0;",
      "}",
    ],
    blanks: [
      {
        line: 1,
        answers: ["b == 0", "b==0", "(b == 0)", "(b==0)"],
        placeholder: "base case",
      },
      { line: 9, answers: ["y1", "y1 "], placeholder: "y1 value" },
    ],
    hints: [
      "What is the base case for the extended GCD?",
      "What value should be used for *y in the recursive step?",
      "For a=30, b=20, output is 10 -1 2. For a=17, b=13, output is 1 -3 4.",
    ],
    compilerOutput: "Compiled successfully.",
    runtimeOutput:
      "For a=30, b=20, output is 10 -1 2. For a=17, b=13, output is 1 -3 4.",
  },
];

let currentProblem = null;
let userInputs = [];

function renderProblemOptions() {
  const select = document.getElementById("problem-select");
  select.innerHTML = problems
    .map((p, i) => `<option value=\"${i}\">Problem ${i + 1}</option>`)
    .join("");
}

function renderProblem(idx) {
  currentProblem = problems[idx];
  userInputs = Array(currentProblem.blanks.length).fill("");
  document.getElementById("problem-desc").textContent = currentProblem.desc;
  renderCodeTemplate();
  renderHints();
  document.getElementById("feedback").textContent = "";
  document.getElementById("runtime-output").textContent = "";
  document.getElementById("run-btn").disabled = true;
}

function renderCodeTemplate() {
  const codeDiv = document.getElementById("code-template");
  codeDiv.innerHTML = "";
  currentProblem.template.forEach((line, idx) => {
    let html = line;
    currentProblem.blanks.forEach((blank, bIdx) => {
      if (blank.line === idx) {
        html = html.replace(
          "_____",
          `<input class=\"blank-input\" data-blank=\"${bIdx}\" value=\"${userInputs[bIdx] || ""}\" placeholder=\"${blank.placeholder}\" />`,
        );
      }
    });
    codeDiv.innerHTML += `<div class=\"template-line\">${html}</div>`;
  });
  // Attach input listeners
  codeDiv.querySelectorAll(".blank-input").forEach((input) => {
    input.addEventListener("input", (e) => {
      const bIdx = +e.target.getAttribute("data-blank");
      userInputs[bIdx] = e.target.value;
      document.getElementById("feedback").textContent = "";
      document.getElementById("runtime-output").textContent = "";
      document.getElementById("run-btn").disabled = true;
    });
  });
}

function renderHints() {
  const hintSelect = document.getElementById("hint-level");
  hintSelect.innerHTML = "";
  hintSelect.innerHTML += `<option value=\"0\" disabled selected>Hint 0</option>`;
  for (let i = 1; i <= currentProblem.hints.length; ++i) {
    hintSelect.innerHTML += `<option value=\"${i}\">Hint ${i}</option>`;
  }
  showHints(0);
  hintSelect.onchange = (e) => showHints(+e.target.value);
}

function showHints(level) {
  const hintsDiv = document.getElementById("hints");
  if (level === 0) {
    hintsDiv.innerHTML = "";
    return;
  }
  hintsDiv.innerHTML = `<div class=\"hint\">${currentProblem.hints[level - 1]}</div>`;
}

function checkAnswers() {
  let allCorrect = true;
  let feedback = "";
  currentProblem.blanks.forEach((blank, i) => {
    const userVal = (userInputs[i] || "").trim();
    if (blank.answers.map((a) => a.trim()).includes(userVal)) {
      feedback += `<div class=\"feedback-correct\">Blank ${i + 1}: Correct</div>`;
    } else {
      feedback += `<div class=\"feedback-incorrect\">Blank ${i + 1}: Incorrect</div>`;
      allCorrect = false;
    }
  });
  document.getElementById("feedback").innerHTML = feedback;
  document.getElementById("run-btn").disabled = !allCorrect;
}

function showRuntimeOutput() {
  document.getElementById("runtime-output").innerHTML =
    `<div class=\"feedback-all-correct\">${currentProblem.runtimeOutput}</div>`;
}

document.addEventListener("DOMContentLoaded", () => {
  renderProblemOptions();
  renderProblem(0);
  document.getElementById("problem-select").onchange = (e) =>
    renderProblem(+e.target.value);
  document.getElementById("submit-btn").onclick = checkAnswers;
  document.getElementById("run-btn").onclick = showRuntimeOutput;
});
