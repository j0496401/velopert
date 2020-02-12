import React, { Component } from 'react';

class Counter extends Component {
    state = {
        number: 0
    }

    constructor(props) {
        super(props);
        console.log('constructor, 컴포넌트 생성자 함수 컴포넌트가 새로 만들어질 때마다 이 함수가 호출');
    }

    componentWillMount() {
        console.log('componentWillMount (deprecated), 화면에 나가나기 직전에 호출되는 API');
    }

    componentDidMount() {
        console.log('componentDidMount, 해당 컴포넌트에서 필요로하는 데이터를 요청, DOM 의 속성을 읽거나 직접 변경하는 작업');
    }

    shouldComponentUpdate(nextProps, nextState) {
        //5의 배수라면 리렌더링 하지 않음
        console.log('shouldComponentUpdate, return false 하면 업데이트를 안함');
        if (nextState.number % 5 === 0) return false;
        return true;
    }

    componentWillUpdate(nextProps, nextState) {
        console.log('componentWillUpdate, true 를 반환했을때만 호출');
    }

    componentDidUpdate(prevProps, prevState) {
        console.log('componentDidUpdate, 컴포넌트에서 render() 를 호출하고난 다음에 발생, 파라미터를 통해 이전의 값인 prevProps 와 prevState 를 조회');
    }

    handleIncrease = () => {
        const { number } = this.state;
        this.setState({
          number: number + 1
        });
    }

    handleDecrease = () => {
        this.setState(
            ({number}) => ({
                number: number - 1
            })
        );
    }

    render() {
        console.log('render');
        return (
            <div>
                <h1>카운터</h1>
                <div>값: {this.state.number}</div>
                <button onClick={this.handleIncrease}>+</button>
                <button onClick={this.handleDecrease}>-</button>
            </div>
        );
    }
}

export default Counter;