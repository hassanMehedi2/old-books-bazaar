import React from 'react';

const RangeSlider = ({ range, setRange }) => {


    return (
        <div>
            <input type="range" min={0} max="1500" step={50} value={range} onChange={(e) => setRange(e.target.value)} className="range range-xs [--range-shdw:[#777777]]" />
            
        </div>
    );
};

export default RangeSlider;