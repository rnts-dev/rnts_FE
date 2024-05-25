/**
 * 두 지점의 위도와 경도를 입력받아 두 지점 사이의 거리를 계산하는 함수입니다.
 *
 * @param lat1 첫 번째 지점의 위도
 * @param lng1 첫 번째 지점의 경도
 * @param lat2 두 번째 지점의 위도
 * @param lng2 두 번째 지점의 경도
 * @returns 두 지점 사이의 거리를 킬로미터 단위로 반환합니다.
 */
export function calculrateDistance(lat1: number, lng1: number, lat2: number, lng2: number) {
  /**
   * 도(degree) 단위를 라디안(radian) 단위로 변환하는 내부 함수입니다.
   *
   * @param deg 도 단위의 각도
   * @returns 라디안 단위의 각도
   */

  function deg2rad(deg: number) {
    return deg * (Math.PI / 180);
  }
  var R = 6371; // 지구의 반지름 (단위: km)
  var dLat = deg2rad(lat2 - lat1); // 위도 차이를 라디안으로 변환
  var dLon = deg2rad(lng2 - lng1); // 경도 차이를 라디안으로 변환
  var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) + Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) * Math.sin(dLon / 2) * Math.sin(dLon / 2);
  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  var d = R * c; // 두 지점 사이의 거리 (단위: km)
  console.log(d);
  return d;
}
