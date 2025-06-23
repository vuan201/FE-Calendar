import { useState } from "react";
import { Calendar } from "rsuite";

const CustomizedCalendar = () => {
    const [value, setValue] = useState();
    return (
        <Calendar bordered onChange={(e) => setValue(e)} value={value} />
    );
};

export default CustomizedCalendar;