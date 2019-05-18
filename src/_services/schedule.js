import speakers from './speakers';

// Timeline
const timeline = [
  {
    time: '10:00',
    duration: 30,
    orient: 'left',
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
    orient: 'left',
  },
  {
    time: '15:15',
    duration: 15,
    orient: 'right',
  },
  {
    time: '15:30',
    duration: 15,
    orient: 'left',
  },
  {
    time: '15:45',
    duration: 15,
    orient: 'right',
  },
  {
    time: '16:00',
    duration: 15,
    orient: 'left',
  },
  {
    time: '16:15',
    duration: 45,
    orient: 'left',
  },
  {
    time: '17:00',
    duration: 30,
    orient: 'left',
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
    {
      speakers: [speakers.Lilit_Tadevosyan],
      duration: 30,
    },
    {
      speakers: [speakers.Eugene_Zharkov],
      duration: 45,
    },
    {
      topic: 'Break for 15 min',
      duration: 15,
      isBreak: true,
    },
    {
      speakers: [speakers.Leandro_Ostera],
      duration: 45,
    },
    {
      speakers: [speakers.Taguhi_Asatryan],
      duration: 30,
    },
    {
      topic: 'Break for 15 min',
      duration: 15,
      isBreak: true,
    },
    {
      speakers: [speakers.Cristian_Oliveira_da_Rosa],
      duration: 45,
    },
    {
      speakers: [speakers.Jesse_Martin],
      duration: 30,
    },
    {
      speakers: [speakers.Gagik_Arustamyan],
      duration: 30,
    },
    {
      speakers: [speakers.Radoslaw_Malecki],
      duration: 30,
    },
    {
      speakers: [speakers.Varik_Matevosyan],
      duration: 30,
    },
  ],
];

export { schedule, timeline };

export default schedule;
