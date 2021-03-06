import { procedures, filteredTodos } from "./loadingFuncs";
import { add } from "date-fns";
import MockDate from "mockdate";

const moveDate = new Date("2021/8/18");

interface Procedure {
  title: string;
  startDate: number; // プロジェクト作成日か関数で計算した日付
  deadline: number;
  submitDestination: string;
  targetPerson: TARGET_PERSON;
  confirmationSource: string;
  memo: string;
  complete: boolean;
  isNotEmployee: boolean;
  isStudent: boolean;
  isPet: boolean;
  isScooter: boolean;
  isCar: boolean;
  isParking: boolean;
  isUnderFifteen: boolean;
  isFireInsurance: boolean;
  isFixedPhone: boolean;
  isMynumber: boolean;
  isStampRegistration: boolean;
  isDrivingLicense: boolean;
  created_at: number;
}

const TARGET_PERSON = {
  moveInTheSameMunicipalities: "moveInTheSameMunicipalities",
  moveToDifferentMunicipalities: "moveToDifferentMunicipalities",
  everyone: "everyone",
} as const;
type TARGET_PERSON = typeof TARGET_PERSON[keyof typeof TARGET_PERSON];
// #region
const rentalCancellation: Procedure = {
  title: "賃貸物件の解約手続き",
  startDate: 1577804400000, // プロジェクト作成日か関数で計算した日付
  deadline: add(moveDate, { months: -2 }).getTime(), //[TODO]これは１ヶ月前のパターンもあることを明示するか、選択できるようにしたい
  submitDestination: "管理会社や不動産会社、大家など",
  targetPerson: "everyone",
  confirmationSource:
    "管理会社や不動産会社、大家などに問い合わせ、契約内容を確認する",
  memo: "",
  complete: false,
  isNotEmployee: false,
  isStudent: false,
  isPet: false,
  isScooter: false,
  isCar: false,
  isParking: false,
  isUnderFifteen: false,
  isFireInsurance: false,
  isFixedPhone: false,
  isMynumber: false,
  isStampRegistration: false,
  isDrivingLicense: false,
  created_at: 1577804400000,
};
const parkingCancellation: Procedure = {
  title: "駐車場の解約手続き",
  startDate: 1577804400000, // プロジェクト作成日か関数で計算した日付
  deadline: add(moveDate, { months: -2 }).getTime(),
  submitDestination: "貸主もしくは管理会社",
  targetPerson: "everyone",
  confirmationSource: "契約書を確認、もしくは貸主、管理会社に問い合わせ",
  memo: "",
  complete: false,
  isNotEmployee: false,
  isStudent: false,
  isPet: false,
  isScooter: false, // 表示条件はscooterかcarどっちかがtrueにする
  isCar: false,
  isParking: true,
  isUnderFifteen: false,
  isFireInsurance: false,
  isFixedPhone: false,
  isMynumber: false,
  isStampRegistration: false,
  isDrivingLicense: false,
  created_at: 1577804400000,
};

const moverContraction: Procedure = {
  title: "引越し業者との契約",
  startDate: 1577804400000, // プロジェクト作成日か関数で計算した日付
  deadline: add(moveDate, { weeks: -1 }).getTime(),
  submitDestination: "各引越し業者",
  targetPerson: "everyone",
  confirmationSource:
    "各引越し業者のサイト。直前になるにつれて選択肢が狭まるので注意",
  memo: "",
  complete: false,
  isNotEmployee: false,
  isStudent: false,
  isPet: false,
  isScooter: false,
  isCar: false,
  isParking: false,
  isUnderFifteen: false,
  isFireInsurance: false,
  isFixedPhone: false,
  isMynumber: false,
  isStampRegistration: false,
  isDrivingLicense: false,
  created_at: 1577804400000,
};
const schoolChanging: Procedure = {
  title: "学校の転校手続き",
  startDate: 1577804400000, // プロジェクト作成日か関数で計算した日付
  deadline: add(new Date(1577804400000), { weeks: 2 }).getTime(),
  submitDestination: "（公立校）役所（教育委員会）の窓口/ （私立校）学校の窓口",
  targetPerson: "everyone",
  confirmationSource:
    "https://hikkoshizamurai.jp/useful/procedure/other/school/",
  memo: "",
  complete: false,
  isNotEmployee: false,
  isStudent: true,
  isPet: false,
  isScooter: false,
  isCar: false,
  isParking: false,
  isUnderFifteen: false,
  isFireInsurance: false,
  isFixedPhone: false,
  isMynumber: false,
  isStampRegistration: false,
  isDrivingLicense: false,
  created_at: 1577804400000,
};

