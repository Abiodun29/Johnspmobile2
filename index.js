document.querySelectorAll('.card').forEach(card => {
  card.addEventListener('click',() => {
    document.querySelectorAll('.card').forEach(c => {
      c.style.backgroundColor = '#f4f4f4';
    });
    card.style.backgroundColor = '#d1e7ff';
    console.log("Card selected!");
    });
});

document.querySelectorAll('.card').forEach(card => {
  const btn = card.querySelector('button');
  const planName = card.querySelector('h3').innerText;
  btn.addEventListener('click',(e) => {
    e.stopPropagation();
    const form = document.getElementById('signup-form');
    form.style.display = 'block';
    document.getElementById('selected-plan').innerText = planName;
    form.scrollIntoView({ behavior: 'smooth' });
  });
});

document.getElementById('submit-btn').addEventListener('click', () => {
  const email = document.getElementById('user-email').ariaValueMax;
  if(email === "") {
    alert("please enter an email");
  } else {
    alert("success! We will contact " + email + " about the " + document.getElementById('selected-plan').innerText + "plan.");
  }
});