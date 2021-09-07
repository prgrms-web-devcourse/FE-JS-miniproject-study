export default function ColorText({ $target, init }) {
  const $ColorText = document.createElement("div");
  $ColorText.className = "background-text";
  $target.appendChild($ColorText);

  this.state = init;
  this.setState = (nextState) => {
    this.state = nextState;
    this.render();
  };
  this.render = () => {
    $ColorText.innerHTML = `
      <h2>버튼을 누르면 랜덤 그라데이션 배경이 적용됩니다.</h2>
      <br>
      <h3>background: linear-gradient(to right, ${this.state.firstColor}, ${this.state.secondColor});<h3>
    `;
  };
  this.render();
}
