import React, { useState } from 'react'

const Columns = () => {
    const [colCount, setColCount] = useState("");



    const salam = () => {
        var indents = [];
        var n = parseInt(colCount);
        for (var i = 1; i <= n; i++) {
            indents.push(<input type="text" className={"form-control"} style={{ margin: '2rem' }}
                placeholder={`Enter Column ${i} th Title`} aria-label="" aria-describedby="basic-addon1" />);
        }
        return (
            <div>
                {indents}
                <button className={"btn btn-success btn-block"} style={{margin:'2rem'}}>Generate</button>
            </div>
        );
    }


    const generateColsHandler = () => {

        setIsGenerate(true);
        salam();
    };
    const [isGenerate, setIsGenerate] = useState(false);


    return (
        <>
            <div class="input-group mb-3 col-md-9 " style={{ marginLeft: '8rem' }}>
                <div class="input-group-prepend">
                    <button className={"btn btn-info"} type={"button"} onClick={generateColsHandler}>Generate Columns</button>
                </div>
                <input type="text" className={"form-control"} value={colCount} onChange={(e) => setColCount(e.target.value)}
                    placeholder="how many cols do you need?" aria-label="" aria-describedby="basic-addon1" />
            </div>
            {
                (isGenerate ? (<div>
                    {
                        salam()
                    }
                </div>) : (null))
            }
        </>
    )
}

export default Columns;
