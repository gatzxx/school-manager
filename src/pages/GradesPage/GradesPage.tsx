import { useGetGradesQuery } from '../../api/apiSlice/apiSlice.ts'
import { Loader } from '../../components/ui/Loader/Loader.tsx'
import { Grade } from '../../store/types/types.ts'

export default function GradesPage() {
    const { data: grades, isLoading, isError } = useGetGradesQuery()

    if (isLoading) return <Loader />

    if (isError) return <div>Error loading grades</div>

    if (!grades || grades.length === 0) return <div>No grades found</div>

    return (
        <ul>
            {grades.map((grade: Grade) => (
                <li key={grade.id}>{grade.grade}</li>
            ))}
        </ul>
    )
}
