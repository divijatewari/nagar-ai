const issues = JSON.parse(localStorage.getItem("issues")) || [];
const box = document.getElementById("adminIssues");

issues
  .sort((a,b)=>a.priority==="high"?-1:1)
  .forEach(i=>{
    box.innerHTML += `
    <div class="issue ${i.priority}">
      ${i.category} | ${i.location}<br>
      SLA: 24 hrs active
    </div>`;
  });
