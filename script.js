const questions = [
  { category: "Social Influence", text: "My parents told me which job or subject is better for a girl, and I listened to them." },
  { category: "Social Influence", text: "A teacher or school counsellor told me that science or technology might be too hard for girls." },
  { category: "Social Influence", text: "My family thinks I should choose a safe and practical job instead of the one I really want." },
  { category: "Social Influence", text: "My parents or relatives already have ideas about what job I should choose in the future." },
  { category: "Social Influence", text: "I do not see many women around me working in science or technology, so it is hard to imagine myself doing it too." },
  { category: "Social Influence", text: "Because there are not many women role models in STEM around me, it feels less possible for me." },
  { category: "Social Influence", text: "Some adults in my life say that science and engineering jobs are not very suitable for girls." },
  { category: "Social Influence", text: "Friends or relatives often suggest that girls should choose the same kinds of jobs." },
  { category: "Social Influence", text: "I sometimes think I should choose the same kind of job as successful women in my family." },
  { category: "Social Influence", text: "At school, teachers sometimes encourage boys more than girls in math or science." },
  { category: "Social Influence", text: "My parents compare me with other students or relatives when talking about future jobs." },
  { category: "Social Influence", text: "School rules, adults, or scholarship opportunities sometimes push me toward certain subjects or careers." },
  { category: "Social Influence", text: "Sometimes I feel like adults have already decided what kind of job I should choose." },
  { category: "Social Influence", text: "I think about my family’s or teachers’ feelings when choosing what I want to study in the future." },
  { category: "Social Influence", text: "The opinions of adults I respect influence my career ideas more than my own interests." },

  // остальные вопросы остаются как у тебя (они уже правильные)
];

const scale = [
  { label: "Strongly Disagree", value: 1, className: "sd" },
  { label: "Disagree", value: 2, className: "d" },
  { label: "Neutral", value: 3, className: "n" },
  { label: "Agree", value: 4, className: "a" },
  { label: "Strongly Agree", value: 5, className: "sa" }
];

const categories = [
  "Social Influence",
  "Perfectionist Trap",
  "Cultural / Social Barrier",
  "STEM Interest",
  "Non-STEM Interest"
];

let currentIndex = 0;
let answers = new Array(75).fill(null);

const welcomeScreen = document.getElementById("welcomeScreen");
const startBtn = document.getElementById("startBtn");
const seeResultsBtn = document.getElementById("seeResultsBtn");

const questionText = document.getElementById("questionText");
const options = document.getElementById("options");
const progressText = document.getElementById("progressText");
const progressFill = document.getElementById("progressFill");
const categoryText = document.getElementById("categoryText");
const resultCard = document.getElementById("resultCard");
const quizCard = document.getElementById("quizCard");
const resultsContainer = document.getElementById("resultsContainer");
const downloadBtn = document.getElementById("downloadBtn");
const sectionProgress = document.getElementById("sectionProgress");
const combinedResult = document.getElementById("combinedResult");

function showQuiz() {
  welcomeScreen.style.display = "none";
  resultCard.style.display = "none";
  quizCard.style.display = "block";
  renderQuestion();
}

function showOnlyResults() {
  welcomeScreen.style.display = "none";
  quizCard.style.display = "none";
  showResults();
}

function renderSectionProgress() {
  sectionProgress.innerHTML = "";
  const currentSection = Math.floor(currentIndex / 15);

  for (let i = 0; i < 5; i++) {
    const block = document.createElement("div");
    block.className = "section-block";
    if (i <= currentSection) block.classList.add("active");
    sectionProgress.appendChild(block);
  }
}

function renderQuestion() {
  if (currentIndex >= questions.length) {
    showResults();
    return;
  }

  const q = questions[currentIndex];
  const step = currentIndex + 1;
  const percent = Math.round((step / 75) * 100);

  questionText.textContent = q.text;
  categoryText.textContent = q.category;
  progressText.textContent = `${step}/75`;
  progressFill.style.width = `${percent}%`;

  renderSectionProgress();
  options.innerHTML = "";

  const labels = document.createElement("div");
  labels.className = "scale";
  labels.innerHTML = `
    <span>Strongly Disagree</span>
    <span>Disagree</span>
    <span>Neutral</span>
    <span>Agree</span>
    <span>Strongly Agree</span>
  `;
  options.appendChild(labels);

  const row = document.createElement("div");
  row.className = "options-row";

  scale.forEach((item) => {
    const btn = document.createElement("button");
    btn.className = `choice ${item.className}`;

    if (answers[currentIndex] === item.value) {
      btn.classList.add("selected");
    }

    btn.onclick = () => {
      answers[currentIndex] = item.value;
      currentIndex++;
      renderQuestion();
    };

    row.appendChild(btn);
  });

  options.appendChild(row);
}

function calculate() {
  const sums = {};
  categories.forEach(c => sums[c] = 0);

  questions.forEach((q, i) => {
    if (answers[i] !== null) {
      sums[q.category] += answers[i];
    }
  });

  const results = {};
  categories.forEach(c => {
    results[c] = Math.round((sums[c] / 75) * 100);
  });

  return results;
}

function getLevel(p) {
  if (p <= 30) return "Low";
  if (p <= 60) return "Moderate";
  return "High";
}

function getText(cat, p) {
  const level = getLevel(p);

  const texts = {
    "Social Influence": [
      "You make choices independently.",
      "Others influence you sometimes.",
      "Others strongly influence your decisions."
    ],
    "Perfectionist Trap": [
      "You are not afraid of mistakes.",
      "You sometimes worry about failure.",
      "Fear of failure may block you."
    ],
    "Cultural / Social Barrier": [
      "Culture does not limit you.",
      "Some cultural pressure exists.",
      "Strong cultural pressure affects you."
    ],
    "STEM Interest": [
      "Low STEM interest.",
      "Moderate STEM interest.",
      "Strong STEM interest."
    ],
    "Non-STEM Interest": [
      "Low non-STEM interest.",
      "Moderate non-STEM interest.",
      "Strong non-STEM interest."
    ]
  };

  return level === "Low" ? texts[cat][0] :
         level === "Moderate" ? texts[cat][1] :
         texts[cat][2];
}

function showResults() {
  quizCard.style.display = "none";
  resultCard.style.display = "block";

  const scores = calculate();
  resultsContainer.innerHTML = "";

  categories.forEach(cat => {
    const div = document.createElement("div");
    div.className = "result-box";
    div.innerHTML = `
      <h3>${cat}</h3>
      <div class="result-score">${scores[cat]}%</div>
      <p>${getText(cat, scores[cat])}</p>
    `;
    resultsContainer.appendChild(div);
  });
}

startBtn.addEventListener("click", showQuiz);
seeResultsBtn.addEventListener("click", showOnlyResults);

// 🔥 ВАЖНЫЙ ФИКС (welcome screen)
window.addEventListener("DOMContentLoaded", () => {
  welcomeScreen.style.display = "flex";
  quizCard.style.display = "none";
  resultCard.style.display = "none";
});
