import { Button, Card, Row } from "antd";
import { FieldValues } from "react-hook-form"
import { useLoginMutation } from "../../redux/features/auth/authApi";
import { useAppDispatch } from "../../redux/hooks";
import { TUser, setUser } from "../../redux/features/auth/authSlice";
import { verifyToken } from "../../utils/verifyToken";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import ParentForm from "../../components/form/ParentForm";
import ParentInput from "../../components/form/ParentInput";


const Login = () => {
    const [login] = useLoginMutation()
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const defaultValues = {
        userId: 'A-0001',
        password: 'admin123',
    };

    const onSubmit = async (data: FieldValues) => {
        const toastId = toast.loading("Logging in...")
        try {
            const userInfo = {
                id: data.userId,
                password: data.password
            };
            const res = await login(userInfo).unwrap();
            const user = verifyToken(res.data.accessToken) as TUser;
            dispatch(setUser({ user: user, token: res.data.accessToken }));
            navigate(`/${user.role}/dashboard`)
            toast.success(`Logged in as ${user.role} ${user.userId}`, { id: toastId, duration: 2000 })
        } catch (error) {
            toast.error("Something went wrong", { id: toastId, duration: 2000 })
        }
    };

    return (
        <Row justify="center" align="middle" style={{ height: "100vh" }}>
            <Card>
                <ParentForm onSubmit={onSubmit} defaultValues={defaultValues}>
                    <ParentInput type="text" name="userId" label="ID" />
                    <ParentInput type="password" name="password" label="Password" />
                    <Button htmlType="submit">Login</Button>
                </ParentForm>
            </Card>
        </Row>
    )
}

export default Login