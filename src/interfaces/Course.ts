export interface Course {
    id: number;
    name: string; 
    date: string; 
    teacher: string; 
    enrolled: boolean;
    details: CourseDetailsInterface;
}

export interface CourseDetailsInterface {
    description: string;
    workload: number;
}