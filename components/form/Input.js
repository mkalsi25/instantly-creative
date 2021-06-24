import React from "react";

export default function Input({ label, type, name, placeholder, note }) {
  return (
    <div className="grid gap-[8px]">
      <label htmlFor={name} className="text-[16px] capitalize  font-medium">
        {label}
      </label>
      <input
        type={type}
        name={name}
        id={label}
        placeholder={placeholder}
        className="w-full py-[8px] placeholder-[#848484] outline-none focus:outline-none border-b-2 focus:border-[#F44D44] hover:border-[#F44D44]"
      />
      {note && <span className="text-[16px] text-[#848484] pt-6">{note}</span>}
    </div>
  );
}
