export const SIGN_IN_PATH = "/sign-in";
export const DEFUALT_AUTH_CALLBACK = "/dashboard";

export function getAuthCallbackPath(
    callbackUrl: string | null | undefined
): string {

    if(callbackUrl?.startsWith("/") && !callbackUrl?.startsWith("//")){
        return callbackUrl;
    }
    return DEFUALT_AUTH_CALLBACK;
}
