import { useMemo } from 'react';

import styles from '../style/BackgroundLayer.module.scss';

const BackgroundLayer = ({ color = "white" }) => {

  const styleColor = useMemo(() => color === "white" ? styles.white : styles.pink, [color])

  return <div className={`${styles.container} ${styleColor}`}></div>
}

export default BackgroundLayer;