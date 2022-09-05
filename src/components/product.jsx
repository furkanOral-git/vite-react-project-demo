import React, { useRef } from "react";
import "../public/product.scss";

export default function Product({ product }) {
    let imgRef = useRef()

    const changeImg = (varitie) => {

        imgRef.current.setAttribute("src", varitie);
    }
    return (

        <div className="product">
            <img ref={imgRef} src={product.varieties.at(0)} alt="" className="product__img" />
            <div className="product__varieties">
                {product.varieties.map((vr, key) => (key <= 3) ? < img onMouseEnter={() => changeImg(vr)} key={key} src={vr} ></img> : "")}
                {product.varieties.length > 4 && <span className="product__varieties-count">+ {product.varieties.length - 4} more</span>}
            </div>
            {product.tag !== undefined ? <span className="product__tag">{product.tag}</span> : ""}
            <div className="product__detail">
                <h4 className="product__name">{product.name}</h4>
                <span className="product__price">{product.price}</span>
            </div>
            <div className="product__rate">
            </div>
        </div >
    )
}