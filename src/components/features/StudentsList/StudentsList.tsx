import { List, ListItem, Typography } from '@mui/material'
import { Student } from '../../../store/types/types.ts'
import { useGetStudentsByGroupIdQuery } from '../../../api/apiSlice/studentsApi.ts'

interface StudentsListProps {
    groupId: number
}

export const StudentsList = ({ groupId }: StudentsListProps) => {
    const {
        data: students,
        isLoading,
        isError,
    } = useGetStudentsByGroupIdQuery(groupId)

    if (isLoading) {
        return <Typography>Loading students...</Typography>
    }

    if (isError) {
        return <Typography>Error loading students</Typography>
    }

    return (
        <List>
            {students && students.length > 0 ? (
                students.map((student: Student) => (
                    <ListItem key={student.id}>
                        <Typography>
                            {student.name} {student.surname}
                        </Typography>
                    </ListItem>
                ))
            ) : (
                <Typography>No students found</Typography>
            )}
        </List>
    )
}
