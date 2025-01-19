import {
    Accordion,
    AccordionDetails,
    AccordionSummary,
    Typography,
} from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import { StudentsList } from '../StudentsList/StudentsList.tsx'
import { Group } from '../../../store/types/types.ts'
import { useGetGroupsByGradeIdQuery } from '../../../api/groupsApi.ts'
import { useState } from 'react'
import { useTheme } from '../../../hooks/useTheme/useTheme.ts'

interface GroupsListProps {
    gradeId: number
}

export const GroupsList = ({ gradeId }: GroupsListProps) => {
    const [expandedGroupId, setExpandedGroupId] = useState<number | null>(null)
    const {
        data: groups,
        isLoading,
        isError,
    } = useGetGroupsByGradeIdQuery(gradeId)
    const { theme } = useTheme()

    const handleToggleAccordion = (groupId: number) => {
        setExpandedGroupId(expandedGroupId === groupId ? null : groupId)
    }

    if (isLoading) {
        return <Typography>Loading groups...</Typography>
    }

    if (isError) {
        return <Typography>Error loading groups</Typography>
    }

    return (
        <>
            {groups && groups.length > 0 ? (
                groups.map((group: Group) => (
                    <Accordion
                        key={group.id}
                        expanded={expandedGroupId === group.id}
                        onChange={() => handleToggleAccordion(group.id)}
                    >
                        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                            <Typography
                                sx={{ color: theme.palette.secondary.main }}
                            >
                                Group {group.group}
                            </Typography>
                        </AccordionSummary>
                        <AccordionDetails sx={{ margin: 0, padding: 0 }}>
                            {expandedGroupId === group.id && (
                                <StudentsList groupId={group.id} />
                            )}
                        </AccordionDetails>
                    </Accordion>
                ))
            ) : (
                <Typography>No groups found</Typography>
            )}
        </>
    )
}
