import {
  Container as MapDiv,
  NaverMap,
  Marker,
  useNavermaps,
} from "react-naver-maps";

import NaverIcon from "../util/icon/naver.png";
import KakaoIcon from "../util/icon/kakao.png";

import styles from "../style/Place.module.scss";

const Place = () => {
  const navermaps = useNavermaps();

  return (
    <>
      <div className={styles.container}>
        <h2 className={styles.subTitle}>Location</h2>
        <h1 className={styles.title}>오시는길</h1>

        <h3 className={styles.place}>토평동다목적회관</h3>
        <p className={styles.subPlace}>
          제주 서귀포시 토평로50번길 4
        </p>
        <div className={styles.mapContainer}>
          <div className={styles.map}>
            <MapDiv
              style={{
                width: "100%",
                height: "200px",
              }}
            >
              <NaverMap
                defaultCenter={new navermaps.LatLng(33.270052, 126.589608)}
                defaultZoom={14}
              >
                <Marker
                  icon={{
                    content: `<div style="padding:4px 6px;background:rgb(255, 237, 237);border:1px solid black;border-radius:12px;font-size:12px;color:#333;position:relative;font-weight:bold;">
                            👰🏻‍♀️❤️🤵🏻 토평동다목적회관
                            <!-- 꼬리 배경 (연핑크 테두리) -->
  <!-- 꼬리 외곽선 (검정) -->
  <div style="position:absolute; left:50%; bottom:-11px; transform:translateX(-50%);
              width:0; height:0;
              border-left:11px solid transparent;
              border-right:11px solid transparent;
              border-top:11px solid black;"></div>

  <!-- 꼬리 내부 (배경색) -->
  <div style="position:absolute; left:50%; bottom:-10px; transform:translateX(-50%);
              width:0; height:0;
              border-left:10px solid transparent;
              border-right:10px solid transparent;
              border-top:10px solid rgb(255, 237, 237);"></div>
                          </div>`,
                    anchor: new navermaps.Point(60, 30),
                  }}
                  title="토평동다목적회관"
                  clickable={true}
                  visible={true}
                  defaultPosition={new navermaps.LatLng(33.270052, 126.589608)}
                />
              </NaverMap>
            </MapDiv>
          </div>
          <div className={styles.otherMap}>
            <a
              href="https://map.naver.com/p/entry/place/38687266?c=16.47,0,0,0,dh"
              target="_blank"
              rel="noreferrer"
            >
              <img src={NaverIcon} width="20" height="20" alt="네이버 공유" />
              네이버 지도
            </a>
            <a
              href="https://kko.kakao.com/_jJKKcOzHT"
              target="_blank"
              rel="noreferrer"
            >
              <img src={KakaoIcon} width="20" height="20" alt="카카오 공유" />
              카카오 지도
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Place;