const internet: Procedure = {
  title: "インターネットの引越し手続き",
  startDate: add(moveDate, { months: -1, weeks: -2 }).getTime(), // プロジェクト作成日か関数で計算した日付
  deadline: add(moveDate, { months: -1 }).getTime(), //
  submitDestination: "回線会社、プロバイダのHPもしくは電話など",
  targetPerson: "everyone",
  confirmationSource:
    "https://hikkoshizamurai.jp/useful/procedure/lifeline/internet/",
  memo: "",
  complete: false,
  isNotEmployee: false,
  isStudent: false,
  isPet: false,
  isScooter: false,
  isCar: false,
  isParking: false,
  isUnderFifteen: false,
  isFireInsurance: false,
  isFixedPhone: false,
  isMynumber: false,
  isStampRegistration: false,
  isDrivingLicense: false,
  created_at: 1577804400000,
};

const largeGarbage: Procedure = {
  title: "粗大ゴミの処分手続き",
  startDate: 1577804400000, // プロジェクト作成日か関数で計算した日付
  deadline: add(moveDate, { months: -1 }).getTime(),
  submitDestination: "各自治体もしくは粗大ゴミ回収業者",
  targetPerson: "everyone",
  confirmationSource: "https://hikkoshizamurai.jp/useful/unnecessary/#anchor05",
  memo: "",
  complete: false,
  isNotEmployee: false,
  isStudent: false,
  isPet: false,
  isScooter: false,
  isCar: false,
  isParking: false,
  isUnderFifteen: false,
  isFireInsurance: false,
  isFixedPhone: false,
  isMynumber: false,
  isStampRegistration: false,
  isDrivingLicense: false,
  created_at: 1577804400000,
};
const fireInsurance: Procedure = {
  title: "火災保険の住所変更手続き",
  startDate: add(moveDate, { months: -1 }).getTime(), // プロジェクト作成日か関数で計算した日付
  deadline: add(moveDate, { weeks: -3 }).getTime(), //
  submitDestination: "保険会社",
  targetPerson: "everyone",
  confirmationSource:
    "https://hikkoshizamurai.jp/useful/procedure/other/fire-insurance/",
  memo: "",
  complete: false,
  isNotEmployee: false,
  isStudent: false,
  isPet: false,
  isScooter: false,
  isCar: false,
  isParking: false,
  isUnderFifteen: false,
  isFireInsurance: true,
  isFixedPhone: false,
  isMynumber: false,
  isStampRegistration: false,
  isDrivingLicense: false,
  created_at: 1577804400000,
};
const movingOutNotification: Procedure = {
  title: "転出届の提出",
  startDate: add(moveDate, { weeks: -2 }).getTime(), // プロジェクト作成日か関数で計算した日付
  deadline: add(moveDate, { days: 13 }).getTime(), //
  submitDestination: "旧住所管轄の役場",
  targetPerson: "moveToDifferentMunicipalities",
  confirmationSource:
    "https://hikkoshizamurai.jp/useful/procedure/public/resident/",
  memo: "",
  complete: false,
  isNotEmployee: false,
  isStudent: false,
  isPet: false,
  isScooter: false,
  isCar: false,
  isParking: false,
  isUnderFifteen: false,
  isFireInsurance: false,
  isFixedPhone: false,
  isMynumber: false,
  isStampRegistration: false,
  isDrivingLicense: false,
  created_at: 1577804400000,
};
const NationalHealthInsuranceCancellation: Procedure = {
  title: "国民健康保険の資格喪失手続き",
  startDate: add(moveDate, { weeks: -2 }).getTime(),
  deadline: add(moveDate, { days: 14 }).getTime(),
  submitDestination: "引越し元の市区町村役場",
  targetPerson: "moveToDifferentMunicipalities",
  confirmationSource:
    "https://hikkoshizamurai.jp/useful/procedure/public/nhl/#loss",
  memo: "",
  complete: false,
  isNotEmployee: true,
  isStudent: false,
  isPet: false,
  isScooter: false,
  isCar: false,
  isParking: false,
  isUnderFifteen: false,
  isFireInsurance: false,
  isFixedPhone: false,
  isMynumber: false,
  isStampRegistration: false,
  isDrivingLicense: false,
  created_at: 1577804400000,
};

