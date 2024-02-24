import { FieldValues, SubmitHandler } from "react-hook-form";
import { Button, Col, Flex } from "antd";
import { toast } from "sonner";
import { zodResolver } from "@hookform/resolvers/zod";
import { useAddAcademicDepartmentMutation, useGetAcademicFacultiesQuery } from "../../../redux/features/admin/academicManagement.api";
import { TResponse } from "../../../types";
import { academicDepartmentSchema } from "../../../schemas/academicManagement.schema";
import ParentSelect from "../../../components/form/ParentSelect";
import ParentForm from "../../../components/form/ParentForm";
import ParentInput from "../../../components/form/ParentInput";

const CreateAcademicDepartment = () => {
  const { data: facultyOptions, isLoading } = useGetAcademicFacultiesQuery(undefined);
  const [addAcademicDepartment] = useAddAcademicDepartmentMutation();

  const options = facultyOptions?.data?.map((data: { _id: string; name: string; }) => ({
    value: data._id,
    label: data.name
  }))

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    const toastId = toast.loading('Creating...');
    try {
      const res = (await addAcademicDepartment(data)) as TResponse<undefined>;
      if (res.error) {
        toast.error(res.error.data.message, { id: toastId });
      } else {
        toast.success('Academic department created', { id: toastId });
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
          resolver={zodResolver(academicDepartmentSchema)}
        >
          <ParentInput name="name" type="text" label="Department name" />
          <ParentSelect label="Academic Faculty" name="academicFaculty" options={options} disabled={isLoading} />
          <Button htmlType="submit">Submit</Button>
        </ParentForm>
      </Col>
    </Flex>
  )
};

export default CreateAcademicDepartment;
