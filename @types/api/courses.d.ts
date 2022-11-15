import { ICourse } from "../models/models";

export interface ICourses extends ICourse {
    purchased: string = '0';
}
