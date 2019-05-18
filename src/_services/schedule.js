import speakers from './speakers';

// Timeline
const timeline = [
  {
    time: '10:00',
    duration: 30,
  },
  {
    time: '10:30',
    duration: 30,
  },
  {
    time: '11:00',
    duration: 45,
  },
  {
    time: '11:45',
    duration: 15,
  },
  {
    time: '12:00',
    duration: 45,
  },
  {
    time: '12:45',
    duration: 30,
  },
  {
    time: '13:15',
    duration: 15,
  },
  {
    time: '13:30',
    duration: 45,
  },
  {
    time: '14:15',
    duration: 30,
  },
  {
    time: '14:45',
    duration: 15,
  },
  {
    time: '15:00',
    duration: 15,
  },
  {
    time: '15:15',
    duration: 15,
  },
  {
    time: '15:30',
    duration: 15,
  },
  {
    time: '15:45',
    duration: 15,
  },
  {
    time: '16:00',
    duration: 15,
  },
  {
    time: '16:15',
    duration: 45,
  },
  {
    time: '17:00',
    duration: 30,
  },
];

const schedule = [
  // Main hall
  [
    {
      topic: 'OPENING',
      duration: 30,
      isGeneral: true,
    },
    {
      speakers: [speakers.Elizabet_Oliveira],
      duration: 30,
    },
    {
      speakers: [speakers.Miłosz_Piechocki],
      duration: 45,
    },
    {
      topic: 'Break for 15 min',
      duration: 15,
      isBreak: true,
    },
    {
      speakers: [speakers.Khachatur_Virabyan],
      duration: 45,
    },
    {
      speakers: [speakers.Sara_Vieira],
      duration: 30,
    },
    {
      topic: 'Break for 15 min',
      duration: 15,
      isBreak: true,
    },
    {
      speakers: [speakers.Roy_Derks],
      duration: 45,
    },
    {
      speakers: [speakers.Narendra_Shetty],
      duration: 30,
    },
    {
      topic: 'Break for 15 min',
      duration: 15,
      isBreak: true,
    },
    {
      speakers: [speakers.Denys_Radin],
      duration: 30,
    },
    {
      speakers: [speakers.Rebecca_Hill],
      duration: 30,
    },
    {
      topic: 'Break for 15 min',
      duration: 15,
      isBreak: true,
    },
    {
      speakers: [speakers.Dan_Abramov, speakers.Sara_Vieira],
      duration: 45,
    },
    {
      topic: 'CLOSING',
      duration: 30,
      isGeneral: true,
    },
  ],
  // Blue hall
  [
    {
      topic: '',
      duration: 30,
      isPlaceholder: true,
    },
  ],
];

export { schedule, timeline };

export default schedule;
