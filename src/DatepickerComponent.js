import React, { useState, useRef } from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Form } from "react-bootstrap";

const DatepickerComponent = () => {
    const [selectedDate, setSelectedDate] = useState([]);

    let handleOnChange = (event) => {
        setSelectedDate(event.target.value);
    }
    return (
        <>
            <div>
                <div className="row">
                    <div className="col-md-4">
                        <Form.Group controlId="dob">
                            <Form.Label>Choose Date</Form.Label>
                            <Form.Control type="date" name="orderDate" onChange={handleOnChange} placeholder="Order Date" />
                        </Form.Group>
                        <br />
                        <h5>Selected Date: {selectedDate}</h5>
                    </div>
                </div>
            </div>
        </>
    )
}
export default DatepickerComponent;