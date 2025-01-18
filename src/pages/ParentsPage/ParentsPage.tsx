import { Loader } from '../../components/ui/Loader/Loader.tsx'
import { Parent } from '../../store/types/types.ts'
import { useGetParentsQuery } from '../../api/apiSlice/parentsApi.ts'

export default function ParentsPage() {
    const { data: parents, isLoading, isError } = useGetParentsQuery()

    if (isLoading) return <Loader />

    if (isError) return <div>Error loading parents</div>

    if (!parents || parents.length === 0) return <div>No parents found</div>

    return (
        <ul>
            {parents.map((student: Parent) => (
                <li key={student.id}>
                    {student.name} {student.surname}
                </li>
            ))}
        </ul>
    )
}
