import React from 'react'

function Checkbox({ onChange, defaultChecked }) {
    return (
        <input
            type="checkbox"
            defaultChecked={defaultChecked}
            onChange={onChange}>
        </input>
    )
}

export default Checkbox;