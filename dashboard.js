let issues = JSON.parse(localStorage.getItem("issues")) || [];

function submitIssue() {
  const issue = {
    location: location.value,
    category: category.value,
    desc: desc.value,
    priority: Math.random() > 0.7 ? "high" : "medium",
    time: Date.now()
  };

  issues.push(issue);
  localStorage.setItem("issues", JSON.stringify(issues));
  render();
}

function render() {
  issueList.innerHTML = "";
  issues.forEach(i => {
    issueList.innerHTML += `
      <div class="issue ${i.priority}">
        <b>${i.category}</b> – ${i.location}<br>
        Priority: ${i.priority.toUpperCase()}
      </div>`;
  });
}
render();
