
import { useState } from "react"

function Calculator() {

    const [calcDiplay, setCalcDisplay] = useState('')
    const [result, setResult] = useState('')

    const operators = ["+", "-", "/", "*", "."]
    function createNumbers() {
        const numb = []
        for (let n = 0; n < 10; n++) {
            numb.push(
                <button onClick={() => display(n.toString())} key={n}>{n}</button>
            )
            
        }
        return numb
    }

    const display = value => {
       if (operators.includes(value) && calcDiplay === '' || operators.includes(value) && operators.includes(calcDiplay.slice(-1))){
        return;
       }
        
        setCalcDisplay(calcDiplay + value)

        if(!operators.includes(value)){
            setResult(eval(calcDiplay + value).toString())
        }
    }

    function clearBtn() {
        setCalcDisplay('')
        setResult('')
    }

    function del(){
        if (calcDiplay === ''){
            return;
        }
        if (setResult.length < 0) {
            return setResult('0')
        }
        const val = calcDiplay.slice(0, -1)
        setCalcDisplay(val)
        setResult(val)
    }

    function equalBtn(){
        setCalcDisplay(eval(calcDiplay).toString())
    }
    return (
        <>
        <section className="container">
            <h2>Calculator</h2>
            <p className="display">
                <span className="result"> <span className="e-small">result</span>{ result ? <span>({result}) &nbsp; </span> : '(0)' } </span>
                <span className="figures">{calcDiplay || '0.'}</span>
            </p>

            <div className="operators">
                <button onClick={() => display('+')}>+</button>
                <button onClick={() => display('-')}>-</button>
                <button onClick={() => display('/')}>/</button>
                <button onClick={() => display('*')}>*</button>

                <button onClick={clearBtn}>clear</button>
                <button onClick={del}>del</button>
                <button onClick={equalBtn}>=</button>
            </div>

            <div className="nums">
                { createNumbers() }
                <button onClick={() => display('.')}>.</button>
                
            </div>
        </section>
        </>
    )
} 

    export default Calculator