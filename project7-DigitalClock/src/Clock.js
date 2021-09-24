export default function Clock({ $target }) {
  const $clock = document.createElement('div');
  $clock.className = 'clock';
  $target.append($clock);

  const getTime = () => {
    const date = new Date();
    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const dayNum = date.getDay();
    const addZero = (time) => (time < 10 ? '0' + time : time);
    const hours = addZero(date.getHours() % 12 ? date.getHours() % 12 : '12');
    const minutes = addZero(date.getMinutes());
    const seconds = addZero(date.getSeconds());
    const ampm = date.getHours() < 12 ? 'AM' : 'PM';
    $clock.textContent = `${days[dayNum]} ${hours}:${minutes}:${seconds} ${ampm}`;
  };

  const setBgColor = () => {
    if (new Date().getHours() < 11) {
      $target.className += ' dawn';
    } else if (new Date().getHours() > 19) {
      $target.className += ' night';
    } else {
      $target.className += ' day';
    }
  };

  this.init = () => {
    getTime();
    setBgColor();
    setInterval(getTime, 1000);
  };

  this.init();
}
