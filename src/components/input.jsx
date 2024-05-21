import React from "react";
import { transparent, inputstyle } from "../variables";
const Input = ({logo,handleChange,name,type,placeholder}) => {
  return (
    <>
      <div>
        {name&&<span className="my-5 flex items-center gap-4 ">
          {logo&&<img src={logo} className="w-6 h-6" alt={name}/>}
          <span>{name}</span>
        </span>}
        <input
          onChange={handleChange}
          className={transparent + inputstyle}
          name={name}
          type={type}
          placeholder={placeholder}
        />
      </div>
    </>
  );
};

export default Input;