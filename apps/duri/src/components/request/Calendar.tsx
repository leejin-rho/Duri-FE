import { useState } from 'react';
import React from 'react';
import Calendar from 'react-calendar';
import { Value } from 'react-calendar/dist/cjs/shared/types';

import { Flex, theme } from '@duri-fe/ui';
import { css } from '@emotion/react';
import { addHours, format } from 'date-fns';

interface CalendarProps {
  onSelect: (key: string, value: string) => void;
}
const MonthlyCalendar = ({ onSelect }: CalendarProps) => {
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());
  const formatCalendarDay = (
    locale: string | undefined,
    date: Date,
  ): string => {
    const day = date.getDate();
    return day < 10 ? `0${day}` : `${day}`;
  };

  const handleClickCalendar = (value: Value) => {
    if (value instanceof Date) {
      // 한국 시간으로 변환
      const koreaDate = addHours(value, 9);
      setSelectedDate(koreaDate);

      const stringDate = format(value, 'yyyy-MM-dd');
      onSelect('day', stringDate);
    }
  };
  return (
    <Flex margin="7px 0 0 0" padding="0 20px">
      <Calendar
        css={CustomCalendarCss}
        onChange={handleClickCalendar}
        formatDay={formatCalendarDay}
        value={selectedDate}
        locale="ko-KR"
      />
    </Flex>
  );
};
export default MonthlyCalendar;

const CustomCalendarCss = css`
  .react-calendar__tile {
    height: 45px;
    border-radius: 99px;
    font-size: 15px;
  }
  .react-calendar__tile--now {
    background-color: ${theme.palette.Gray20};
  }
  .react-calendar__tile--now:hover,
  .react-calendar__tile--hasActive,
  .react-calendar__tile--hasActive:enabled:hover,
  .react-calendar__tile--hasActive:enabled:focus {
    background-color: ${theme.palette.Normal500};
    color: ${theme.palette.Black};
  }
  .react-calendar__tile--active,
  .react-calendar__tile--active:enabled:hover,
  .react-calendar__tile--active:enabled:focus {
    background-color: ${theme.palette.Normal500};
    color: ${theme.palette.Black};
  }

  /*월 화 수 목 금 토 일 밑줄 없애기*/
  abbr[title] {
    text-decoration: none;
    text-align: center;
    width: 100%;
  }

  .react-calendar__month-view__weekdays__weekday {
    text-align: center;
  }

  /*prev2 버튼 사용 안되게*/
  .react-calendar__navigation__prev-button,
  .react-calendar__navigation__prev2-button,
  .react-calendar__navigation__next-button,
  .react-calendar__navigation__next2-button {
    display: none;
  }
  .react-calendar__navigation__label {
    ${theme.typo.Title2};
    text-align: center;
    padding: 16px 0 32px 20px;
  }

  .react-calendar__month-view__days__day--weekend {
    color: ${theme.palette.Alert};
  }
  .react-calendar__month-view__days__day--neighboringMonth {
    color: ${theme.palette.Gray100};
  }
`;
