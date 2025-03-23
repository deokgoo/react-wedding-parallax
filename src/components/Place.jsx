import { useEffect, useRef, useState } from 'react';
import { Container as MapDiv, NaverMap, Marker, useNavermaps } from 'react-naver-maps'
import { Drawer, Card, Space, Tag, Button, Tooltip } from 'antd';
import { ArrowRightOutlined, RightCircleFilled } from '@ant-design/icons';

import { ReactComponent as BusIcon } from '../util/icon/bus-solid.svg';
import { ReactComponent as SubwayIcon } from '../util/icon/train-subway-solid.svg';
import { ReactComponent as CarIcon } from '../util/icon/car-solid.svg';

import NaverIcon from '../util/icon/naver.png';
import KakaoIcon from '../util/icon/kakao.png';

import styles from '../style/Place.module.scss';

const Place = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const infoContainerRef = useRef(null);
  const navermaps = useNavermaps();
  const [touchstartX, setTouchstartX] = useState(0);
  const [touchendX, setTouchendX] = useState(0);

  const onClose = () => {
    setDrawerOpen(false);
  }

  const onOpen = () => {
    setDrawerOpen(true);
  }

  useEffect(() => {
    // 앱 모션 컨트롤 위함
    document.addEventListener('touchstart', e => {
      setTouchstartX(e.changedTouches[0].screenX);
    })

    document.addEventListener('touchend', e => {
      setTouchendX(e.changedTouches[0].screenX);
    })
  }, []);

  useEffect(() => {
    if (touchendX > touchstartX) {
      setDrawerOpen(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [touchendX]);

  return <>
    <div className={styles.container}>
      <h2 className={styles.subTitle}>Location</h2>
      <h1 className={styles.title}>오시는길</h1>

      <h3 className={styles.place}>마벨리에 시흥점</h3>
      <p className={styles.subPlace}>서울시 금천구 시흥대로 201 홈플러스 시흥점 7층</p>
      <div className={styles.mapContainer}>
        <div className={styles.map}>
          <MapDiv
            style={{
              width: '100%',
              height: '200px',
            }}
          >
            <NaverMap
              defaultCenter={new navermaps.LatLng(37.452173, 126.900735)}
              defaultZoom={14}
            >
              <Marker
                icon={{
                  content: `<div style="padding:4px 6px;background:rgb(255, 237, 237);border:1px solid black;border-radius:12px;font-size:12px;color:#333;position:relative;font-weight:bold;">
                            👰🏻‍♀️❤️🤵🏻 마벨리에 시흥점
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
                  anchor: new navermaps.Point(60, 30)
                }}
                title="마벨리에 시흥점"
                clickable={true}
                visible={true}
                defaultPosition={new navermaps.LatLng(37.452173, 126.900735)}
              />
            </NaverMap>
          </MapDiv>

        </div>
        <div className={styles.otherMap}>
          <a href="https://map.naver.com/p/entry/place/1565649256?c=16.47,0,0,0,dh" target="_blank" rel="noreferrer">
            <img src={NaverIcon} width="20" height="20" alt="네이버 공유" />
            네이버 지도
          </a>
          <a href="https://map.kakao.com/?map_type=TYPE_MAP&itemId=598016577&q=%EB%A7%88%EB%B2%A8%EB%A6%AC%EC%97%90+%EC%8B%9C%ED%9D%A5%EC%A0%90&urlLevel=3&urlX=478055&urlY=1097925" target="_blank" rel="noreferrer">
            <img src={KakaoIcon} width="20" height="20" alt="카카오 공유" />
            카카오 지도
          </a>
        </div>
      </div>
      <div className={styles.infoContainer} ref={infoContainerRef}>
        <div className={styles.item}>
          <div className={styles.iconWrapper}>
            <BusIcon width={20} height={20} />
          </div>
          <div className={styles.contentWrapper}>
            <p className={styles.content}>버스환승</p>
            <p className={styles.subscription}>마을버스 04 / 06 / 07</p>
            <p className={styles.content}>하차정류장</p>
            <p className={styles.subscription}>시흥사거리 하차</p>
          </div>
        </div>
        <div className={styles.item}>
          <div className={styles.iconWrapper}>
            <SubwayIcon width={20} height={20} />
          </div>
          <div className={styles.contentWrapper}>
            <p className={styles.content}>지하철</p>
            <p className={styles.subscription}>1호선 금천구청역에서 도보로 15분</p>
          </div>
        </div>
        <div className={styles.item}>
          <div className={styles.iconWrapper}>
            <CarIcon width={20} height={20} />
          </div>
          <div className={styles.contentWrapper}>
            <p className={styles.content}>자차 이용</p>
            <p className={styles.subscription}>주차 등록 후 4시간 무료 주차 가능</p>
          </div>
        </div>
      </div>
    </div>
  </>
}

export default Place;
