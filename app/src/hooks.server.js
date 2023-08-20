import pb from "$lib/pocketbase"

export const handle = async({event, resolve}) => {
    pd.authStore.loadFromCookie(event.request.headers.get("cookie") || "")
    
    if (pd.authStore.isValid) {
        try {
            await pd.collection("users").authRefresh()
        } catch(_) {
            await pd.authRefresh.clear()
        }
    }

    event.locals.pd = pd
    event.locals.user = structuredClone(pd.authStore.model)

    const response = await resolve(event)
    response.headers.set(
        "set-cookie",pd.authStore.exportToCookie({httpOnly: false})
    )

    return response;
}