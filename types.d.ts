export interface DressI {
  dressID: string;
  pic: string;
  progressStatus: number;
}

export interface OrderI {
  orderId: string;
  dressesCnt: number;
  tDate: string; // since you're using toLocaleDateString
  dressesList: DressI[];
}

export interface OrderHistoryI {
  orderId: string;
  placedOn: string;
  deliveredOn: string;
  TAmount: number;
}
