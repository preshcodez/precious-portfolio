const menuBtn = document.getElementById('menu-btn');
const navList = document.getElementById('nav-links');
const icon = menuBtn.querySelector('i');

menuBtn.addEventListener('click', () => {
  navList.classList.toggle('open');

  if (icon.classList.contains('fa-bars')) {
    icon.classList.remove('fa-bars');
    icon.classList.add('fa-xmark'); 
  } else {
    icon.classList.remove('fa-xmark');
    icon.classList.add('fa-bars');
  }
});



const resumeBtn = document.querySelectorAll('.resume-btn');

resumeBtn.forEach((btn,idx) =>{
    btn.addEventListener('click', () => {
        const resumeDetails = document.querySelectorAll('.resume__details')
        resumeBtn.forEach(btn =>{
            btn.classList.remove('activated');
        });
        btn.classList.add('activated');

        resumeDetails.forEach(details =>{
            details.classList.remove('activated');
        });
        resumeDetails[idx].classList.add('activated');
    });
})
