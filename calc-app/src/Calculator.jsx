
import { useEffect, useState } from "react"

function Calculator() {

    const [calcDiplay, setCalcDisplay] = useState('')
    const [result, setResult] = useState('')
    const [isDarkMode, setIsDarkMode] = useState(() => {
        return localStorage.getItem('theme') === 'dark';
    });

 

    useEffect(() => {
        if (isDarkMode) {
            document.body.classList.add('dark-mode');
        } else {
            document.body.classList.remove('dark-mode');
        }
    }, [isDarkMode]);

    function toggleTheme() {
        setIsDarkMode((prevMode) => {
            const newMode = !prevMode;
            localStorage.setItem('theme', newMode ? 'dark' : 'light');
            return newMode;
        });
    }

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
            <button className="theme" onClick={toggleTheme}>
            <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="#000"><path d="M480-360q50 0 85-35t35-85q0-50-35-85t-85-35q-50 0-85 35t-35 85q0 50 35 85t85 35Zm-.23 72Q400-288 344-344.23q-56-56.22-56-136Q288-560 344.23-616q56.22-56 136-56Q560-672 616-615.77q56 56.22 56 136Q672-400 615.77-344q-56.22 56-136 56ZM216-444H48v-72h168v72Zm696 0H744v-72h168v72ZM444-744v-168h72v168h-72Zm0 696v-168h72v168h-72ZM269-642 166-742l51-55 102 104-50 51Zm474 475L642-268l49-51 103 101-51 51ZM640-691l102-101 51 49-100 103-53-51ZM163-217l105-99 49 47-98 104-56-52Zm317-263Z"/></svg>

            <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="#000"><path d="M479.96-144Q340-144 242-242t-98-238q0-140 97.93-238t237.83-98q13.06 0 25.65 1 12.59 1 25.59 3-39 29-62 72t-23 92q0 85 58.5 143.5T648-446q49 0 92-23t72-62q2 13 3 25.59t1 25.65q0 139.9-98.04 237.83t-238 97.93Zm.04-72q82 0 148.78-47.07Q695.55-310.15 727-386q-20 5-39.67 8.5Q667.67-374 648-374q-113.86 0-193.93-80.07Q374-534.14 374-648q0-19.67 3.5-39.33Q381-707 386-727q-75.85 31.45-122.93 98.22Q216-562 216-480q0 110 77 187t187 77Zm-14-250Z"/></svg>
            </button>
            <h2>Calculator</h2>
            <div className="display">
                <div className="result">
                <p> <span className="e-small"></span>{ result ? <span>({result}) &nbsp; </span> : '(0)' } </p>
                </div>
                <div className="figures">
                <p>{calcDiplay || '0.'}</p>
                </div>
            </div>

            <div className="operators">
                <button onClick={() => display('+')} className="f-keys">+</button>
                <button onClick={() => display('-')} className="f-keys">-</button>
                <button onClick={() => display('/')} className="f-keys">/</button>
                <button onClick={() => display('*')} className="f-keys">*</button>

                <button onClick={clearBtn} className="clear key">clr</button>
                <button onClick={del} className="del key">del</button>
                <button onClick={equalBtn} className="equal">=</button>
                { createNumbers() }
                <button onClick={() => display('.')}>.</button>
            </div>

        </section>
        </>
    )
} 

    export default Calculator