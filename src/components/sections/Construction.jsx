import React from 'react';
import "./ConstructionModal.css";

function Construction(props) {
    return (
        <div className="modal-container">
            <input id="modal-toggle" type="checkbox" defaultChecked={true}/>
                <div className="modal-backdrop">
                    <div className="modal-content" style={{padding: "30px 30px"}}>
                        <label className="modal-close" htmlFor="modal-toggle">x</label>
                        <h2>Under Construction!</h2>
                        <hr style={{paddingTop: "5px"}}/>
                        <p>Sounds like I'm still working on my portfolio. You can come in, but things aren't as they seem.</p>
                        <label className="modal-close button" htmlFor="modal-toggle" style={{width: "80px"}}>Continue</label>
                    </div>
                </div>
        </div>
    );
}

export default Construction;
