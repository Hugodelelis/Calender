const date = new Date()
const mounth = date.getMonth()
const year = date.getFullYear()
const day_week = date.getDay()

function mounth__year () {
    const mounth__array = [
        "Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho",
        "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"
    ];

    let mounth__select = mounth__array[mounth]
    document.querySelector('.mounth-year').innerHTML = `${mounth__select} de ${year}`
}

function day__week () {
    let sunday = document.querySelector('#sunday')
    let monday = document.querySelector('#monday')
    let tuesday = document.querySelector('#tuesday')
    let wednesday = document.querySelector('#wednesday')
    let thursday = document.querySelector('#thursday')
    let friday = document.querySelector('#friday')
    let saturday = document.querySelector('#saturday')

   day_week === 0 ? sunday.classList.add('day-week-currently') : sunday.classList.remove('day-week-currently')
   day_week === 1 ? monday.classList.add('day-week-currently') : monday.classList.remove('day-week-currently')
   day_week === 2 ? tuesday.classList.add('day-week-currently') : tuesday.classList.remove('day-week-currently')
   day_week === 3 ? wednesday.classList.add('day-week-currently') : wednesday.classList.remove('day-week-currently')
   day_week === 4 ? thursday.classList.add('day-week-currently') : thursday.classList.remove('day-week-currently')
   day_week === 5 ? friday.classList.add('day-week-currently') : friday.classList.remove('day-week-currently')
   day_week === 6 ? saturday.classList.add('day-week-currently') : saturday.classList.remove('day-week-currently')
}

mounth__year()
day__week()
