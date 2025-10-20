import { useLocation } from "react-router-dom";

export default function CurrentLocationInfo() {
    const location = useLocation();
    return (
        <>
            <div>
                <h3>Informasi Lokasi Saat Ini</h3>
                <p>Pathname: {location.pathname}</p>
                <p>Search (Query Params): {location.search}</p>
                <p>Hash: {location.hash}</p>
                {location.state && <p>State: {JSON.stringify(location.state)}</p>}
            </div>
        </>
    )
}