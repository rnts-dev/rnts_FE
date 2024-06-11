// import BottomButton from '@/entities/checkin/ui/button/CheckInButton';

// export default function handleCheckin(isLate: string) {
//   const getLateInfo = () => {
//     const mock_response = {
//       data: {
//         safe: 'early',
//         time: 33,
//         order: 'first',
//       },
//     };

//     return mock_response.data;
//   };
//   // 2. Modal UI
//   const getModalMeta = () => {
//     if (isLate) {
//       const isLate: any = {
//         title: '출발했어!',
//         description: '3분 늦게 도착했어요',
//         bottomButton: BottomButton,
//       };

//       return isLate;
//     }
//     const isFirst: any = {
//       title: '출발했어?',
//       description: getLateInfo().safe === 'early' ? '3분 빨리 도착했어요' : '딱 맞춰 도착했어요',
//       bottomButton: BottomButton,
//     };
//     const isNormal: any = {
//       title: '출발했어?',
//       description: getLateInfo().safe === 'early' ? '3분 빨리 도착했어요' : '딱 맞춰 도착했어요',
//       bottomButton: BottomButton,
//     };
//     const isLast: any = {
//       title: '출발했어?',
//       description: getLateInfo().safe === 'early' ? '3분 빨리 도착했어요' : '딱 맞춰 도착했어요',
//       bottomButton: BottomButton,
//     };

//     if (getLateInfo().safe !== 'late') {
//       return getLateInfo().order === 'first' ? isFirst : getLateInfo().order === 'normal' ? isNormal : getLateInfo().order === 'last' ? isLast : '';
//     }

//     return isNormal;
//   };

//   return { getModalMeta };
// }