const stampDeletion: Procedure = {
  title: "印鑑登録の抹消",
  startDate: add(moveDate, { weeks: -2 }).getTime(),
  deadline: moveDate.getTime(),
  submitDestination: "旧住所の役場",
  targetPerson: "moveToDifferentMunicipalities",
  confirmationSource:
    "https://hikkoshizamurai.jp/useful/procedure/public/seal/",
  memo: "",
  complete: false,
  isNotEmployee: false,
  isStudent: false,
  isPet: false,
  isScooter: false,
  isCar: false,
  isParking: false,
  isUnderFifteen: false,
  isFireInsurance: false,
  isFixedPhone: false,
  isMynumber: false,
  isStampRegistration: true,
  isDrivingLicense: false,
  created_at: 1577804400000,
};
const scooterDeletion: Procedure = {
  title: "原付の廃車手続き・住所変更",
  startDate: add(moveDate, { weeks: -2 }).getTime(),
  deadline: add(moveDate, { days: 15 }).getTime(),
  submitDestination: "市区町村役場もしくは陸運局",
  targetPerson: "moveToDifferentMunicipalities",
  confirmationSource:
    "https://hikkoshizamurai.jp/useful/procedure/vehicle/motorcycle/",
  memo: "",
  complete: false,
  isNotEmployee: false,
  isStudent: false,
  isPet: false,
  isScooter: true,
  isCar: false,
  isParking: false,
  isUnderFifteen: false,
  isFireInsurance: false,
  isFixedPhone: false,
  isMynumber: false,
  isStampRegistration: false,
  isDrivingLicense: false,
  created_at: 1577804400000,
};
const childAllowance: Procedure = {
  title: "児童手当の住所変更手続き",
  startDate: add(moveDate, { weeks: -2 }).getTime(),
  deadline: add(moveDate, { days: 15 }).getTime(),
  submitDestination:
    "引越し元住所に「児童手当受給事由消滅届」⇨引越し先住所に「児童手当認定請求書」",
  targetPerson: "moveToDifferentMunicipalities",
  confirmationSource:
    "https://hikkoshizamurai.jp/useful/procedure/public/allowance/",
  memo: "",
  complete: false,
  isNotEmployee: false,
  isStudent: false,
  isPet: false,
  isScooter: false,
  isCar: false,
  isParking: false,
  isUnderFifteen: true,
  isFireInsurance: false,
  isFixedPhone: false,
  isMynumber: false,
  isStampRegistration: false,
  isDrivingLicense: false,
  created_at: 1577804400000,
};
const electricity: Procedure = {
  title: "電気の使用停止・開始手続き",
  startDate: add(moveDate, { weeks: -2 }).getTime(),
  deadline: add(moveDate, { weeks: -1 }).getTime(),
  submitDestination: "電力会社のHPもしくは電話",
  targetPerson: "everyone",
  confirmationSource:
    "https://hikkoshizamurai.jp/useful/procedure/lifeline/electricity/#oldAddress",
  memo: "",
  complete: false,
  isNotEmployee: false,
  isStudent: false,
  isPet: false,
  isScooter: false,
  isCar: false,
  isParking: false,
  isUnderFifteen: false,
  isFireInsurance: false,
  isFixedPhone: false,
  isMynumber: false,
  isStampRegistration: false,
  isDrivingLicense: false,
  created_at: 1577804400000,
};
const gasTap: Procedure = {
  title: "ガスの使用中止・開始手続き",
  startDate: add(moveDate, { weeks: -2 }).getTime(),
  deadline: add(moveDate, { weeks: -1 }).getTime(),
  submitDestination: "ガス会社",
  targetPerson: "everyone",
  confirmationSource:
    "https://hikkoshizamurai.jp/useful/procedure/lifeline/gas/#oldAddress",
  memo: "",
  complete: false,
  isNotEmployee: false,
  isStudent: false,
  isPet: false,
  isScooter: false,
  isCar: false,
  isParking: false,
  isUnderFifteen: false,
  isFireInsurance: false,
  isFixedPhone: false,
  isMynumber: false,
  isStampRegistration: false,
  isDrivingLicense: false,
  created_at: 1577804400000,
};
const tapwaterCancellation: Procedure = {
  title: "水道の使用中止手続き",
  startDate: add(moveDate, { weeks: -2 }).getTime(),
  deadline: add(moveDate, { days: -2 }).getTime(),
  submitDestination: "水道局",
  targetPerson: "everyone",
  confirmationSource:
    "https://hikkoshizamurai.jp/useful/procedure/lifeline/water/#oldAddress",
  memo: "",
  complete: false,
  isNotEmployee: false,
  isStudent: false,
  isPet: false,
  isScooter: false,
  isCar: false,
  isParking: false,
  isUnderFifteen: false,
  isFireInsurance: false,
  isFixedPhone: false,
  isMynumber: false,
  isStampRegistration: false,
  isDrivingLicense: false,
  created_at: 1577804400000,
};
const tapwaterStart: Procedure = {
  title: "水道の使用開始手続き",
  startDate: moveDate.getTime(),
  deadline: add(moveDate, { days: 10 }).getTime(),
  submitDestination: "水道局webサイト、郵便、電話",
  targetPerson: "everyone",
  confirmationSource:
    "https://hikkoshizamurai.jp/useful/procedure/lifeline/water/#oldAddress",
  memo: "",
  complete: false,
  isNotEmployee: false,
  isStudent: false,
  isPet: false,
  isScooter: false,
  isCar: false,
  isParking: false,
  isUnderFifteen: false,
  isFireInsurance: false,
  isFixedPhone: false,
  isMynumber: false,
  isStampRegistration: false,
  isDrivingLicense: false,
  created_at: 1577804400000,
};
const postofficeChangeAddress: Procedure = {
  title: "転居・転送届",
  startDate: add(moveDate, { weeks: -2 }).getTime(),
  deadline: add(moveDate, { weeks: -1 }).getTime(),
  submitDestination: "郵便局",
  targetPerson: "everyone",
  confirmationSource:
    "https://hikkoshizamurai.jp/useful/procedure/lifeline/post/",
  memo: "",
  complete: false,
  isNotEmployee: false,
  isStudent: false,
  isPet: false,
  isScooter: false,
  isCar: false,
  isParking: false,
  isUnderFifteen: false,
  isFireInsurance: false,
  isFixedPhone: false,
  isMynumber: false,
  isStampRegistration: false,
  isDrivingLicense: false,
  created_at: 1577804400000,
};

