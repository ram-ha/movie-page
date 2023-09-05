#3.0 - #3.9

React에서 state를 배워보자.
state는 기본적으로 데이터가 저장되는 곳.
React는 UI에서 바뀐 부분만 업데이트를 해준다.

---

const data = React.useState();
console.log(data);
입력 후 콘솔창에서 확인하면,
(2) [undefined, f] 라고 undefined값과 함수를 지닌 배열이 찍힘. - 첫번째 요소는 data값이고 useState()안에 초기값을 설정할 수 있음. - 두번째 요소는 data값을 변경하는 함수임.

    * 추가 JS 이해설명.
    const x = [1, 2, 3] 배열이 있다고 하자.
        방법 1
            const a = x[0];
            const b = x[1];
            const c = x[2];
            이렇게 하나하나씩 꺼내서 변수에 담을 수 있지.
            자네,,귀찮은 방법을 계속 줄줄이 쓸것인..가?
        ->
        방법 2
            const [a, b, c] = x;
            이렇게 해놓으면 배열 요소마다 각 a, b, c 이름(변수명)을 할당해줌.
            3줄을 1줄로 만든 셈.

const [counter, setCounter] = React.useState(0);
이 한줄 코드로 React.useState에서 data값과 data변경하는 함수를 가지고 리렌더링을 해준다. state값이 함수에 의해 변경될 때 마다 리렌더링.

    const onClick = () => {
        setCounter(counter + 1);
        <!--
            onClick은 버튼을 클릭했을 때 호출되는 함수,
            setCounter는 onClick함수가 호출 될 때마다
            counter라는 state값을 변경해주고 리렌더링 해주는 함수.
        -->
    }
    return (
        <div>
            <h3>Total clicks: {counter}</h3>
            <button onClick={onClick}>Click me</button>
        </div>
    )

\*\* 결론, React는 데이터(state)가 바뀔 때마다 바뀐 부분(state)만 바뀌고 컴포넌트를 리렌더링하고 UI를 자동으로 refresh함.

---

state를 변경해주는 함수에서 보다 안전하게 쓰는 방법
-1. 직접 값을 설정해주거나 변경해주는 방법
-2. 함수를 전달해서 설정해주는 방법

    const onClick = () => {
        setCounter(counter + 1);
        setCounter((current) => current + 1);
        <!-- 현재 state를 바탕으로 다음 state를 계산할 때, 1번째보다 2번째
        방법이 더 안전함. current가 확실히 현재 값을 보장하고 있기 때문.
        예상치 못한 업데이트가 어디선가 일어난다 해도 혼동을 방지해줌. -->
    }
