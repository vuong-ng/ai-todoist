import { useEffect, useState } from "react";

// Debounce make sures specific function was invoked after a specified time has elapsed
// call setDebouncedValue after a <delay> time.
export function useDebounce(value: string, delay: number) {
    const [debouncedValue, setDebouncedValue] = useState(value);

    useEffect(() => {
        const handler = setTimeout(() => {
            setDebouncedValue(value);
        }, delay);
        return () => {
            clearTimeout(handler);
        }
    }, [value, delay]);
    return debouncedValue;
}