const fixedPhone: Procedure = {
  title: "固定電話の住所変更手続き",
  startDate: 1577804400000,
  deadline: add(moveDate, { weeks: -2 }).getTime(),
  submitDestination: "NTT",
  targetPerson: "everyone",
  confirmationSource:
    "https://hikkoshizamurai.jp/useful/procedure/lifeline/telephone/",
  memo: "",
  complete: false,
  isNotEmployee: false,
  isStudent: false,
  isPet: false,
  isScooter: false,
  isCar: false,
  isParking: false,
  isUnderFifteen: false,
  isFireInsurance: false,
  isFixedPhone: true,
  isMynumber: false,
  isStampRegistration: false,
  isDrivingLicense: false,
  created_at: 1577804400000,
};
const mobilePhone: Procedure = {
  title: "携帯電話・スマートフォンの住所変更手続",
  startDate: moveDate.getTime(),
  deadline: add(moveDate, { weeks: 1 }).getTime(),
  submitDestination: "携帯電話会社のHP、電話、窓口など",
  targetPerson: "everyone",
  confirmationSource:
    "https://hikkoshizamurai.jp/useful/procedure/lifeline/mobile-phone/",
  memo: "",
  complete: false,
  isNotEmployee: false,
  isStudent: false,
  isPet: false,
  isScooter: false,
  isCar: false,
  isParking: false,
  isUnderFifteen: false,
  isFireInsurance: false,
  isFixedPhone: false,
  isMynumber: false,
  isStampRegistration: false,
  isDrivingLicense: false,
  created_at: 1577804400000,
};
const pet: Procedure = {
  title: "ペットの登録事項変更届",
  startDate: add(moveDate, { weeks: -1 }).getTime(),
  deadline: add(moveDate, { weeks: 1 }).getTime(),
  submitDestination: "市区町村役所の窓口、保健所など",
  targetPerson: "everyone",
  confirmationSource:
    "https://hikkoshizamurai.jp/useful/procedure/other/pet-address/",
  memo: "",
  complete: false,
  isNotEmployee: false,
  isStudent: false,
  isPet: true,
  isScooter: false,
  isCar: false,
  isParking: false,
  isUnderFifteen: false,
  isFireInsurance: false,
  isFixedPhone: false,
  isMynumber: false,
  isStampRegistration: false,
  isDrivingLicense: false,
  created_at: 1577804400000,
};
const gasPrecense: Procedure = {
  title: "ガス使用停止の立ち合い",
  startDate: moveDate.getTime(),
  deadline: moveDate.getTime(),
  submitDestination: "旧居",
  targetPerson: "everyone",
  confirmationSource:
    "https://hikkoshizamurai.jp/useful/procedure/lifeline/gas/#oldAddress",
  memo: "",
  complete: false,
  isNotEmployee: false,
  isStudent: false,
  isPet: false,
  isScooter: false,
  isCar: false,
  isParking: false,
  isUnderFifteen: false,
  isFireInsurance: false,
  isFixedPhone: false,
  isMynumber: false,
  isStampRegistration: false,
  isDrivingLicense: false,
  created_at: 1577804400000,
};
const tapPrecense: Procedure = {
  title: "水道使用停止の立ち合い",
  startDate: moveDate.getTime(),
  deadline: moveDate.getTime(),
  submitDestination: "旧居",
  targetPerson: "everyone",
  confirmationSource:
    "https://hikkoshizamurai.jp/useful/procedure/lifeline/water/#oldAddress",
  memo: "",
  complete: false,
  isNotEmployee: false,
  isStudent: false,
  isPet: false,
  isScooter: false,
  isCar: false,
  isParking: false,
  isUnderFifteen: false,
  isFireInsurance: false,
  isFixedPhone: false,
  isMynumber: false,
  isStampRegistration: false,
  isDrivingLicense: false,
  created_at: 1577804400000,
};
const moveOutPrecense: Procedure = {
  title: "旧居の明け渡し",
  startDate: moveDate.getTime(),
  deadline: moveDate.getTime(),
  submitDestination: "旧居",
  targetPerson: "everyone",
  confirmationSource: "なし",
  memo: "",
  complete: false,
  isNotEmployee: false,
  isStudent: false,
  isPet: false,
  isScooter: false,
  isCar: false,
  isParking: false,
  isUnderFifteen: false,
  isFireInsurance: false,
  isFixedPhone: false,
  isMynumber: false,
  isStampRegistration: false,
  isDrivingLicense: false,
  created_at: 1577804400000,
};
const gasStartPrecense: Procedure = {
  title: "ガス開栓の立ち会い",
  startDate: moveDate.getTime(),
  deadline: moveDate.getTime(),
  submitDestination: "新居",
  targetPerson: "everyone",
  confirmationSource:
    "https://hikkoshizamurai.jp/useful/procedure/lifeline/gas/#newAddress",
  memo: "",
  complete: false,
  isNotEmployee: false,
  isStudent: false,
  isPet: false,
  isScooter: false,
  isCar: false,
  isParking: false,
  isUnderFifteen: false,
  isFireInsurance: false,
  isFixedPhone: false,
  isMynumber: false,
  isStampRegistration: false,
  isDrivingLicense: false,
  created_at: 1577804400000,
};
const movingNotification: Procedure = {
  title: "転居届",
  startDate: moveDate.getTime(),
  deadline: add(moveDate, { days: 14 }).getTime(),
  submitDestination: "市区町村役場",
  targetPerson: "moveInTheSameMunicipalities",
  confirmationSource:
    "https://hikkoshizamurai.jp/useful/procedure/public/resident/",
  memo: "",
  complete: false,
  isNotEmployee: false,
  isStudent: false,
  isPet: false,
  isScooter: false,
  isCar: false,
  isParking: false,
  isUnderFifteen: false,
  isFireInsurance: false,
  isFixedPhone: false,
  isMynumber: false,
  isStampRegistration: false,
  isDrivingLicense: false,
  created_at: 1577804400000,
};
const transferNotification: Procedure = {
  title: "転入届",
  startDate: moveDate.getTime(),
  deadline: add(moveDate, { days: 14 }).getTime(),
  submitDestination: "市区町村役場",
  targetPerson: "moveToDifferentMunicipalities",
  confirmationSource:
    "https://hikkoshizamurai.jp/useful/procedure/public/resident/",
  memo: "",
  complete: false,
  isNotEmployee: false,
  isStudent: false,
  isPet: false,
  isScooter: false,
  isCar: false,
  isParking: false,
  isUnderFifteen: false,
  isFireInsurance: false,
  isFixedPhone: false,
  isMynumber: false,
  isStampRegistration: false,
  isDrivingLicense: false,
  created_at: 1577804400000,
};
const mynumber: Procedure = {
  title: "マイナンバーの住所変更",
  startDate: moveDate.getTime(),
  deadline: add(moveDate, { days: 14 }).getTime(),
  submitDestination: "市区町村役場",
  targetPerson: "everyone",
  confirmationSource:
    "https://hikkoshizamurai.jp/useful/procedure/public/my-number/",
  memo: "",
  complete: false,
  isNotEmployee: false,
  isStudent: false,
  isPet: false,
  isScooter: false,
  isCar: false,
  isParking: false,
  isUnderFifteen: false,
  isFireInsurance: false,
  isFixedPhone: false,
  isMynumber: true,
  isStampRegistration: false,
  isDrivingLicense: false,
  created_at: 1577804400000,
};
const stampRegistration: Procedure = {
  title: "印鑑登録",
  startDate: moveDate.getTime(),
  deadline: add(moveDate, { days: 21 }).getTime(),
  submitDestination: "市区町村役場",
  targetPerson: "moveToDifferentMunicipalities",
  confirmationSource:
    "https://hikkoshizamurai.jp/useful/procedure/public/seal/",
  memo: "",
  complete: false,
  isNotEmployee: false,
  isStudent: false,
  isPet: false,
  isScooter: false,
  isCar: false,
  isParking: false,
  isUnderFifteen: false,
  isFireInsurance: false,
  isFixedPhone: false,
  isMynumber: false,
  isStampRegistration: true,
  isDrivingLicense: false,
  created_at: 1577804400000,
};
const compensation: Procedure = {
  title: "国民年金の住所変更",
  startDate: moveDate.getTime(),
  deadline: add(moveDate, { days: 14 }).getTime(),
  submitDestination: "市区町村役場",
  targetPerson: "everyone",
  confirmationSource:
    "https://hikkoshizamurai.jp/useful/procedure/public/national-pension/",
  memo: "",
  complete: false,
  isNotEmployee: true,
  isStudent: false,
  isPet: false,
  isScooter: false,
  isCar: false,
  isParking: false,
  isUnderFifteen: false,
  isFireInsurance: false,
  isFixedPhone: false,
  isMynumber: false,
  isStampRegistration: false,
  isDrivingLicense: false,
  created_at: 1577804400000,
};

