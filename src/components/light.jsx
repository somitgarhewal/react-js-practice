function Light({ color, isActive }) {
    return (
        <div
            className="w-5 h-5 rounded-full"
            style={{ background: color, opacity: isActive ? "1" : "0.3" }}
        ></div>
    );
}

export default Light;
