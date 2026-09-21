//mobile menu toggle
  const menuToggle = document.getElementById('menuToggle');
  const navLinks = document.getElementById('navLinks');
 
 menuToggle.onclick = () => {
    navLinks.classList.toggle('show');
    menuToggle.classList.toggle('open');
};
 
  const ex1Section = document.getElementById('ex1Section');
  const ex2Section = document.getElementById('ex2Section');
 
 document.getElementById('nav1').onclick= (e) => {
    e.preventDefault();
    ex1Section.classList.remove('hidden');
    ex2Section.classList.add('hidden');
    navLinks.classList.remove('show');
    menuToggle.classList.remove('open');
}

document.getElementById('nav2').onclick = (e) => {
    e.preventDefault();
    ex2Section.classList.remove('hidden');
    ex1Section.classList.add('hidden');
    navLinks.classList.remove('show');
    menuToggle.classList.remove('open');
}
 
  //  Exercise 1: Missing Class Points Deduction
  document.getElementById('calcAttendance').onclick = () => {
    const resultDiv = document.getElementById('attendanceResult');
    const daysInput = document.getElementById('daysMissed').value;
    const daysMissed = parseFloat(daysInput);
 
    if (daysInput === '' || isNaN(daysMissed) || daysMissed < 0) {
      resultDiv.innerHTML = "Please enter a valid number of days.";
      return;
    }
 
    const totalClasses = 25;
    const attendanceWorth = 7; 
    const pointsPerClass = attendanceWorth / totalClasses;
    const pointsLost = (pointsPerClass * daysMissed).toFixed(2);
 
    let message = "";
 
    if (daysMissed === 0) {
      message = "Perfect attendance! You're not losing any points.";
    } else if (daysMissed >= 1 && daysMissed <= 2) {
      message = "Not bad that is just a small bit from your grade. Try to keep it here.";
    } else if (daysMissed >= 3 && daysMissed <= 5) {
      message = "You're starting to lose a noticeable amount of points. Watch your attendance!";
    } else if (daysMissed >= 6 && daysMissed <= 10) {
      message = "That's a significant hit to your grade. Consider talking to your professor or showing up!.";
    } else {
      message = "oh...that's a lot of missed classes. This could seriously hurt your final grade.";
    }
 
    resultDiv.innerHTML =
      `You missed <strong>${daysMissed}</strong> day(s) of class out of ${totalClasses}.<br>` +
      `Estimated points lost from attendance: <strong>${pointsLost}%</strong><br><br>` +
      message;
  }
 
  // Exercise 2: End of Semester Counter
  document.getElementById('calcDaysLeft').onclick= () => {
    const resultDiv = document.getElementById('daysLeftResult');
 
    const today = new Date();
    const year = today.getFullYear();
    let lastDay = new Date(year, 11, 4); // December 4th
 
    if (today > lastDay) {
      lastDay = new Date(year + 1, 11, 4);
    }
 
    const msPerDay = 1000 * 60 * 60 * 24; //math
    const daysLeft = Math.ceil((lastDay - today) / msPerDay);
 
    let message = "";
 
    if (daysLeft <= 0) {
      message = "Today is the last day of class! See you next year!";
    } else if (daysLeft > 0 && daysLeft <= 14) {
      message = "The finish line is in sight, you've got this!";
    } else if (daysLeft > 14 && daysLeft <= 45) {
      message = "The semester is winding down. Finish strong.";
    } else if (daysLeft > 45 && daysLeft <= 90) {
      message = "You're in the thick of it. Take it one week at a time.";
    } else {
      message = "Plenty of semester left make sure you stay organized!";
    }
 
    resultDiv.innerHTML =
      `There are <strong>${daysLeft}</strong> day(s) left until the last day of class (Dec 4).<br><br>` +
      message;
  }
