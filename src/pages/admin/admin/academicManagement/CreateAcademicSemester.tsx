import { FieldValues, SubmitHandler } from "react-hook-form";
import ParentForm from "../../../../components/form/ParentForm"
import { Button, Col, Flex } from "antd";
import ParentSelect from "../../../../components/form/ParentSelect";
import { semesterOptions } from "../../../../constants/semester";
import { monthOptions } from "../../../../constants/global";
import { toast } from "sonner";
import { zodResolver } from "@hookform/resolvers/zod";
import { academicSemesterSchema } from "../../../../schemas/academicManagement.schema";
import { useAddAcademicSemesterMutation } from "../../../../redux/features/admin/academicManagement.api";
import { TResponse } from "../../../../types";

const currentYear = new Date().getFullYear();
const yearOptions = [0, 1, 2, 3, 4].map((number) => ({
    value: String(currentYear + number),
    label: String(currentYear + number),
}));

const CreateAcademicSemester = () => {
    const [addAcademicSemester] = useAddAcademicSemesterMutation();
    const onSubmit: SubmitHandler<FieldValues> = async (data) => {
        const toastId = toast.loading('Creating...');
        const name = semesterOptions[Number(data?.name) - 1]?.label;

        const semesterData = {
            name,
            code: data.name,
            year: data.year,
            startMonth: data.startMonth,
            endMonth: data.endMonth,
        };
        console.log(semesterData);
        try {
            const res = (await addAcademicSemester(semesterData)) as TResponse<undefined>;
            console.log(123, res);
            if (res.error) {
                toast.error(res.error.data.message, { id: toastId });
            } else {
                toast.success('Semester created', { id: toastId });
            }
        } catch (err: any) {
            toast.error(err?.data?.message || 'Something went wrong', { id: toastId });
        }
    };

    return (
        <Flex justify="center" align="center">
            <Col span={6}>
                <ParentForm
                    onSubmit={onSubmit}
                    resolver={zodResolver(academicSemesterSchema)}
                >
                    <ParentSelect label="Name" name="name" options={semesterOptions} />
                    <ParentSelect label="Year" name="year" options={yearOptions} />
                    <ParentSelect
                        label="Start Month"
                        name="startMonth"
                        options={monthOptions}
                    />
                    <ParentSelect label="End Month" name="endMonth" options={monthOptions} />
                    <Button htmlType="submit">Submit</Button>
                </ParentForm>
            </Col>
        </Flex>
    )
}

export default CreateAcademicSemester