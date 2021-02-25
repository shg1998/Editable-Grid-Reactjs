import React, { useState } from 'react'

const Columns = (props) => {
    const [colCount, setColCount] = useState("");
    
    const [isGenerate, setIsGenerate] = useState(false);
    
    var datas =[];

    const CreateTableHandler =()=>{
        var n = parseInt(colCount);
        for (let i =1 ; i <= n; i++) {
            datas.push(document.getElementById(i.toString()).value);
        }
        props.setColumns(datas);
        props.colHidden(false);
        
        console.log(datas);
    }

    const salam = () => {
        var indents = [];
        var n = parseInt(colCount);
        for (var i = 1; i <= n; i++) {
            indents.push(<input type="text" className={"form-control"} style={{ margin: '2rem' }} id={i}
                placeholder={`Enter Column ${i} th Title`} aria-label="" aria-describedby="basic-addon1" />);
        }
        return (
            <div>
                {indents}
                <button className={"btn btn-success btn-block"} style={{margin:'2rem'}} onClick={CreateTableHandler} >Generate</button>
            </div>
        );
    }


    const generateColsHandler = () => {

        setIsGenerate(true);
        salam();
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
                    {
                        salam()
                    }
                </div>) : (null))
            }
        </>
    )
}

export default Columns;
