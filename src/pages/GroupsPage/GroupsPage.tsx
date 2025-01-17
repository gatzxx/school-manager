import { useGetGroupsQuery } from '../../api/apiSlice/apiSlice.ts'
import { Loader } from '../../components/ui/Loader/Loader.tsx'
import { Group } from '../../store/types/types.ts'

export default function GroupsPage() {
    const { data: groups, isLoading, isError } = useGetGroupsQuery()

    if (isLoading) return <Loader />

    if (isError) return <div>Error loading groups</div>

    if (!groups || groups.length === 0) return <div>No groups found</div>

    return (
        <ul>
            {groups.map((group: Group) => (
                <li key={group.id}>{group.group}</li>
            ))}
        </ul>
    )
}
