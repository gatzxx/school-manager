import { useGetStudentsQuery } from '../../api/apiSlice/apiSlice.ts'
import { Loader } from '../../components/ui/Loader/Loader.tsx'
import { Student } from '../../store/types/types.ts'

export default function StudentsPage() {
    const { data: students, isLoading, isError } = useGetStudentsQuery()

    if (isLoading) return <Loader />

    if (isError) return <div>Error loading students</div>

    if (!students || students.length === 0) return <div>No students found</div>

    return (
        <ul>
            {students.map((student: Student) => (
                <li key={student.id}>
                    {student.name} {student.surname}
                </li>
            ))}
        </ul>
    )
}
