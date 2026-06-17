import { useEffect, useState } from "react";

export const useFetch = (
    URL: string,
    method: "GET" | "POST" | "PUT" | "PATCH" | "DELETE",
    payload?,
    shouldSkip?: boolean,
) => {
    const [isLoading, setIsLoading] = useState(true);
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);

    const stringifiedPayload = JSON.stringify(payload);

    useEffect(() => {
        const fetchData = () => {
            setError(null)
            setIsLoading(true);
            setData(null)
            fetch(URL, { method, body: stringifiedPayload })
                .then((res) => {
                    if (!res.ok) throw new Error("Error fetching Data");
                    return res.json();
                })
                .then((res) => {
                    setData(res);
                })
                .catch((e) => {
                    setError(e);
                })
                .finally(() => {
                    setIsLoading(false);
                });
        };
        if (!shouldSkip) {
            fetchData();
        }
    }, [URL, method, shouldSkip, stringifiedPayload]);
    return { isLoading, data, error };
};
