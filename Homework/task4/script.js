let scores = [45, 82, 91, 60, 77, 33, 50, 100];

function renderScores() {
  const list = document.getElementById('scoreList');
  list.innerHTML = '';
  scores.forEach(score => {
    const li = document.createElement('li');
    li.textContent = score;

    // Color the number itself
    if (score < 50) li.style.color = '#dc3545'; 
    else if (score < 75) li.style.color = '#ffc107'; 
    else li.style.color = '#28a745'; 

    list.appendChild(li);
  });

  // Summary
  const highest = Math.max(...scores);
  const lowest = Math.min(...scores);
  const average = (scores.reduce((a,b) => a+b, 0) / scores.length).toFixed(1);
  document.getElementById('summary').textContent = 
    `Highest: ${highest} | Lowest: ${lowest} | Average: ${average}`;
}

function addScore() {
  const input = document.getElementById('scoreInput');
  const errorMsg = document.getElementById('errorMsg');
  const value = parseInt(input.value);

  if (!isNaN(value) && value >= 0 && value <= 100) {
    scores.push(value);
    input.value = '';
    errorMsg.textContent = '';
    renderScores();
  } else {
    errorMsg.textContent = 'Please enter a number between 0-100.';
  }
}


renderScores();
