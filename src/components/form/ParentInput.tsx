import { Input } from "antd";
import { Controller } from "react-hook-form"

type TInputProps = {
    type: string;
    name: string;
    label?: string;
};

const ParentInput = ({ type, name, label }: TInputProps) => {
    return (
        <div style={{ marginBottom: "1rem" }}>
            {label && <label htmlFor={name}>{label}: </label>}
            <Controller
                name={name}
                render={({ field }) => (
                    <Input {...field} type={type} id={name} />
                )}
            />
        </div>
    )
}

export default ParentInput