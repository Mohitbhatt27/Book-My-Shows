interface Seat {
  number: number;
  status: number;
}

interface Row {
  number: string;
  seats: Seat[];
}

interface SelectedSeat {
  rowNumber: string;
  seatNumber: number;
}

export type { Seat, Row, SelectedSeat };
