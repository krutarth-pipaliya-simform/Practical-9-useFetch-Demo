import { useFetch } from "../hooks/useFetch";

export const DataContainer = () => {
    const { isLoading, data, error } = useFetch(
        "https://jsonplaceholder.typicode.com/posts",
        "GET",
    );

    return (
        <div>
            {isLoading ? "Loading ...." : error ? JSON.stringify(error) : JSON.stringify(data)}
        </div>
    );
};
