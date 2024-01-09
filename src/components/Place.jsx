import { useEffect, useRef, useState } from 'react';
import { Container as MapDiv, NaverMap, Marker, useNavermaps } from 'react-naver-maps'
import { Drawer, Card, Space, Tag, Button } from 'antd';
import { ArrowRightOutlined } from '@ant-design/icons';

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

  useEffect(() => {
    // infoContainerRef가 observer 에 감지되면 drawerOpen을 true로 변경
    // infoContainerRef 가 감지되는 기준은 infoContainerRef의 600px 밑으로 감지되면 drawerOpen을 true로 변경
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setDrawerOpen(true);
          observer.unobserve(infoContainerRef.current);
        }
      });
    }, {
      root: null,
      rootMargin: '0px',
      threshold: 1,
    });

    observer.observe(infoContainerRef.current);

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

      <h3 className={styles.place}>해군호텔W웨딩홀 노블레스홀</h3>
      <p className={styles.subPlace}>서울시 영등포구 가마산로 538 (신길동 2001-4)</p>
      <div className={styles.mapContainer}>
        <div className={styles.map}>
          <MapDiv
            style={{
              width: '100%',
              height: '200px',
            }}
          >
            <NaverMap
              defaultCenter={new navermaps.LatLng(37.502330, 126.916914)}
              defaultZoom={14}
            >
              <Marker
                title="해군호텔W웨딩홀 노블레스홀"
                visible={true}
                defaultPosition={new navermaps.LatLng(37.503609, 126.915614)}
              />
            </NaverMap>
          </MapDiv>

        </div>
        <div className={styles.otherMap}>
          <a href="https://map.naver.com/p/entry/place/13088510?c=16.47,0,0,0,dh" target="_blank" rel="noreferrer">
            <img src={NaverIcon} width="20" height="20" alt="네이버 공유" />
            네이버 지도
          </a>
          <a href="https://map.kakao.com/?map_type=TYPE_MAP&itemId=8146688&q=%ED%95%B4%EA%B5%B0%ED%98%B8%ED%85%94+W%EC%9B%A8%EB%94%A9%ED%99%80&urlLevel=1&urlX=481320&urlY=1112283" target="_blank" rel="noreferrer">
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
            <p className={styles.content}>무료 셔틀버스 운행</p>
            <p className={styles.subscription}>1호선 대방역 3번 출구 / 7호선, 신림선 보라매역 5번 출구 <br /> (예식시간 1시간 30분 전부터 15-20분 간격 운행)</p>
          </div>
        </div>
        <div className={styles.item}>
          <div className={styles.iconWrapper}>
            <SubwayIcon width={20} height={20} />
          </div>
          <div className={styles.contentWrapper}>
            <p className={styles.content}>지하철</p>
            <p className={styles.subscription}>- 1호선 대방역(19253 정류장) 마을버스 07번 이용 서울해군호텔 하차</p>
            <p className={styles.subscription}>- 7호선 보라매역 5번 출구에서 200m 영진시장삼거리에서 우회전 300m</p>
            <p className={styles.subscription}>- 신림선 서울지방병무청역 2번 출구에서 100m 해군회관 앞 사거리에서 우회전 400m</p>
          </div>
        </div>
        <div className={styles.item}>
          <div className={styles.iconWrapper}>
            <BusIcon width={20} height={20} />
          </div>
          <div className={styles.contentWrapper}>
            <p className={styles.content}>버스</p>
            <p className={styles.subscription}>150, 461, 500, 505, 753, 5531, 5534, 5612, 5623, 5633 강남중학교 버스정류장 하차 메가커피 방향으로 횡당보도 건너 직진 500m</p>
          </div>
        </div>
        <div className={styles.item}>
          <div className={styles.iconWrapper}>
            <CarIcon width={20} height={20} />
          </div>
          <div className={styles.contentWrapper}>
            <p className={styles.content}>승용차</p>
            <p className={styles.subscription}>주차직원 안내에 따라 해군호텔w웨딩홀 주차장 이용 <br />(2시간 무료 주차) </p>
          </div>
        </div>
      </div>
    </div>
    <Drawer title="부산, 대전 버스 안내" placement="right" onClose={onClose} closeIcon={<ArrowRightOutlined />} open={drawerOpen} styles={{ header: { paddingLeft: '12px' } }}>
      <Space direction="vertical" size={"large"}>
        <Card type="inner" title="부산" style={{ width: 'calc(100vw - 48px)' }}>
          <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <p style={{ display: 'flex', alignItems: 'center', marginBottom: '0' }}><Tag color="blue">장소</Tag> 동래지하철역 3번 출구 공영주차장 입구</p>
            <p style={{ display: 'flex', alignItems: 'center', marginBottom: '30px' }}><Tag color="cyan">시간</Tag> 24.03.09(토) 07:00</p>
            <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
              <Space size="small">
                <Button onClick={() => window.href = 'https://map.naver.com/p/entry/place/16817831?c=18.14,0,0,0,dh'} style={{ width: '100px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                  <img src={NaverIcon} width="20" height="20" alt="네이버 공유" />
                  네이버 지도
                </Button>
                <Button onClick={() => window.href = 'https://kko.to/Ed5Xj0Bxzf'} style={{ width: '100px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                  <img src={KakaoIcon} width="20" height="20" alt="카카오 공유" />
                  카카오 지도
                </Button>
              </Space>
            </div>
          </div>
        </Card>
        <Card type="inner" title="대전" style={{ width: 'calc(100vw - 48px)' }}>
          <p style={{ display: 'flex', alignItems: 'center' }}><Tag color="blue">장소</Tag> 둔산중로 108 한국토지공사 대전충남지역본부 사옥</p>
          <p style={{ display: 'flex', alignItems: 'center' }}><Tag color="cyan">시간</Tag> 24.03.09(토) 10:00</p>
          <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
            <Space size="small">
              <Button onClick={() => window.href = 'https://map.naver.com/p/entry/place/13299021?c=20.00,0,0,0,dh'} style={{ width: '100px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <img src={NaverIcon} width="20" height="20" alt="네이버 공유" />
                네이버 지도
              </Button>
              <Button onClick={() => window.href = 'https://kko.to/ezMmREjkCd'} style={{ width: '100px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <img src={KakaoIcon} width="20" height="20" alt="카카오 공유" />
                카카오 지도
              </Button>
            </Space>
          </div>
        </Card>
      </Space>

    </Drawer>
  </>
}

export default Place;
