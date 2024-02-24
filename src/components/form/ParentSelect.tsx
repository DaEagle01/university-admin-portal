import { Form, Select } from 'antd';
import { Controller } from 'react-hook-form';

type TParentSelectProps = {
    label: string;
    name: string;
    options: { value: string; label: string; disabled?: boolean }[] | undefined;
    disabled?: boolean;
};

const ParentSelect = ({ label, name, options, disabled }: TParentSelectProps) => {
    return (
        <Controller
            name={name}
            render={({ field, fieldState: { error } }) => (
                <Form.Item label={label}>
                    <Select
                        style={{ width: '100%' }}
                        {...field}
                        options={options}
                        size="large"
                        disabled={disabled}
                    />
                    {error && <small style={{ color: 'red' }}>{error.message}</small>}
                </Form.Item>
            )}
        />
    );
};

export default ParentSelect;
