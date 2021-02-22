import React, { useState } from 'react'

const Columns = () => {
    const [colCount, setColCount] = useState("");
    const [colName, setColName] = useState([]);
    const [isGenerate, setIsGenerate] = useState(false);

    const generateColsHandler = () => {
        console.log(colCount);
        for (let i = 0; i < colCount; i++) {
            setColName("0");
        }
        setIsGenerate(true);
    };

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
                    salam
                </div>) : null)
            }
        </>
    )
}

export default Columns;
