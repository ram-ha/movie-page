#1.2 - #2.6

React JS는 UI를 interactive(상호작용)하게 만들어준다.

---

JSX는 JS를 확장한 문법.

- HTML과 같은 규칙을 사용하고 property를 태그의 속성처럼 적으면 됨.

  const h3 = React.createElement(
  "h3",
  {
  id: "title",
  onMouseEnter: () => console.log("clicked"),
  },
  "Hello I'm a title"
  );

--->

const Title = (<h3 id="title" onMouseEnter={() => console.log("clicked")}>
Hello I'm a title</h3>
);

그러나, 브라우저는 JSX를 바로 읽을 수 없음. 브라우저가 이해할 수 있는 형태로 바꿔주는 역할을 하는 것이 BABEL!

---
