import { Form, Input } from "antd";
import { Controller } from "react-hook-form"

type TInputProps = {
    type: string;
    name: string;
    label?: string;
};

const ParentInput = ({ type, name, label }: TInputProps) => {
    return (
        <div style={{ marginBottom: "1rem" }}>
            <Controller
                name={name}
                render={({ field }) => (
                    <Form.Item label={label}>
                        <Input {...field} type={type} id={name} size="large" />
                    </Form.Item>
                )}
            />
        </div>
    )
}

export default ParentInput