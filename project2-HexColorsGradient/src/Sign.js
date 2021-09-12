export default function Sign({ $target }) {
  const $signContainer = document.createElement("div");
  $target.append($signContainer);

  this.state = {
    direction: "right",
    colorCode: {
      start: "#ffffff",
      end: "#ffffff",
    },
  };

  this.setState = (nextState) => {
    this.state = nextState;
    this.render();
  };

  this.render = () => {
    const { direction, colorCode } = this.state;

    $signContainer.innerHTML = /* html */ `
      <h1>아래에 있는 버튼을 클릭해서<br />랜덤 그라데이션 조합을 만들어보세요.</h1>
      <h2>background: linear-gradient(to ${direction}, #${colorCode.start}, #${colorCode.end})</h2>
    `;
  };

  this.render();
}
