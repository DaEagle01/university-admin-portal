import { FieldValues, SubmitHandler } from "react-hook-form";
import { Button, Col, Flex } from "antd";
import { toast } from "sonner";
import { zodResolver } from "@hookform/resolvers/zod";
import { useAddAcademicFacultyMutation } from "../../../redux/features/admin/academicManagement.api";
import { TResponse } from "../../../types";
import { academicFacultySchema } from "../../../schemas/academicManagement.schema";
import ParentForm from "../../../components/form/ParentForm";
import ParentInput from "../../../components/form/ParentInput";

const CreateAcademicFaculty = () => {
  const [addAcademicFaculty] = useAddAcademicFacultyMutation();
  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    const toastId = toast.loading('Creating...');
    try {
      const res = (await addAcademicFaculty(data)) as TResponse<undefined>;
      if (res.error) {
        toast.error(res.error.data.message, { id: toastId });
      } else {
        toast.success('Academic faculty created', { id: toastId });
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
          resolver={zodResolver(academicFacultySchema)}
        >
          <ParentInput name="name" type="text" label="Faculty name" />
          <Button htmlType="submit">Submit</Button>
        </ParentForm>
      </Col>
    </Flex>
  );
};

export default CreateAcademicFaculty;
