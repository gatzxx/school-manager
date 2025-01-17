export interface StateType {
    Grade: Grade[]
    Group: Group[]
    Student: Student[]
    Teacher: Teacher[]
    Parent: Parent[]
}

export interface Grade {
    id: string
    grade: number
}

export interface Group {
    gradeId: number
    id: string
    group: string
}

export interface Student {
    groupId: number
    id: string
    grade: number
    group: string
    name: string
    surname: string
    sex: string
    birthday: string
    score: number
}

export interface Teacher {
    groupId: number
    id: string
    grade: number
    group: string
    name: string
    surname: string
    sex: string
    birthday: string
    phone: string
}

export interface Parent {
    studentId: number
    id: string
    name: string
    surname: string
    sex: string
    birthday: string
    phone: string
}
