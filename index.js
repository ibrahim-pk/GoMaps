import { useState, useRef, useEffect } from "react";

const GoMapsLocation = ({ apiKey, initialLocation = { lat: 22.7948058, lng: 91.1065366 } }) => {
    const [location, setLocation] = useState(initialLocation); 
    const mapRef = useRef(null);
    const inputRef = useRef(null);
    const markerRef = useRef(null);

    useEffect(() => {
        const script = document.createElement("script");
        script.src = `https://maps.gomaps.pro/maps/api/js?key=${apiKey}&libraries=geometry,places&callback=initMap`;
        script.async = true;
        script.defer = true;
        document.body.appendChild(script);

        window.initMap = () => {
            if (!mapRef.current) return;
            const mapInstance = new window.google.maps.Map(mapRef.current, {
                center: location,
                zoom: 13,
            });

            markerRef.current = new window.google.maps.Marker({
                position: location,
                map: mapInstance,
                title: "Live Location 🚑",
                animation: window.google.maps.Animation.DROP
            });

            const autocomplete = new window.google.maps.places.Autocomplete(inputRef.current);
            autocomplete.bindTo("bounds", mapInstance);

            autocomplete.addListener("place_changed", () => {
                const place = autocomplete.getPlace();
                if (!place.geometry) {
                    console.log("No details available for the input: '" + place.name + "'");
                    return;
                }

                if (place.geometry.viewport) {
                    mapInstance.fitBounds(place.geometry.viewport);
                } else {
                    mapInstance.setCenter(place.geometry.location);
                    mapInstance.setZoom(17);
                }

                const newLocation = {
                    lat: place.geometry.location.lat(),
                    lng: place.geometry.location.lng(),
                };

                setLocation(newLocation);
                markerRef.current.setPosition(place.geometry.location);
            });
        };

        return () => {
            document.body.removeChild(script);
        };
    }, [location, apiKey]);

    return (
        <div className="bg-gray-100 py-10 px-5 md:px-0">
            <div className="mx-auto max-w-screen-lg">
                <h1 className="text-xl font-bold my-5">Live Location</h1>
                <div className="relative w-full h-[400px]">
                    <div ref={mapRef} id="map" className="w-full h-full"></div>
                </div>
            </div>
        </div>
    );
};

export default GoMapsLocation;
