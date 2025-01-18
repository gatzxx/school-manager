import { Loader } from '../../components/ui/Loader/Loader.tsx'
import { Group } from '../../store/types/types.ts'
import { useGetGroupsQuery } from '../../api/apiSlice/groupsApi.ts'

export default function GroupsPage() {
    const { data: groups, isLoading, isError } = useGetGroupsQuery()

    if (isLoading) return <Loader />

    if (isError) return <div>Error loading groups</div>

    if (!groups || groups.length === 0) return <div>No groups found</div>

    return (
        <ul>
            {groups.map((group: Group) => (
                <li key={group.id}>Group {group.group}</li>
            ))}
        </ul>
    )
}
