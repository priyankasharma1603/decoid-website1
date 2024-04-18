function makeCalendar(year, month) {
  const frag = document.createDocumentFragment();
  const months = document.querySelector('.months');
  const month_template = document.querySelector('#month-template');
  const clone = month_template.content.cloneNode(true);
  frag.append(clone)
  const tgt = frag.firstElementChild;
  const template = document.querySelector('#day-template');
  const date = new Date(year, month - 1, 1);
  while(date.getMonth() === month - 1) {
    const parts = date
      .toLocaleDateString(undefined, {weekday:"long", month:"short", day:"numeric"})
      .split(/,? /)
      .map(s => s.toUpperCase());
    const clone = template.content.cloneNode(true);
    clone.querySelectorAll(".day > div").forEach((el, index) => el.textContent = parts[index]);
    tgt.appendChild(clone);
    date.setDate(date.getDate() + 1);
  }
  months.append(frag);
}
makeCalendar(2023, 11); // code takes one away from month
makeCalendar(2023, 12); // code takes one away from month