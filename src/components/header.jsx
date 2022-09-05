import React, { useEffect, useRef, useState } from 'react';
import categories from "./data/categories.json";



export default function Header() {



    return (
        <div className='header'>
            <Flag />
            <LogoContainer />
            <NavBar />
        </div>
    )
}


function LogoContainer() {

    return (
        <div className="logoContainer">
            <div>
                <form action="search" className="search">
                    <i className="material-symbols-outlined">search</i>
                    <input placeholder="What can we help you find ?" type="search" />
                </form>
                <span className="logo">BIXON</span>
                <span className="sections">
                    <a href="">Order Status</a>
                    <a href="">Find a Store</a>
                    <a href="">Sign In</a>
                    <a href="">
                        <i style={{ fontVariationSettings: ["wght", 100] }} className="material-symbols-outlined">shopping_cart</i>
                    </a>
                </span>
            </div>
        </div>
    )
}

function Flag() {

    let [isRender, setIsRender] = useState(false);
    const [control, setControl] = useState(false);

    useEffect(() => {

        setTimeout(() => {

            setControl(control => !control);
            slide();
        }, 3000);

    })
    useEffect(() => {

        setIsRender(true);
        const hiddenItem = listRef.current.querySelectorAll(".announcement")[1];
        hiddenItem.classList.add("announcement--hidden");

    }, [])

    const listRef = useRef();

    const slide = () => {



        const hiddenItem = listRef.current.querySelector(".announcement--hidden");

        if (isRender) {

            let firstItem = listRef.current.querySelectorAll(".announcement")[0];
            setIsRender(false);
            firstItem.classList.add("announcement--hidden");
            hiddenItem.classList.replace("announcement--hidden", "announcement--displayed");
        }
        else {

            let displayedItem = listRef.current.querySelector(".announcement--displayed");
            displayedItem.classList.replace("announcement--displayed", "announcement--hidden");
            hiddenItem.classList.replace("announcement--hidden", "announcement--displayed")
        }




    }

    return (
        <div className="flag">
            <div>
                <i onClick={() => {

                    slide()
                }} className='material-symbols-outlined'>chevron_left</i>
                <ul ref={listRef}>
                    <li className='announcement'><a>Sign Up For 10% Off Your First Order.</a></li>
                    <li className='announcement'><a>Free Shipping, Free Returns. Always. 24x7.</a></li>
                </ul>
                <i onClick={() => {

                    slide()
                }} className='material-symbols-outlined'>chevron_right</i>
            </div>
        </div>
    )
}


function NavBar() {

    let [itemId, setItemId] = useState(1);
    let [menuStatus, setStatus] = useState(false);


    return (

        <nav onMouseLeave={() => setStatus(false)} className='navBar'>
            <ul className='navBar__nav'>
                {categories.map(ct =>
                    <li
                        style={{ display: 'flex', alignItems: "center", justifyContent: "center" }}
                        key={ct.id}
                        onMouseEnter={() => {
                            setItemId(ct.id);
                            if (ct.hasSubs === true) {
                                setStatus(true);
                            }
                            else {
                                setStatus(false)
                            }
                        }}
                        className='navBar__nav-item'>
                        <a>{ct.name}</a>{ct.hasSubs && <i className='material-symbols-outlined'>expand_more</i>}
                    </li>)}
            </ul>
            <NavBar.Menu menuDelay={400} status={menuStatus} id={itemId} />
        </nav>
    )

}
NavBar.Menu = function ({ status, id, menuDelay }) {

    let item = categories.find(ct => ct.id === id);
    const pattern = ["fits", "styles", "use", "trending", "collaborations", "clothing", "accessories", "bandsize", "bandmaterial", "bandtype"];
    const menuRef = useRef();
    const firstRender = useRef(false);

    useEffect(() => {

        firstRender.current = true;

    }, [])

    useEffect(() => {

        if (status === true) {

            if (firstRender) {
                menuRef.current.classList.add("menu-container--active-solid")
                firstRender.current = false;
            }
            else {
                menuRef.current.classList.add("menu-container--active-flu");
            }
        }
        else {
            menuRef.current.className = "menu-container";
        }

    }, [status])

    useEffect(() => {

        if (menuRef.current.classList.contains("menu-container--active-flu")) {

            setTimeout(() => {
                menuRef.current.classList.replace("menu-container--active-flu", "menu-container--active-solid");
            }, menuDelay)
        }
        else if (menuRef.current.classList.contains("menu-container--active-solid")) {
            menuRef.current.classList.remove("menu-container--active-solid");
            menuRef.current.classList.add("menu-container--active-flu");
            setTimeout(() => {
                menuRef.current.classList.replace("menu-container--active-flu", "menu-container--active-solid");
            }, menuDelay)

        }

    }, [id])




    /*
     <div className="menu">
                {pattern.map((sub, index) => item[sub] !== undefined ? <NavBar.MenuItem key={index} selectorHead={sub} selector={item[sub]} /> : undefined)}
            </div>
*/
    return (

        <div ref={menuRef} className='menu-container'>
            <div className="menu">
                {pattern.map((sub, index) => item[sub] !== undefined ? <NavBar.MenuItem key={index} selectorHead={sub} selector={item[sub]} /> : "")}
            </div>
        </div>
    )
}
NavBar.MenuItem = function ({ selectorHead, selector }) {


    return (

        <ul className='menu-item'>
            <h5>{selectorHead.toUpperCase()}</h5>
            {selector.map(link => <li key={link}><a>{link}</a></li>)}
        </ul>
    )
}



