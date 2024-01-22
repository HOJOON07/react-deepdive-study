export default function Practice() {
  // 1. 리액트의 역사를 설명해주어서 좋았습니다.

  // 2. Boolean()

  const isEven = Math.floor(Math.random() * 10) % 2 === 0;
  const hojoon = isEven ? { age: 30 } : undefined;
  const isHojoonThirty = Boolean(hojoon);
  // const isHojoonThirty = !!hojoon;

  const getHojoonAge = () => {
    if (isHojoonThirty) console.log(hojoon.age);
  };

  // 3. 크롬 개발자 도구에서 저런것도 되는군요!

  // 4. 구조 분해 할당

  const arr = [1, 2, 3, 4, 5];
  const [a, _1, _2, c] = arr;

  // 5. 강사님의 useState 덜 사용하게 하는 문제 -> 클로저의 성능

  return null;
}
