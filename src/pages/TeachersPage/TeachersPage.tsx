import { Loader } from '../../components/ui/Loader/Loader.tsx'
import { Teacher } from '../../store/types/types.ts'
import { useGetTeachersQuery } from '../../api/teachersApi.ts'

export default function TeachersPage() {
    const { data: teachers, isLoading, isError } = useGetTeachersQuery()

    if (isLoading) return <Loader />

    if (isError) return <div>Error loading teachers</div>

    if (!teachers || teachers.length === 0) return <div>No teachers found</div>

    return (
        <ul>
            {teachers.map((teacher: Teacher) => (
                <li key={teacher.id}>
                    {teacher.name} {teacher.surname}
                </li>
            ))}
        </ul>
    )
}
