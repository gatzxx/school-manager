import {
    useReactTable,
    getCoreRowModel,
    ColumnDef,
    flexRender,
} from '@tanstack/react-table'
import { Student } from '../../../store/types/types.ts'
import { useGetStudentsByGroupIdQuery } from '../../../api/studentsApi.ts'
import {
    Typography,
    Paper,
    Table,
    TableHead,
    TableBody,
    TableRow,
    TableCell,
} from '@mui/material'
import { calculateAge } from '../../../utils/calculateAge/calculateAge.ts'
import { useTheme } from '../../../hooks/useTheme/useTheme.ts'

interface StudentsListProps {
    groupId: number
}

export const StudentsList = ({ groupId }: StudentsListProps) => {
    const {
        data: students,
        isLoading,
        isError,
    } = useGetStudentsByGroupIdQuery(groupId)
    const { theme } = useTheme()

    const columns: ColumnDef<Student>[] = [
        {
            header: 'ID',
            accessorKey: 'id',
        },
        {
            header: 'Name',
            accessorKey: 'name',
        },
        {
            header: 'Surname',
            accessorKey: 'surname',
        },
        {
            header: 'Grade',
            accessorKey: 'grade',
        },
        {
            header: 'Group',
            accessorKey: 'group',
        },
        {
            header: 'Sex',
            accessorKey: 'sex',
        },
        {
            header: 'Age',
            cell: ({ row }) => {
                const birthday = row.original.birthday
                return calculateAge(birthday)
            },
        },
        {
            header: 'Score',
            accessorKey: 'score',
            cell: ({ getValue }) => getValue<number>(),
        },
    ]

    const table = useReactTable({
        data: students || [],
        columns,
        getCoreRowModel: getCoreRowModel(),
    })

    if (isLoading) {
        return <Typography>Loading students...</Typography>
    }

    if (isError) {
        return <Typography>Error loading students</Typography>
    }

    return (
        <Paper>
            <Table>
                <TableHead>
                    {table.getHeaderGroups().map((headerGroup) => (
                        <TableRow key={headerGroup.id}>
                            {headerGroup.headers.map((header) => (
                                <TableCell
                                    key={header.id}
                                    sx={{ color: theme.palette.text.primary }}
                                >
                                    {flexRender(
                                        header.column.columnDef.header,
                                        header.getContext()
                                    )}
                                </TableCell>
                            ))}
                        </TableRow>
                    ))}
                </TableHead>
                <TableBody>
                    {table.getRowModel().rows.map((row) => (
                        <TableRow key={row.id}>
                            {row.getVisibleCells().map((cell) => (
                                <TableCell
                                    key={cell.id}
                                    sx={{ color: theme.palette.text.secondary }}
                                >
                                    {flexRender(
                                        cell.column.columnDef.cell,
                                        cell.getContext()
                                    )}
                                </TableCell>
                            ))}
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
            {students && students.length === 0 && (
                <Typography align="center" sx={{ p: 2 }}>
                    No students found
                </Typography>
            )}
        </Paper>
    )
}
