export interface IUser {
    id?: number;
    email: string;
    UserCourses?: UserCourses[];
}

export interface ICourse {
    id?: number;
    title: string;
    description: string;
    price: number;
    thumbUrl: string;
    UserCourses?: UserCourses[];
}

export interface IUserCourses {
    id?: number;
    dataPurchased: Date;
    userId: number;
    courseId: number;
}