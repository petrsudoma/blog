import { AxiosError } from "axios";
import { useSnackbar } from "notistack";
import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { signInUser, signUpUser } from "../../api";
import LoadingCircle from "../../components/LoadingCircle";
import { LoginContext } from "../../context/login";
import { uploadError } from "../../utils/apiError";

import { Box, SwitchModeButton, Wrapper } from "./components";
import SignIn from "./SignIn";
import SignUp from "./Signup";

function Auth() {
    const [signIn, setSignIn] = useState<boolean>(true);
    const [loading, setLoading] = useState<boolean>(false);
    const loginContext = useContext(LoginContext);
    const navigate = useNavigate();
    const { enqueueSnackbar } = useSnackbar();

    async function handleSubmit(username: string, password: string) {
        setLoading(true);
        try {
            let res;
            if (signIn) {
                res = await signInUser(username, password);
            } else {
                res = await signUpUser(username, password);
            }

            localStorage.setItem("access_token", res.data.access_token);
            localStorage.setItem(
                "token_expiration",
                new Date(
                    new Date().getTime() + res.data.expires_in * 1000
                ).toString()
            );
            loginContext?.signIn();

            navigate("/");
        } catch (err) {
            if (err instanceof AxiosError) {
                enqueueSnackbar(err.response?.data.message, {
                    variant: "error",
                });
            } else {
                const [message, options] = uploadError();
                enqueueSnackbar(message, options);
            }
        } finally {
            setLoading(false);
        }
    }

    return (
        <Wrapper>
            <Box signIn={signIn}>
                {signIn ? (
                    <SignIn handleSubmit={handleSubmit} />
                ) : (
                    <SignUp handleSubmit={handleSubmit} />
                )}
                <SwitchModeButton
                    onClick={() => setSignIn((prevState) => !prevState)}
                >
                    {signIn ? "Sign up" : "Sign in"}
                </SwitchModeButton>
            </Box>

            {loading && <LoadingCircle />}
        </Wrapper>
    );
}

export default Auth;
