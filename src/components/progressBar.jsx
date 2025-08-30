function ProgressBar({ completedPercent }) {
    console.log('completedPercent', completedPercent)
return (
    <div>
        <div className="h-4 w-full rounded-md bg-black">
            <div
                className='h-4 bg-white rounded-md transition-all'
                style={{ width: `${completedPercent}%` }}
            ></div>
        </div>
        <div>{completedPercent}%</div>
    </div>
);
}

export default ProgressBar;
