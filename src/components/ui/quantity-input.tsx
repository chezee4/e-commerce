import { useProducts } from "@/context";
import { StoreProducts } from "@/types";
import React, { useState } from "react";
import { shallow } from "zustand/shallow";

type QuantityInputProps = {
  id: string;
  changeCurrent?: (value: number) => void;
};
const QuantityInput = ({ id, changeCurrent }: QuantityInputProps) => {
  const toggle = useProducts((state: StoreProducts) => state.toggle, shallow);
  const value = useProducts((state: StoreProducts) => state.value, shallow);
  const setValue = useProducts(
    (state: StoreProducts) => state.setValue,
    shallow
  );
  return (
    <div className=" hidden mm:block">
      <button
        className=" p-[7px_16px_11px_15px] lg:p-[14px_16px_12px_15px] bg-[#eeecec]  rounded-[15px_0px_0px_15px]"
        onClick={(e) => toggle(e, id)}
      >
        -
      </button>
      <input
        type="number"
        value={value}
        onChange={(e) => {
          setValue(+e.target.value);
          changeCurrent && changeCurrent(value);
        }}
        min={1}
        max={10}
        className="p-[7px_7px_11px_7px] lg:p-[14px_0px_12px_14px] text-center bg-[#f8f8f8] outline-none"
        readOnly
      />
      <button
        className="p-[7px_16px_11px_15px] lg:p-[14px_16px_12px_15px] bg-[#eeecec] rounded-[0px_15px_15px_0px]"
        type="button"
        onClick={(e) => toggle(e, id)}
      >
        +
      </button>
    </div>
  );
};

export default QuantityInput;
