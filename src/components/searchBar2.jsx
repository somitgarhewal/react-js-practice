import { useEffect, useRef } from "react";

const SearchBar2 = ({
    isUseDebounce = true,
    delay = 400,
    val,
    handleChange,
    handleSearch,
}) => {
    useEffect(() => {
        if (!val) return;
        if (isUseDebounce) {
            const timer = setTimeout(() => {
                handleSearch(val);
            }, delay);
            return () => clearTimeout(timer);
        } else {
            handleSearch(val);
        }
    }, [val, isUseDebounce, delay, handleSearch]);

    const handleChangeInner = (value) => {
        handleChange(value);
    };

    return (
        <input className="bg-white text-black mt-4 p-2" value={val} onChange={(e) => handleChangeInner(e.target.value)} />
    );
};

export default SearchBar2