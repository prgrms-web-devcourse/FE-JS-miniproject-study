# TIL

## 랜덤 색상값 추출 방법 변경

이전:

* 10진수 rgba 사용
* rbga의 개별 값을 모두 랜덤으로 추출

```js
const randomColorValue = () => Math.floor(Math.random() * 256);

const randomColor = () => `rgba(${randomColorValue()}, ${randomColorValue()}, ${randomColorValue()}`;
```

변경:

- 16진수 hex color 사용
- 전체 값(`256**3`)에서 한번에 랜덤으로 추출

```js
const randomHexColor = () => `#${Math.floor(Math.random() * (256 ** 3)).toString(16)}`;
```
