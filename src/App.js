import React, { useState, useEffect } from "react";
import DropDown from "./components/DropDown";
import Searchbar from "./components/Searchbar";
import Table from "./components/Table";
import EditableCell from "./components/EditableCell";
import Columns from "./components/Columns";
// import columns from "./data";

function App() {

  const [rowdata, setRowData] = useState([{ username: "", email: "", gender: "", phone: "" }]);
  const [filteredData, setFilteredData] = useState([]);
  const [skipPageReset, setSkipPageReset] = useState(false);
  const [hiddenElements, setHiddenElements] = useState(true);
  const [colNames, setColNames] = useState([]);


  useEffect(() => {
    setSkipPageReset(false);

  }, [rowdata]);

  const onItemClick = (e) => {
    console.log("e", e);
    if (e === "all") {
      setFilteredData(rowdata);
    } else {
      const result = rowdata.filter((item) => item.gender === e);
      setFilteredData(result);
    }
  };

  const onSearchbarChange = (e) => {
    const value = e.target.value;

    if (value === "") {
      setFilteredData(rowdata);
    } else {
      if (filteredData.length > 0) {
        const result = filteredData.filter((item) => item.email === value);

        setFilteredData(result);
      } else {
        const result = rowdata.filter((item) => item.email === value);

        setFilteredData(result);
      }
    }
  };

  const onAddRowClick = () => {
    setRowData(
      rowdata.concat({ username: "", email: "", gender: "", phone: "" })
    );
  };



  const columns = [
    // {
    //   Header: "Name",
    //   accessor: "username",
    //   Cell: EditableCell,
    // },
    // {
    //   Header: "Email",
    //   accessor: "email",
    //   Cell: EditableCell,
    // },
    // {
    //   Header: "Gender",
    //   accessor: "gender",
    //   Cell: ({
    //     value: initialValue,
    //     row: { index },
    //     column: { id },
    //     updateMyData,
    //   }) => {
    //     const onItemClick = (value) => {
    //       console.log("value", value);
    //       updateMyData(index, id, value);
    //     };

    //     return (
    //       <DropDown
    //         options={[
    //           { label: "Male", value: "male" },
    //           { label: "Female", value: "female" },
    //         ]}
    //         title={"Select Gender"}
    //         selectedValue={initialValue}
    //         onItemClick={onItemClick}
    //       />
    //     );
    //   },
    // },
    // {
    //   Header: "Phone",
    //   accessor: "phone",
    //   Cell: EditableCell,
    // },
  ];

  for (let i = 0; i < colNames.length; i++) {
    columns.push({
      Header: colNames[i],
      accessor: colNames[i],
      Cell: EditableCell,
    })
  }


  const updateMyData = (rowIndex, columnId, value) => {
    // We also turn on the flag to not reset the page
    setSkipPageReset(true);
    setRowData((old) =>
      old.map((row, index) => {
        if (index === rowIndex) {
          return {
            ...old[rowIndex],
            [columnId]: value,
          };
        }
        return row;
      })
    );
  };

  return (
    <div className="container mx-auto" >
      <div className="flex justify-center mt-8">
        {
          (!hiddenElements ? (<Searchbar onChange={onSearchbarChange} />) : null)
        }
      </div>
      {
        (hiddenElements ? (<Columns colHidden={setHiddenElements} setColumns={setColNames} style={{ textAlign: 'center' }} />) : null)
      }
      <button hidden={hiddenElements}
        onClick={onAddRowClick}
        className={"btn btn-success"}>
        Add Row
      </button>

      <button hidden={hiddenElements}
        onClick={()=>setHiddenElements(true)}
        style={{marginLeft:'1rem'}}
        className={"btn btn-warning"}>
        Edit columns
      </button>

      <div className="flex justify-center mt-8" >
        {
          (!hiddenElements ? (<Table
            columns={columns}
            data={filteredData.length > 0 ? filteredData : rowdata}
            updateMyData={updateMyData}
            skipPageReset={skipPageReset}
          />) : null)
        }

      </div>

    </div>
  );
}

export default App;
