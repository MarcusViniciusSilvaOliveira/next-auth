import axios from "axios";

const apiRoute = process.env.NEXT_PUBLIC_API_URL_DEV;

const GetAll = async (endPoint: string, config?: {}) => await axios.get(`${apiRoute}${endPoint}`, config);

const Create = async (endPoint: string, data: any) => await axios.post(`${apiRoute}${endPoint}`, data);

const Methods = { GetAll, Create };
export default Methods;