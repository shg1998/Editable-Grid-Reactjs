import React from "react";

const Searchbar = ({ onChange, value }) => {
  return (
    <div className="flex justify-center w-1/2 sm:col-span-2">
        <input
          id="company"
          value={value}
          placeholder="Search ... "
          style={{marginBottom:'1rem'}}
          onChange={onChange}
          className={"form-control"}
        />
      </div>
  );
};

export default Searchbar;
