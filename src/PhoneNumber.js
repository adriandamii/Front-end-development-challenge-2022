import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

export default function PhoneNumber() {
    return (
        <>
            <p>Phone number</p>
            <PhoneInput
                className="phoneNumberField"
                country={"us"}
            />
        </>
    )
}