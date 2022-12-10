import React from "react";
export default function TextField(props) {
   
    const {
        name,
        value,
        error,
        onChange,
        icon,
        type,
        label,
        onKeyUp,
        className,
        placeholder = "",
        min = 1, max = 999999,
        unit,
        maxLength = 99999,
       disabled
    } = props;
    return (
        <div className={`input-wrapper ${className}`}>
            {label && <div className="label">{label}</div>}
            <div className={`position-relative`}>
                {icon && <img alt="" src={icon} className="input-icon" />}
                <input placeholder={placeholder} name={name} value={value} 
                disabled={disabled}
                type={"text"}
                    onChange={onChange} key={label} max={max} maxLength={maxLength}
                   
                />
               
            </div>
        </div>
    );
}
