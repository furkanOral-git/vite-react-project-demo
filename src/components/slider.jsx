import React, { useRef, useEffect, useState, forwardRef } from 'react';




export default function Slider({ title, length, btnName, children }) {

    const sliderRef = useRef();
    const navRef = useRef();

    const updateNav = (cubeId) => {

        const array = [...navRef.current.childNodes];
        if (array.some(e => e.classList.contains("slider__nav-item--active"))) {
            array.find(e => e.classList.contains("slider__nav-item--active")).classList.remove("slider__nav-item--active")
        }
        let item = array.at(cubeId);

        item.classList.add("slider__nav-item--active");
    }

    return (
        <div className="sliderContainer">
            <i onClick={(e) => {
                e.preventDefault()
                let id = Slider.slick([...sliderRef.current.childNodes], "Left");
                updateNav(id);
            }
            } className="material-symbols-outlined">arrow_back_ios</i>
            <div ref={sliderRef} className="slider">
                {title !== '' ? <h2 className='slider__head'>{title}</h2> : ''}
                {btnName !== undefined && <button className="section__item-shop slider__btn">{btnName}</button>}
                {children}
            </div>
            <i onClick={(e) => {
                e.preventDefault()
                let id = Slider.slick([...sliderRef.current.childNodes], "Right");
                updateNav(id);
            }} className="material-symbols-outlined">arrow_forward_ios</i>
            <SliderNavRef ref={navRef} sliderRef={sliderRef} many={length} />
        </div>

    )
}
let currentLeft = 0;
Slider.slick = (DomElements, direction = "", index = -1) => {

    const items = DomElements.filter(e => e.classList.contains("slider__item"))

    switch (direction) {
        case "Right":

            if (index === -1) {

                if (items[currentLeft + 1] !== undefined) {
                    currentLeft += 1;
                    if ((items.length - 1) - currentLeft < 4) {

                        items[currentLeft].scrollIntoView(
                            {
                                behavior: "smooth",
                                block: "nearest",
                                inline: "end"
                            }
                        )
                    }
                    else {

                        items[currentLeft].scrollIntoView(
                            {
                                behavior: "smooth",
                                block: "nearest",
                                inline: "start"
                            }
                        )
                    }
                }
                else {

                    currentLeft = 0;
                    items[currentLeft].scrollIntoView(
                        {
                            behavior: "smooth",
                            block: "nearest",
                            inline: "start"
                        }
                    )
                }
                return currentLeft;
            }
            else {

                if (items[index] !== undefined) {
                    currentLeft = index;

                    items[currentLeft].scrollIntoView(
                        {
                            behavior: "smooth",
                            block: "nearest",
                            inline: "start"
                        }
                    )
                }
                return currentLeft;
            }

        case "Left":

            if (index === -1) {
                if (items[currentLeft - 1] !== undefined) {

                    currentLeft -= 1;
                    if (currentLeft <= 3) {

                        items[currentLeft].scrollIntoView(
                            {
                                behavior: "smooth",
                                block: "nearest",
                                inline: "start"
                            }
                        )
                    }
                    else {

                        items[currentLeft].scrollIntoView(
                            {
                                behavior: "smooth",
                                block: "nearest",
                                inline: "end"
                            }
                        )
                    }
                }
                else {

                    currentLeft = items.length - 1;
                    items[currentLeft].scrollIntoView(
                        {
                            behavior: "smooth",
                            block: "nearest",
                            inline: "start"
                        }
                    )
                }
                return currentLeft;
            }
            else {

                if (items[index] !== undefined) {
                    currentLeft = index;

                    items[currentLeft].scrollIntoView(
                        {
                            behavior: "smooth",
                            block: "nearest",
                            inline: "end"
                        }
                    )
                }
                return currentLeft;
            }


        case "":
            currentLeft = index
            items[currentLeft].scrollIntoView(
                {
                    behavior: "smooth",
                    block: "nearest",
                    inline: "end"
                }
            )
    }

}

const SliderNavRef = forwardRef(SliderNav);

function SliderNav({ many, sliderRef }, ref) {

    let [cubeId, setCubeId] = useState(0);


    useEffect(() => {

        const array = [...ref.current.childNodes];
        if (array.some(e => e.classList.contains("slider__nav-item--active"))) {
            array.find(e => e.classList.contains("slider__nav-item--active")).classList.remove("slider__nav-item--active")
        }
        let item = array.at(cubeId);

        item.classList.add("slider__nav-item--active");

    }, [cubeId])

    return (
        <ul ref={ref} className="slider__nav">
            {
                (NavCubes(many, sliderRef, setCubeId))
            }
        </ul>
    )
}
function NavCubes(many, sliderRef, setCubeId) {
    let cubes = [];
    for (let i = 0; i < many; i++) {
        cubes.push(<li onClick={() => {
            setCubeId(i);
            if (i < 4 && i >= 0) {

                Slider.slick([...sliderRef.current.childNodes], "Right", i);
            }
            else {

                Slider.slick([...sliderRef.current.childNodes], "", i)
            }
        }
        } key={i} className="slider__nav-item"></li>)
    }
    return cubes;

}
export function SliderItem(props) {

    return (
        <div className={`slider__item slider__item${props.index}`}>
            {props.children}
        </div>
    )
}



