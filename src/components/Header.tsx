import React from "react";

import styles from "./Header.module.css"

interface Props {

}

const Header = (props: Props) => {
    return (
        <header className={styles.header}>
            <h1>React + Todo TS</h1>
        </header>
    )
}

export default Header