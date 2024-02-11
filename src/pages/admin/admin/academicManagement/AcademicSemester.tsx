import { useGetAllSemestersQuery } from "../../../../redux/features/academicSemester/academicSemesterApi"

const AcademicSemester = () => {
    const { data, isLoading, error } = useGetAllSemestersQuery(undefined);
    console.log(data)
    return (
        <div>AcademicSemester</div>
    )
}

export default AcademicSemester