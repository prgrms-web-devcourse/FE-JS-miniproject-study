export default function ImageSlider({ $target, initialState, onSelectImage }) {
  //  Variables
  let isInit = true;
  // DOM Create
  const $imageSlider = document.createElement("div");
  $imageSlider.className = "ImageSlider";
  $target.appendChild($imageSlider);

  this.state = initialState;

  this.setState = (nextState) => {
    this.state = nextState;

    this.render();
  };

  this.render = () => {
    const { selectedImage, images } = this.state;
    console.log(selectedImage, images);
    if (isInit) {
      $imageSlider.innerHTML = `
          <div class="ImageSlider__controller">
            <button class="prev"> < </button>
            <button class="next"> > </button>
          </div>
          <div class="ImageSlider__dots">
          ${images
            .map(
              ({ id }) =>
                `<span data-id="${id}" class="ImageSlider__dot ${
                  id === selectedImage.id ? "selected" : ""
                }"></span>`
            )
            .join("")}
          </div>
          ${images
            .map(
              ({ id, imageUrl }) => `
          <img data-id="${id}" class="ImageSlider__image fade" src="${imageUrl}" />
          `
            )
            .join("")}
          `;

      isInit = false;
    }
    const $prevDots = $imageSlider.querySelector(".ImageSlider__dot.selected");
    const $newDots = $imageSlider.querySelector(
      `span[data-id="${selectedImage.id}"]`
    );
    const $hideImage = $imageSlider.querySelector(".show");
    const $showImage = $imageSlider.querySelector(
      `img[data-id="${selectedImage.id}"]`
    );

    $prevDots?.classList.remove("selected");
    $newDots?.classList.add("selected");
    $hideImage?.classList.remove("show");
    $showImage?.classList.add("show");
  };

  $imageSlider.addEventListener("click", (e) => {
    const { selectedImage, images } = this.state;
    const { target } = e;
    const { className } = target;
    const { id } = selectedImage;
    const imagesCount = images.length;
    if (className === "prev") {
      onSelectImage(id === 0 ? imagesCount - 1 : (id - 1) % imagesCount);
      return;
    }
    if (className === "next") {
      onSelectImage((id + 1) % imagesCount);
      return;
    }
    if (className.includes("ImageSlider__dot")) {
      const { id: selectedId } = target.dataset;
      if (selectedId) onSelectImage(selectedId);
      return;
    }
  });
}