const nationalHealthInsuranceRegistration: Procedure = {
  title: "国民健康保険の加入",
  startDate: moveDate.getTime(),
  deadline: add(moveDate, { days: 14 }).getTime(),
  submitDestination: "引越し先の市区町村役場",
  targetPerson: "moveToDifferentMunicipalities",
  confirmationSource:
    "https://hikkoshizamurai.jp/useful/procedure/public/nhl/#join",
  memo: "",
  complete: false,
  isNotEmployee: true,
  isStudent: false,
  isPet: false,
  isScooter: false,
  isCar: false,
  isParking: false,
  isUnderFifteen: false,
  isFireInsurance: false,
  isFixedPhone: false,
  isMynumber: false,
  isStampRegistration: false,
  isDrivingLicense: false,
  created_at: 1577804400000,
};

const nationalHealthInsuranceChange: Procedure = {
  title: "国民健康保険の住所変更",
  startDate: moveDate.getTime(),
  deadline: add(moveDate, { days: 14 }).getTime(),
  submitDestination: "引越し先の市区町村役場",
  targetPerson: "moveInTheSameMunicipalities",
  confirmationSource:
    "https://hikkoshizamurai.jp/useful/procedure/public/nhl/#join",
  memo: "",
  complete: false,
  isNotEmployee: true,
  isStudent: false,
  isPet: false,
  isScooter: false,
  isCar: false,
  isParking: false,
  isUnderFifteen: false,
  isFireInsurance: false,
  isFixedPhone: false,
  isMynumber: false,
  isStampRegistration: false,
  isDrivingLicense: false,
  created_at: 1577804400000,
};
const company: Procedure = {
  title: "会社の健康保険と厚生年金の変更手続き",
  startDate: moveDate.getTime(),
  deadline: add(moveDate, { days: 7 }).getTime(),
  submitDestination: "勤め先の担当部署",
  targetPerson: "everyone",
  confirmationSource: "なし",
  memo: "",
  complete: false,
  isNotEmployee: false,
  isStudent: false,
  isPet: false,
  isScooter: false,
  isCar: false,
  isParking: false,
  isUnderFifteen: false,
  isFireInsurance: false,
  isFixedPhone: false,
  isMynumber: false,
  isStampRegistration: false,
  isDrivingLicense: false,
  created_at: 1577804400000,
};
const parkingCertification: Procedure = {
  title: "車庫証明の取得申請",
  startDate: moveDate.getTime(),
  deadline: add(moveDate, { days: 15 }).getTime(),
  submitDestination: "保管場所を管轄する警察署",
  targetPerson: "everyone",
  confirmationSource:
    "https://hikkoshizamurai.jp/useful/procedure/vehicle/parking-space/",
  memo: "",
  complete: false,
  isNotEmployee: false,
  isStudent: false,
  isPet: false,
  isScooter: false,
  isCar: true,
  isParking: false,
  isUnderFifteen: false,
  isFireInsurance: false,
  isFixedPhone: false,
  isMynumber: false,
  isStampRegistration: false,
  isDrivingLicense: false,
  created_at: 1577804400000,
};

