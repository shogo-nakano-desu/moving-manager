// ここには手続き関連の情報を入れていくよ
// 日付の計算をする関数を書く必要がある。
// もしくは、オブジェクトによっては日付にはプロジェクト作成日を入れる
// 一旦UI作成用でダミーデータを入れる
import { add } from "date-fns";
// ----------------------------------------------------------------
// ここはダミーデータ
const today = new Date();
export const moveDate = new Date(2021, 8, 6); // 2021/9/6
// ----------------------------------------------------------------

// booleanに関しては、trueの時だけその項目がマストになる
export interface Procedure {
  title: string;
  startDate: Date; // プロジェクト作成日か関数で計算した日付
  deadline: Date;
  submitDestination: string;
  targetPerson: TARGET_PERSON;
  confirmationSource: string;
  isSelfEmployed: boolean;
  isStudent: boolean;
  isPet: boolean;
  isScooter: boolean;
  isCar: boolean;
}

const TARGET_PERSON = {
  moveInTheSameMunicipalities: "moveInTheSameMunicipalities",
  moveToDifferentMunicipalities: "moveToDifferentMunicipalities",
  everyone: "everyone",
} as const;
type TARGET_PERSON = typeof TARGET_PERSON[keyof typeof TARGET_PERSON];

// ----------------------------------------------------------------
// rentalCaN / gasTapStop /dummy_moveNotification /dummy_car
// 以下全てダミーデータ
export const dummy_rentalCAN: Procedure = {
  title: "賃貸物件の解約手続き",
  startDate: today,
  deadline: add(moveDate, { months: -1 }), // 2021/8/6
  submitDestination: "管理会社や不動産会社、大家など",
  targetPerson: "everyone",
  confirmationSource:
    "https://hikkoshizamurai.jp/useful/procedure/other/rental/",
  isSelfEmployed: false,
  isStudent: false,
  isPet: false,
  isScooter: false,
  isCar: false,
};

export const dummy_gasTapStop: Procedure = {
  title: "ガス・水道停止の立ち合い",
  startDate: moveDate,
  deadline: moveDate, // 2021/9/6
  submitDestination: "ガス・水道会社",
  targetPerson: "everyone",
  confirmationSource:
    "https://hikkoshizamurai.jp/useful/procedure/other/rental/",
  isSelfEmployed: false,
  isStudent: false,
  isPet: false,
  isScooter: false,
  isCar: false,
};

export const dummy_moveNotification: Procedure = {
  title: "転出届の提出",
  startDate: add(moveDate, { weeks: -2 }),
  deadline: add(moveDate, { weeks: 1 }), // 2021/9/13
  submitDestination: "ガス・水道会社",
  targetPerson: "moveToDifferentMunicipalities",
  confirmationSource:
    "https://hikkoshizamurai.jp/useful/procedure/other/rental/",
  isSelfEmployed: false,
  isStudent: false,
  isPet: false,
  isScooter: false,
  isCar: false,
};

export const dummy_car: Procedure = {
  title: "車庫証明の取得申請",
  startDate: add(moveDate, { days: 1 }),
  deadline: add(moveDate, { days: 15 }), //2021/9/21
  submitDestination: "管轄の警察署",
  targetPerson: "everyone",
  confirmationSource:
    "https://hikkoshizamurai.jp/useful/procedure/other/rental/",
  isSelfEmployed: false,
  isStudent: false,
  isPet: false,
  isScooter: false,
  isCar: true,
};

export const dummy_procedures: Procedure[] = [
  dummy_moveNotification,
  dummy_car,
  dummy_rentalCAN,
  dummy_gasTapStop,
];
