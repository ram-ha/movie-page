#4.0 - #6.4

Props. 부모 컴포넌트로부터 자식 컴포넌트에 데이터를 보낼 수 있게 해주는 방법.

<input type="text" />
<img src="" />
우리는 syntax를 써왔음. html태그에 정보를 전송하는 것과 같이 컴포넌트에 정보를 전송할 수 있음. 이것을 props라고 함.

우리가 만든 컴포넌트는 function이다. 함수의 argument에 보낸 것들을 object형식으로 담아서 전달해줌. => props={} 객체형태!!
⚡️ Btn({text:"save changes"})
⚡️ <Btn text="save changes" />

---

\*new feature!

React.memo()
props가 변경되지 않았을 때 컴포넌트를 다시 그리지 않도록 막을 수 있음.
⚡️ const 변수명 = React.memo(컴포넌트명);
function App(){
const [value, setValue] = React.useState();
const changeValue = () => setValue("OH");
return (

<div>
<변수명 text={value}/>
<변수명 />
</div>
)
}
-> 위 코드를 실행하면 첫번째 컴포넌트의 state는 변경이 되었기 때문에 첫번째 컴포넌트만 리렌더링 되고 두번째 컴포넌트는 리렌더링 되지 않음..!
부모컴포넌트에서 어떤 state(또는 props) 변경이 일어난다면, 자녀컴포넌트들은 리렌더링이 되는 것이 정상임. 불필요한 리렌더링이 계속 일어날 경우 추후 어플리케이션이 느려지는 원인이 될 수 있음.
그걸 컨트롤 하고자 할 때에 React.memo()를 사용.

---

Prop Types
react한테 props들의 타입이 무엇인지 알려줌.
컴포넌트명.propTypes = {
prop명: PropTypes.string,
prop명: PropTypes.number,
}

    *필수 입력해야하는 props들이라면, PropTypes.지정하고 싶은 타입.isRequired 라고 지정해주기.

지정해준 타입이랑 다르게 props를 넘기면, 콘솔창에 error message로 알려줌.

설치방법 : npm i prop-types

---

useEffect();
state가 변해도 코드가 첫 렌더링 때 딱 한번만 실행될 수 있도록 도와줌.

useEffect(() => {}, []);

function useEffect(effect: EffectCallback, deps?: DependencyList): void;

- useEffect는 두개의 인자를 가지는 함수이다.
- effect에는 한번만 실행할 함수(코드)를 넣어주고, deps에는 array형태로 변화감지할 state변수를 넣어준다. react한테 지켜보라고 할 state를 넣어주는 것.
  deps는 ?옵셔널 항목이여서 빈 배열을 주면 react가 지켜볼 대상이 없기 때문에 최초 1회만 실행되고 refresh해도 재실행되지 않는다.

\*\* 재강조 : React.js에서 가장 큰 장점은 component를 refresh(새로고침)하는 것.
새로운 데이터가 들어올 때 마다 UI를 refresh함.

---

Cleanup function
컴포넌트가 사라질 때 실행시키는 함수.
잘 사용하진 않지만, 가---끔 써야할 때가 있음.
