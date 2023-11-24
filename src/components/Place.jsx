import { ReactComponent as BusIcon } from '../util/icon/bus-solid.svg';
import { ReactComponent as SubwayIcon } from '../util/icon/train-subway-solid.svg';
import { ReactComponent as CarIcon } from '../util/icon/car-solid.svg';

import styles from '../style/Place.module.scss';

const Place = () => {

  return <>
    <div className={styles.container}>
      <h2 className={styles.subTitle}>Location</h2>
      <h1 className={styles.title}>오시는길</h1>

      <h3 className={styles.place}>해군호텔W웨딩홀 노블레스홀</h3>
      <p className={styles.subPlace}>서울시 영등포구 가마산로 538 (신길동 2001-4)</p>
      <div className={styles.mapContainer}>
        <div className={styles.map}></div>
        <div className={styles.otherMap}></div>
      </div>

      <div className={styles.infoContainer}>
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
  </>
}

export default Place;
