import {
    Accordion,
    AccordionDetails,
    AccordionSummary,
    Typography,
} from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import { StudentsList } from '../StudentsList/StudentsList.tsx'
import { Group } from '../../../store/types/types.ts'
import { useGetGroupsByGradeIdQuery } from '../../../api/apiSlice/groupsApi.ts'

interface GroupsListProps {
    gradeId: number
}

export const GroupsList = ({ gradeId }: GroupsListProps) => {
    const {
        data: groups,
        isLoading,
        isError,
    } = useGetGroupsByGradeIdQuery(gradeId)

    if (isLoading) {
        return <Typography>Loading groups...</Typography>
    }

    if (isError) {
        return <Typography>Error loading groups</Typography>
    }

    return (
        <div>
            {groups && groups.length > 0 ? (
                groups.map((group: Group) => (
                    <Accordion key={group.id}>
                        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                            <Typography>Group {group.group}</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <StudentsList groupId={group.id} />
                        </AccordionDetails>
                    </Accordion>
                ))
            ) : (
                <Typography>No groups found</Typography>
            )}
        </div>
    )
}
