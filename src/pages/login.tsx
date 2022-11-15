import React from 'react';
import { signIn, getSession } from "next-auth/react";

export async function getServerSideProps(context: any) {
    const { req } = context;
    const session = await getSession({ req });

    if (session) {
        return {
            redirect: { destination: "/" }
        };
    }

    return {
        props: {}
    };
}
const Login = () => {
    signIn('google', { callbackUrl: '/' });
    return <></>;
};

export default Login;