import { appendIfPageNotExists } from '../utils/render.js'
import { padDateNumber } from '../utils/date.js'

const weekdays = ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN']

export default function DigitalClockPage({ $target }) {
  const $page = document.createElement('div')
  $page.className = 'DigitalClock'

  this.state = {
    interval: null,
  }

  const $clock = document.createElement('div')
  $clock.className = 'Clock'

  $page.appendChild($clock)

  this.render = () => {
    appendIfPageNotExists($target, $page)

    this.state.interval = setInterval(() => {
      const today = new Date()
      const time = `
        <div class="Clock__day">
            ${weekdays[today.getDay()]}
        </div>
        <div class="Clock__number">
            ${padDateNumber(today.getHours() === 0 ? 12 : today.getHours())}
        </div> 
        <div class="Clock__bar">:</div>
        <div class="Clock__number">
            ${padDateNumber(today.getHours())}
        </div>
        <div class="Clock__bar">:</div>
        <div class="Clock__number">
            ${padDateNumber(today.getSeconds())}
        </div>
        <div class="Clock__ampm">
            ${today.getHours() >= 12 ? 'PM' : 'AM'}
        </div>
      `

      $clock.innerHTML = time
    }, 1000)
  }

  window.addEventListener('popstate', () => {
    clearInterval(this.state.interval)
  })
}
