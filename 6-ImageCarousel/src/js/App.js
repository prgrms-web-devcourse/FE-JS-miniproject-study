import ImageSlider from "./components/ImageSlider.js";
import { IMAGE_URL_END_POINT } from "./util/constants.js";

export default function App({ $target }) {
  // state
  this.state = { selectedImage: { id: 0, imageUrl: null }, images: [] };

  this.setState = (nextState) => {
    this.state = nextState;

    imageSlider.setState({ ...this.state });
  };
  // functions
  const getImages = (num = 0) => {
    const images = [];
    for (let i = 0; i < num; i++) {
      images.push({
        id: i,
        imageUrl: `${IMAGE_URL_END_POINT}${i}.jpg`,
      });
    }
    this.setState({ ...this.state, images });
  };
  const selectImage = (num = 0) => {
    const selectedImage = this.state.images[num];
    this.setState({ ...this.state, selectedImage });
  };
  // Components
  const imageSlider = new ImageSlider({
    $target,
    initialState: { ...this.state },
    onSelectImage: (id) => {
      selectImage(id);
    },
  });

  // Init
  const init = () => {
    getImages(7);
    selectImage();
  };

  init();
}