const drivingLicense: Procedure = {
  title: "免許証の住所変更手続き",
  startDate: moveDate.getTime(),
  deadline: add(moveDate, { days: 14 }).getTime(),
  submitDestination:
    "新居住地の警察署運転免許課、運転免許センター、運転免許試験場",
  targetPerson: "everyone",
  confirmationSource:
    "https://hikkoshizamurai.jp/useful/procedure/vehicle/license/",
  memo: "",
  complete: false,
  isNotEmployee: false,
  isStudent: false,
  isPet: false,
  isScooter: false,
  isCar: false,
  isParking: false,
  isUnderFifteen: false,
  isFireInsurance: false,
  isFixedPhone: false,
  isMynumber: false,
  isStampRegistration: false,
  isDrivingLicense: true,
  created_at: 1577804400000,
};
const carAddress: Procedure = {
  title: "自動車の住所変更手続き",
  startDate: moveDate.getTime(),
  deadline: add(moveDate, { days: 15 }).getTime(),
  submitDestination: "新居住地の地方運輸局、運輸支局、自動車検査登録事務所",
  targetPerson: "everyone",
  confirmationSource:
    "https://hikkoshizamurai.jp/useful/procedure/vehicle/car/",
  memo: "",
  complete: false,
  isNotEmployee: false,
  isStudent: false,
  isPet: false,
  isScooter: false,
  isCar: true,
  isParking: false,
  isUnderFifteen: false,
  isFireInsurance: false,
  isFixedPhone: false,
  isMynumber: false,
  isStampRegistration: false,
  isDrivingLicense: false,
  created_at: 1577804400000,
};
const creaditcard: Procedure = {
  title: "クレジットカードの住所変更手続き",
  startDate: moveDate.getTime(),
  deadline: add(moveDate, { weeks: 1 }).getTime(),
  submitDestination: "クレジットカード会社のHP、郵送、電話",
  targetPerson: "everyone",
  confirmationSource:
    "https://hikkoshizamurai.jp/useful/procedure/other/credit-card/",
  memo: "",
  complete: false,
  isNotEmployee: false,
  isStudent: false,
  isPet: false,
  isScooter: false,
  isCar: false,
  isParking: false,
  isUnderFifteen: false,
  isFireInsurance: false,
  isFixedPhone: false,
  isMynumber: false,
  isStampRegistration: false,
  isDrivingLicense: false,
  created_at: 1577804400000,
};
const bankAccount: Procedure = {
  title: "銀行口座の住所変更",
  startDate: moveDate.getTime(),
  deadline: add(moveDate, { days: 15 }).getTime(),
  submitDestination: "銀行",
  targetPerson: "everyone",
  confirmationSource: "https://hikkoshizamurai.jp/useful/procedure/other/bank/",
  memo: "",
  complete: false,
  isNotEmployee: false,
  isStudent: false,
  isPet: false,
  isScooter: false,
  isCar: false,
  isParking: false,
  isUnderFifteen: false,
  isFireInsurance: false,
  isFixedPhone: false,
  isMynumber: false,
  isStampRegistration: false,
  isDrivingLicense: false,
  created_at: 1577804400000,
};
const onlineShop: Procedure = {
  title: "通販サイトの住所変更手続き",
  startDate: moveDate.getTime(),
  deadline: add(moveDate, { weeks: 3 }).getTime(),
  submitDestination: "各通販サイト",
  targetPerson: "everyone",
  confirmationSource: "なし",
  memo: "",
  complete: false,
  isNotEmployee: false,
  isStudent: false,
  isPet: false,
  isScooter: false,
  isCar: false,
  isParking: false,
  isUnderFifteen: false,
  isFireInsurance: false,
  isFixedPhone: false,
  isMynumber: false,
  isStampRegistration: false,
  isDrivingLicense: false,
  created_at: 1577804400000,
};

