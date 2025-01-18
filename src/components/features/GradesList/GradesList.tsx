import {
    Accordion,
    AccordionDetails,
    AccordionSummary,
    Typography,
} from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import { GroupsList } from '../GroupsList/GroupsList.tsx'
import { Grade } from '../../../store/types/types.ts'
import { useGetGradesQuery } from '../../../api/apiSlice/gradesApi.ts'
import { getRightSuffix } from '../../../utils/getRightPrefix/getRightPrefix.ts'

export function GradesList() {
    const { data: grades, isLoading, isError } = useGetGradesQuery()

    if (isLoading) {
        return <Typography>Loading grades...</Typography>
    }

    if (isError) {
        return <Typography>Error loading grades</Typography>
    }

    return (
        <div>
            {grades && grades.length > 0 ? (
                grades.map((grade: Grade) => (
                    <Accordion key={grade.id}>
                        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                            <Typography>
                                {getRightSuffix(grade.grade)}
                            </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <GroupsList gradeId={grade.id} />
                        </AccordionDetails>
                    </Accordion>
                ))
            ) : (
                <Typography>No grades found</Typography>
            )}
        </div>
    )
}
