import { useState } from 'react'
import {
    Accordion,
    AccordionDetails,
    AccordionSummary,
    Typography,
} from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import { GroupsList } from '../GroupsList/GroupsList.tsx'
import { Grade } from '../../../store/types/types.ts'
import { useGetGradesQuery } from '../../../api/gradesApi.ts'
import { getRightSuffix } from '../../../utils/getRightPrefix/getRightPrefix.ts'
import { useTheme } from '../../../hooks/useTheme/useTheme.ts'

export function GradesList() {
    const [expandedGradeId, setExpandedGradeId] = useState<number | null>(null)
    const { data: grades, isLoading, isError } = useGetGradesQuery()
    const { theme } = useTheme()

    const handleToggleAccordion = (gradeId: number) => {
        setExpandedGradeId(expandedGradeId === gradeId ? null : gradeId)
    }

    if (isLoading) {
        return <Typography>Loading grades...</Typography>
    }

    if (isError) {
        return <Typography>Error loading grades</Typography>
    }

    return (
        <>
            {grades && grades.length > 0 ? (
                grades.map((grade: Grade) => (
                    <Accordion
                        key={grade.id}
                        expanded={expandedGradeId === grade.id}
                        onChange={() => handleToggleAccordion(grade.id)}
                    >
                        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                            <Typography
                                sx={{ color: theme.palette.primary.main }}
                            >
                                {getRightSuffix(grade.grade)}
                            </Typography>
                        </AccordionSummary>
                        <AccordionDetails
                            sx={{
                                margin: 0,
                                padding: 0,
                                backgroundColor:
                                    theme.palette.background.default,
                            }}
                        >
                            {expandedGradeId === grade.id && (
                                <GroupsList gradeId={grade.id} />
                            )}
                        </AccordionDetails>
                    </Accordion>
                ))
            ) : (
                <Typography>No grades found</Typography>
            )}
        </>
    )
}