//#endregion

MockDate.set(new Date(1577804400000));

describe("creating procedures", () => {
  test("procedures array will correctly created?", () => {
    expect(procedures(moveDate)).toEqual([
      rentalCancellation,
      parkingCancellation,
      moverContraction,
      schoolChanging,
      internet,
      largeGarbage,
      fireInsurance,
      movingOutNotification,
      NationalHealthInsuranceCancellation,
      stampDeletion,
      scooterDeletion,
      childAllowance,
      electricity,
      gasTap,
      tapwaterCancellation,
      tapwaterStart,
      postofficeChangeAddress,
      fixedPhone,
      mobilePhone,
      pet,
      gasPrecense,
      tapPrecense,
      moveOutPrecense,
      gasStartPrecense,
      movingNotification,
      transferNotification,
      mynumber,
      stampRegistration,
      compensation,
      nationalHealthInsuranceRegistration,
      nationalHealthInsuranceChange,
      company,
      parkingCertification,
      drivingLicense,
      carAddress,
      creaditcard,
      bankAccount,
      onlineShop,
    ]);
    //spy.mockRestore();
    MockDate.reset();
  });
  test("filteredTodos will work?", () => {
    expect(
      filteredTodos(
        [
          rentalCancellation,
          parkingCancellation,
          moverContraction,
          schoolChanging,
          internet,
          largeGarbage,
          fireInsurance,
        ],
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false
      )
    ).toEqual([rentalCancellation, moverContraction, internet, largeGarbage]);
  });
});
