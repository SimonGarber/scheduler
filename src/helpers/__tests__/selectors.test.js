import { getAppointmentsForDay } from 'helpers/selectors';
import { getInterview } from 'helpers/selectors';
import { getInterviewersForDay } from 'helpers/selectors';

const state = {
  days: [
    {
      id: 1,
      name: 'Monday',
      appointments: [1, 2, 3],
      interviewers: [1, 2, 3]
    },
    {
      id: 2,
      name: 'Tuesday',
      appointments: [4, 5],
      interviewers: [4, 5]
    }
  ],
  appointments: {
    '1': { id: 1, time: '12pm', interview: null },
    '2': { id: 2, time: '1pm', interview: null },
    '3': {
      id: 3,
      time: '2pm',
      interview: { student: 'Archie Cohen', interviewer: 2 }
    },
    '4': { id: 4, time: '3pm', interview: null },
    '5': {
      id: 5,
      time: '4pm',
      interview: { student: 'Chad Takahashi', interviewer: 2 }
    }
  },
  interviewers: {
    '2': {
      id: 2,
      name: 'Tori Malcolm',
      avatar: 'https://i.imgur.com/Nmx0Qxo.png'
    }
  }
};

test('getAppointmentsForDay returns an array', () => {
  const result = getAppointmentsForDay(state, 'Monday');
  expect(Array.isArray(result)).toBe(true);
});

test('getAppointmentsForDay returns an array with a length matching the number of appointments for that day', () => {
  const result = getAppointmentsForDay(state, 'Monday');
  expect(result.length).toEqual(3);
});

test('getAppointmentsForDay returns an array containing the correct appointment objects', () => {
  const [first, second] = getAppointmentsForDay(state, 'Tuesday');
  expect(first).toEqual(state.appointments['4']);
  expect(second).toEqual(state.appointments['5']);
});

test('getAppointmentsForDay returns an empty array when the days data is empty', () => {
  const result = getAppointmentsForDay({ days: [] }, 'Monday');
  expect(result.length).toEqual(0);
});

test('getAppointmentsForDay returns an empty array when the day is not found', () => {
  const result = getAppointmentsForDay(state, 'Wednesday');
  expect(result.length).toEqual(0);
});
test('getInterview returns an object with the interviewer data', () => {
  const result = getInterview(state, state.appointments['3'].interview);
  expect(result).toEqual(
    expect.objectContaining({
      student: expect.any(String),
      interviewer: expect.objectContaining({
        id: expect.any(Number),
        name: expect.any(String),
        avatar: expect.any(String)
      })
    })
  );
});

test('getInterview returns null if no interview is booked', () => {
  const result = getInterview(state, state.appointments['2'].interview);
  expect(result).toBeNull();
});

test('getInterviewersForDay returns an array', () => {
  const result = getInterviewersForDay(state, 'Monday');
  expect(Array.isArray(result)).toBe(true);
});

test('getInterviewersForDay returns an array with a length matching the number of appointments for that day', () => {
  const result = getInterviewersForDay(state, 'Monday');
  expect(result.length).toEqual(3);
});

test('getInterviewersForDay returns an array containing the correct appointment objects', () => {
  const [first, second] = getInterviewersForDay(state, 'Tuesday');
  expect(first).toEqual(state.interviewers['4']);
  expect(second).toEqual(state.interviewers['5']);
});

test('getInterviewersForDay returns an empty array when the days data is empty', () => {
  const result = getInterviewersForDay({ days: [] }, 'Monday');
  expect(result.length).toEqual(0);
});

test('getInterviewersForDay returns an empty array when the day is not found', () => {
  const result = getAppointmentsForDay(state, 'Wednesday');
  expect(result.length).toEqual(0);
});
