import './Calcu.css';
function Calculator() {
    return (
        <div className="Calculator">
            <div id="container">
                <div className="calcu">
                    <div id="result"></div>
                    <div className="buttons">
                        <button className="operator" id="clearall">C</button>
                        <button className="button operator" id="%">%</button>
                        <button className="button operator" id="+">+</button>
                        <button id="backspace" className="operator"><i className="fa-solid fa-delete-left"></i></button>
                        <br />
                        <button className="button" id="7">7</button>
                        <button className="button" id="8">8</button>
                        <button className="button" id="9">9</button>
                        <button className="button operator" id="/">/</button>
                        <br />
                        <button className="button" id="4">4</button>
                        <button className="button" id="5">5</button>
                        <button className="button" id="6">6</button>
                        <button className="button operator" id="*">*</button>
                        <br />
                        <button className="button" id="1">1</button>
                        <button className="button" id="2">2</button>
                        <button className="button" id="3">3</button>
                        <button className="button operator" id="-">-</button>
                        <br />
                        <button className="operator" id="sign">+/-</button>
                        <button className="button" id="0">0</button>
                        <button className="button operator" id=".">.</button>
                        <button className="operator" id="=">=</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Calculator;
