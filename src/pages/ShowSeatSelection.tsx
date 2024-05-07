import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import HomeLayout from "../layouts/HomeLayout";
import processSeatConfig from "../utils/ProcessSeatConfig";

interface Seat {
  number?: number;
  status: number;
}

interface Row {
  number: string;
  seats: Seat[];
}

function SeatingChart() {
  const { state } = useLocation();

  const [seats, setSeats] =  useState<[Row]>([
    {
      number: "",
      seats: [
        {
          number: 0,
          status: 0,
        },
      ],
    },
  ]);

  useEffect(() => {
    
    setSeats(processSeatConfig(state.config).rows);
  }, [state.config]);

  

  return (
    <HomeLayout>
      config
      {seats && seats.length}
    </HomeLayout>
  );
}

export default SeatingChart;
