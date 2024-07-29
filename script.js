function askForSicklingStatus(){
  const sicklingStatus = prompt('What is your sickling status:');
  const partnerStatus = prompt('What is your partner sickling status:');

  if (sicklingStatus === 'AA' && partnerStatus === 'AA') {document.getElementById("sicklingStatus").textContent = `Your children will be fine;`
} else {  {document.getElementById("sicklingStatus").textContent = `Your children will not be fine;`

}
}
}
