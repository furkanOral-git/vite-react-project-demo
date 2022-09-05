import React, { useEffect } from "react";

export default function Album({ photos }) {
    let urls = useRef([]);
    useEffect(() => {
        photos.map(p => urls.current.push(p.url));
    }, [])
    return (
        <div className="album">
            <img className="album__img1" src={urls.current[0]} alt="" />
            <img className="album__img2" src={urls.current[1]} alt="" />
            <img className="album__img3" src={urls.current[2]} alt="" />
        </div>
    )
}