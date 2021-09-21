export const appendIfPageNotExists = ($target, $page) => {
  if (!$target.querySelector(`.${$page.className}`)) {
    $target.appendChild($page)
  }
}
