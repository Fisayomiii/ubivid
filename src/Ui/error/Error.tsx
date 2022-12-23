import React from 'react';
import '../error/error.css';

function error() {
    return (
        <>
            <div className="err-grid">
                <div className="err-card">
                    <span>SERVER ERROR!</span>
                </div>
            </div>
        </>
    )
}

export default error