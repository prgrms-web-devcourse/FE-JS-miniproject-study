export default function NotFoundPage({ $target }) {
  const $page = document.createElement("div");
  $page.className = "notFound page";

  this.render = () => {
    $page.innerHTML = /* html */ `
      <div class="noticeBox">
        <h2>⛔ Not Found ⛔</h2>
        <p>잘못된 접근입니다</p>
      </div>
    `;

    $target.append($page);
  };
}
