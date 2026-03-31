const questions = [
  // 1–15 Social Influence
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

  // 16–30 Perfectionist Trap
  { category: "Perfectionist Trap", text: "I avoid subjects where I might not understand everything right away, because struggling makes me feel like I failed." },
  { category: "Perfectionist Trap", text: "When other students seem to understand math or science easily, I feel like I may never be as good as them." },
  { category: "Perfectionist Trap", text: "I prefer subjects where success feels easier instead of subjects where I might make many mistakes while learning." },
  { category: "Perfectionist Trap", text: "The idea of doing badly on a difficult science or math test scares me a lot." },
  { category: "Perfectionist Trap", text: "I feel like I must be one of the best in class, or I do not want to try that subject." },
  { category: "Perfectionist Trap", text: "I would rather avoid a hard topic than risk getting a lower grade than I expected." },
  { category: "Perfectionist Trap", text: "I sometimes think that if I have to work very hard at STEM, it means I am not naturally good at it." },
  { category: "Perfectionist Trap", text: "My own very high expectations stop me from trying difficult technical subjects." },
  { category: "Perfectionist Trap", text: "I feel safer choosing a subject where I can do well without too much struggle." },
  { category: "Perfectionist Trap", text: "I worry that people will judge me if I do not do very well in STEM subjects." },
  { category: "Perfectionist Trap", text: "Perfectionism makes me put off difficult STEM tasks until I lose interest in them." },
  { category: "Perfectionist Trap", text: "I worry that if STEM feels harder for me than for others, it means it is not for me." },
  { category: "Perfectionist Trap", text: "I want to always look capable, so subjects with lots of trial and error feel uncomfortable to me." },
  { category: "Perfectionist Trap", text: "I avoid STEM because making mistakes in front of others makes me feel embarrassed." },
  { category: "Perfectionist Trap", text: "Deep down, I may avoid harder subjects because I do not want to feel ‘not good enough.’" },

  // 31–45 Cultural / Social Barrier
  { category: "Cultural / Social Barrier", text: "In my culture, science and technology are often seen as better for boys than for girls." },
  { category: "Cultural / Social Barrier", text: "People around me think girls should choose jobs that leave more time for family later." },
  { category: "Cultural / Social Barrier", text: "I worry that choosing STEM will make people think I am too ambitious or not feminine enough." },
  { category: "Cultural / Social Barrier", text: "Traditional ideas in my family or community affect what I think girls should study." },
  { category: "Cultural / Social Barrier", text: "People around me believe girls are naturally better at humanities or caring jobs." },
  { category: "Cultural / Social Barrier", text: "In Kazakhstan, engineering or IT can sometimes feel less appropriate for girls." },
  { category: "Cultural / Social Barrier", text: "Society often expects women to put marriage and children before demanding careers." },
  { category: "Cultural / Social Barrier", text: "I worry that studying STEM might make it harder for me to fit in socially." },
  { category: "Cultural / Social Barrier", text: "Girls who study STEM are often treated like exceptions, not something normal." },
  { category: "Cultural / Social Barrier", text: "Media and social media often show STEM as more of a boys’ field." },
  { category: "Cultural / Social Barrier", text: "Pressure to be a ‘good daughter’ influences my ideas about future jobs." },
  { category: "Cultural / Social Barrier", text: "I think about what is seen as respectable for women in society when I imagine my future career." },
  { category: "Cultural / Social Barrier", text: "Gender stereotypes I grew up with made me doubt whether STEM is for me." },
  { category: "Cultural / Social Barrier", text: "Family and community traditions often value non-STEM careers more for girls." },
  { category: "Cultural / Social Barrier", text: "Social attitudes around me make STEM feel unusual or risky for a girl." },

  // 46–60 STEM Interest
  { category: "STEM Interest", text: "In science lessons, when we do experiments, I feel excited and want to do more." },
  { category: "STEM Interest", text: "Solving math problems or puzzles makes me happy, even when they are difficult." },
  { category: "STEM Interest", text: "In technology or informatics class, I enjoy coding or creating simple programs." },
  { category: "STEM Interest", text: "During physics or biology projects, I like observing and understanding how things work." },
  { category: "STEM Interest", text: "In math class, I enjoy finding patterns, drawing graphs, and solving problems." },
  { category: "STEM Interest", text: "In robotics club or when building things, I stay focused and enjoy the process." },
  { category: "STEM Interest", text: "During chemistry or biology practical work, I feel curious and interested." },
  { category: "STEM Interest", text: "When I try to fix or understand how a device or app works, I feel motivated." },
  { category: "STEM Interest", text: "I enjoy tasks where I have to think logically and solve problems step by step." },
  { category: "STEM Interest", text: "When we learn new scientific ideas, I want to explore them more on my own." },
  { category: "STEM Interest", text: "I like challenges in math or science, even if they take time to solve." },
  { category: "STEM Interest", text: "When I use technology to create something, like a game or website, I enjoy it." },
  { category: "STEM Interest", text: "I feel proud when I understand a difficult concept in math or science." },
  { category: "STEM Interest", text: "I am interested in how things are built, designed, or engineered." },
  { category: "STEM Interest", text: "I would enjoy learning more advanced topics in science, math, or technology in the future." },

  // 61–75 Non-STEM Interest
  { category: "Non-STEM Interest", text: "In language or literature class, I enjoy writing stories, essays, or poems." },
  { category: "Non-STEM Interest", text: "I like discussing books, characters, and emotions in class." },
  { category: "Non-STEM Interest", text: "In history or social studies, learning about people and past events interests me." },
  { category: "Non-STEM Interest", text: "In art or music lessons, drawing, painting, or performing feels fun and relaxing." },
  { category: "Non-STEM Interest", text: "I enjoy reading novels, short stories, or poems in my free time." },
  { category: "Non-STEM Interest", text: "I like expressing my thoughts and feelings through writing or speaking." },
  { category: "Non-STEM Interest", text: "In geography or social science, learning about cultures and places excites me." },
  { category: "Non-STEM Interest", text: "I enjoy creative activities like theater, dance, or making posters." },
  { category: "Non-STEM Interest", text: "I like tasks where I can use my imagination and creativity." },
  { category: "Non-STEM Interest", text: "I enjoy learning about society, traditions, and how people live." },
  { category: "Non-STEM Interest", text: "I feel interested when we analyze stories, poems, or artworks." },
  { category: "Non-STEM Interest", text: "I enjoy group discussions about opinions, values, or real-life topics." },
  { category: "Non-STEM Interest", text: "I like subjects where I can express ideas instead of finding one correct answer." },
  { category: "Non-STEM Interest", text: "I enjoy creating presentations, stories, or projects about human experiences." },
  { category: "Non-STEM Interest", text: "I would enjoy studying subjects related to arts, languages, or social sciences in the future." }
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
let answers = new Array(questions.length).fill(null);

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
const backHomeBtn = document.getElementById("backHomeBtn");
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

function goHome() {
  currentIndex = 0;
  answers = new Array(questions.length).fill(null);
  welcomeScreen.style.display = "flex";
  quizCard.style.display = "none";
  resultCard.style.display = "none";
  resultsContainer.innerHTML = "";
  combinedResult.innerHTML = "";
}

function renderSectionProgress() {
  sectionProgress.innerHTML = "";
  const currentSection = Math.floor(currentIndex / 15);

  for (let i = 0; i < 5; i++) {
    const block = document.createElement("div");
    block.className = "section-block";
    if (i <= currentSection) {
      block.classList.add("active");
    }
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
  const percent = Math.round((step / questions.length) * 100);

  questionText.textContent = q.text;
  categoryText.textContent = q.category;
  progressText.textContent = `${step}/${questions.length}`;
  progressFill.style.width = `${percent}%`;

  renderSectionProgress();
  options.innerHTML = "";

  const labelsRow = document.createElement("div");
  labelsRow.className = "scale";
  labelsRow.innerHTML = `
    <span>Strongly Disagree</span>
    <span>Disagree</span>
    <span>Neutral</span>
    <span>Agree</span>
    <span>Strongly Agree</span>
  `;
  options.appendChild(labelsRow);

  const buttonRow = document.createElement("div");
  buttonRow.className = "options-row";

  scale.forEach((item) => {
    const btn = document.createElement("button");
    btn.className = `choice ${item.className}`;
    btn.type = "button";
    btn.title = item.label;
    btn.setAttribute("aria-label", item.label);

    if (answers[currentIndex] === item.value) {
      btn.classList.add("selected");
    }

    btn.addEventListener("click", () => {
      answers[currentIndex] = item.value;
      currentIndex++;
      renderQuestion();
    });

    buttonRow.appendChild(btn);
  });

  options.appendChild(buttonRow);
}

function calculate() {
  const sums = {
    "Social Influence": 0,
    "Perfectionist Trap": 0,
    "Cultural / Social Barrier": 0,
    "STEM Interest": 0,
    "Non-STEM Interest": 0
  };

  questions.forEach((q, i) => {
    if (answers[i] !== null) {
      sums[q.category] += answers[i];
    }
  });

  const results = {};
  categories.forEach((category) => {
    results[category] = Math.round((sums[category] / 75) * 100);
  });

  return results;
}

function getLevel(percent) {
  if (percent <= 30) return "Low";
  if (percent <= 60) return "Moderate";
  return "High";
}

function getText(category, percent) {
  const level = getLevel(percent);

  if (category === "Social Influence") {
    if (level === "Low") return "You seem to make future choices mostly based on your own ideas.";
    if (level === "Moderate") return "Other people influence your career thinking sometimes.";
    return "Adults and people around you strongly influence your future choices.";
  }

  if (category === "Perfectionist Trap") {
    if (level === "Low") return "Fear of mistakes does not strongly stop you from trying difficult subjects.";
    if (level === "Moderate") return "Worry about failure may affect your choices sometimes.";
    return "Fear of failure or not being perfect may be blocking you from difficult subjects.";
  }

  if (category === "Cultural / Social Barrier") {
    if (level === "Low") return "Social stereotypes do not strongly shape your future choices.";
    if (level === "Moderate") return "Gender expectations may affect your thinking in some situations.";
    return "Cultural ideas and gender roles strongly influence how you see your future.";
  }

  if (category === "STEM Interest") {
    if (level === "Low") return "STEM does not appear to be your strongest area of interest right now.";
    if (level === "Moderate") return "You show some interest in STEM subjects.";
    return "You show strong curiosity and enjoyment in STEM.";
  }

  if (category === "Non-STEM Interest") {
    if (level === "Low") return "Non-STEM subjects do not appear to be your strongest area of interest right now.";
    if (level === "Moderate") return "You show some interest in non-STEM subjects.";
    return "You show strong curiosity and enjoyment in non-STEM subjects.";
  }

  return "";
}

function getCombinedResultText(scores) {
  const stemHigh = scores["STEM Interest"] > 60;
  const nonStemHigh = scores["Non-STEM Interest"] > 60;
  const socialHigh = scores["Social Influence"] > 60;
  const perfectionHigh = scores["Perfectionist Trap"] > 60;
  const culturalHigh = scores["Cultural / Social Barrier"] > 60;
  const anyBarrierHigh = socialHigh || perfectionHigh || culturalHigh;

  if (stemHigh && anyBarrierHigh) {
    return "You show strong personal interest in STEM, but outside pressures or inner fears may be making this path feel difficult.";
  }

  if (stemHigh && !anyBarrierHigh) {
    return "You show a genuine and independent interest in STEM, with fewer barriers standing in your way.";
  }

  if (!stemHigh && nonStemHigh) {
    return "Your answers suggest a stronger natural interest in non-STEM areas such as arts, language, or social subjects.";
  }

  if (!stemHigh && anyBarrierHigh) {
    return "Your answers suggest that STEM may feel difficult or unsuitable, but this may be linked to social pressure, cultural expectations, or fear of failure.";
  }

  if (stemHigh && nonStemHigh) {
    return "You show strong interest in both STEM and non-STEM areas, which suggests wide academic curiosity and flexibility.";
  }

  return "Your answers show a mixed pattern of interests and influences. It may help to explore both your personal interests and the barriers that shape your choices.";
}

function getSuggestionText(scores) {
  const stem = scores["STEM Interest"];
  const nonStem = scores["Non-STEM Interest"];
  const social = scores["Social Influence"];
  const perfection = scores["Perfectionist Trap"];
  const cultural = scores["Cultural / Social Barrier"];
  const barrierHigh = social > 60 || perfection > 60 || cultural > 60;

  if (stem > 60 && barrierHigh) {
    return "You may benefit from joining a lab, a science club, or a small research project. Your answers suggest that real interest in STEM exists, but fear or outside pressure may be making the path harder than it should feel.";
  }

  if (stem > 60 && !barrierHigh) {
    return "You seem ready to grow through more advanced STEM experiences. Try laboratory work, internships, competitions, coding projects, or research opportunities to strengthen your skills and confidence.";
  }

  if (nonStem > 60 && stem < 40) {
    return "Your answers suggest that you may feel more comfortable and motivated in non-STEM fields. Consider projects in writing, communication, education, design, languages, or social sciences where your interests can develop naturally.";
  }

  if (stem < 40 && barrierHigh) {
    return "It may help to reflect on what you truly enjoy without pressure from others. Try short exploratory projects, career conversations, or mentoring support before deciding that a path is not for you.";
  }

  if (stem > 60 && nonStem > 60) {
    return "You show potential in both analytical and creative directions. Interdisciplinary paths such as education technology, psychology, architecture, science communication, design, or research-based teaching may suit you well.";
  }

  return "Keep exploring different subjects, practical experiences, and small personal projects. Real interest often becomes clearer through action, not only through expectations or grades.";
}

function showResults() {
  quizCard.style.display = "none";
  resultCard.style.display = "block";

  const scores = calculate();
  resultsContainer.innerHTML = "";

  categories.forEach((cat) => {
    const div = document.createElement("div");
    div.className = "result-box";
    div.innerHTML = `
      <h3>${cat}</h3>
      <div class="result-score">${scores[cat]}%</div>
      <p>${getText(cat, scores[cat])}</p>
    `;
    resultsContainer.appendChild(div);
  });

  combinedResult.innerHTML = `
    <div class="combined-box">
      <h3>Combined Result</h3>
      <p>${getCombinedResultText(scores)}</p>

      <h3>Suggestion</h3>
      <p>${getSuggestionText(scores)}</p>
    </div>
  `;
}

function downloadPDF() {
  const { jsPDF } = window.jspdf;
  const doc = new jsPDF();
  const scores = calculate();

  doc.setFillColor(255, 245, 250);
  doc.rect(0, 0, 210, 297, "F");

  doc.setFillColor(236, 72, 153);
  doc.roundedRect(15, 15, 180, 20, 6, 6, "F");

  doc.setTextColor(255, 255, 255);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(20);
  doc.text("My Path - Survey Results", 105, 28, { align: "center" });

  let y = 48;

  categories.forEach((category) => {
    if (y > 240) {
      doc.addPage();
      doc.setFillColor(255, 245, 250);
      doc.rect(0, 0, 210, 297, "F");
      y = 20;
    }

    doc.setFillColor(255, 255, 255);
    doc.roundedRect(18, y, 174, 32, 5, 5, "F");

    doc.setTextColor(92, 63, 77);
    doc.setFont("helvetica", "bold");
    doc.setFontSize(14);
    doc.text(category, 24, y + 10);

    doc.setTextColor(236, 72, 153);
    doc.setFontSize(16);
    doc.text(`${scores[category]}%`, 170, y + 10);

    doc.setTextColor(78, 59, 68);
    doc.setFont("helvetica", "normal");
    doc.setFontSize(11);

    const lines = doc.splitTextToSize(getText(category, scores[category]), 160);
    doc.text(lines, 24, y + 20);

    y += 40;
  });

  if (y > 220) {
    doc.addPage();
    doc.setFillColor(255, 245, 250);
    doc.rect(0, 0, 210, 297, "F");
    y = 20;
  }

  doc.setFillColor(255, 255, 255);
  doc.roundedRect(18, y, 174, 30, 5, 5, "F");
  doc.setTextColor(92, 63, 77);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(14);
  doc.text("Combined Result", 24, y + 10);

  doc.setFont("helvetica", "normal");
  doc.setFontSize(11);
  doc.setTextColor(78, 59, 68);
  const combinedLines = doc.splitTextToSize(getCombinedResultText(scores), 160);
  doc.text(combinedLines, 24, y + 20);

  y += 40;

  if (y > 220) {
    doc.addPage();
    doc.setFillColor(255, 245, 250);
    doc.rect(0, 0, 210, 297, "F");
    y = 20;
  }

  doc.setFillColor(255, 255, 255);
  doc.roundedRect(18, y, 174, 40, 5, 5, "F");
  doc.setTextColor(92, 63, 77);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(14);
  doc.text("Suggestion", 24, y + 10);

  doc.setFont("helvetica", "normal");
  doc.setFontSize(11);
  doc.setTextColor(78, 59, 68);
  const suggestionLines = doc.splitTextToSize(getSuggestionText(scores), 160);
  doc.text(suggestionLines, 24, y + 20);

  doc.save("my-path-results.pdf");
}

if (startBtn) startBtn.addEventListener("click", showQuiz);
if (seeResultsBtn) seeResultsBtn.addEventListener("click", showOnlyResults);
if (backHomeBtn) backHomeBtn.addEventListener("click", goHome);
if (downloadBtn) downloadBtn.addEventListener("click", downloadPDF);

window.addEventListener("DOMContentLoaded", () => {
  if (welcomeScreen) welcomeScreen.style.display = "flex";
  if (quizCard) quizCard.style.display = "none";
  if (resultCard) resultCard.style.display = "none";
});
