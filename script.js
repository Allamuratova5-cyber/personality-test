let questions = [
{q:"I enjoy meeting new people.", trait:"extraversion"},
{q:"I like trying new ideas.", trait:"openness"},
{q:"I keep my workspace organized.", trait:"conscientiousness"},
{q:"I often worry about things.", trait:"neuroticism"},
{q:"I enjoy helping others.", trait:"agreeableness"},
{q:"I feel comfortable leading groups.", trait:"extraversion"},
{q:"I enjoy art and creativity.", trait:"openness"},
{q:"I complete tasks carefully.", trait:"conscientiousness"},
{q:"I get stressed easily.", trait:"neuroticism"},
{q:"I trust people easily.", trait:"agreeableness"},
{q:"I enjoy social events.", trait:"extraversion"},
{q:"I am curious about many things.", trait:"openness"},
{q:"I plan my schedule.", trait:"conscientiousness"},
{q:"I feel anxious under pressure.", trait:"neuroticism"},
{q:"I like cooperating with others.", trait:"agreeableness"},
{q:"I talk a lot in groups.", trait:"extraversion"},
{q:"I like learning new cultures.", trait:"openness"},
{q:"I finish what I start.", trait:"conscientiousness"},
{q:"I get nervous easily.", trait:"neuroticism"},
{q:"I care about people's feelings.", trait:"agreeableness"}
];

let scores={
extraversion:0,
openness:0,
conscientiousness:0,
neuroticism:0,
agreeableness:0
};

let currentQuestion=0;

function loadQuestion(){

document.getElementById("question").innerText=
questions[currentQuestion].q;

document.getElementById("progress").innerText=
"Step "+(currentQuestion+1)+" of "+questions.length;

let percent=((currentQuestion+1)/questions.length)*100;

document.getElementById("progress-fill").style.width=
percent+"%";

}

function answer(value){

let trait=questions[currentQuestion].trait;

scores[trait]+=value;

currentQuestion++;

if(currentQuestion<questions.length){

loadQuestion();

}else{

showResult();

}

}

function showResult(){

document.querySelector(".quiz").style.display="none";

new Chart(document.getElementById("chart"),{
type:"bar",
data:{
labels:[
"Extraversion",
"Openness",
"Conscientiousness",
"Neuroticism",
"Agreeableness"
],
datasets:[{
label:"Personality Traits",
data:[
scores.extraversion,
scores.openness,
scores.conscientiousness,
scores.neuroticism,
scores.agreeableness
]
}]
}
});

}

loadQuestion();