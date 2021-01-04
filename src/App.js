import logo from './logo.svg';
import './App.css';
import { Dropdown } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'

const chordTone = [
  {
    key: 'Augmented',
    text: 'Augmented',
    value: 'Augmented',
  },
  {
    key: 'Diminished',
    text: 'Diminished',
    value: 'Diminished',
  },
  {
    key: 'Dominant (7)',
    text: 'Dominant (7)',
    value: 'Dominant (7)',
  },
  {
    key: 'Major',
    text: 'Major',
    value: 'Major',
  },
  {
    key: 'Major 7',
    text: 'Major 7',
    value: 'Major 7',
  },
  {
    key: 'Major 6',
    text: 'Major 6',
    value: 'Major 6',
  },
  {
    key: 'Minor',
    text: 'Minor',
    value: 'Minor',
  },
  {
    key: 'Minor major 7th',
    text: 'Minor major 7th',
    value: 'Minor major 7th',
  },
  {
    key: 'Minor 7',
    text: 'Minor 7',
    value: 'Minor 7',
  },
]

const ChordToneFunction = () => (
  <Dropdown
    placeholder='Select Chord Tone'
    fluid
    selection
    options={chordTone}
  />
)

const chordOptions = [
  {
    key: 'C Chord',
    text: 'C',
    value: 'C Chord',
  },
  {
    key: 'Db Chord',
    text: 'Db',
    value: 'Db Chord',
  },
  {
    key: 'D Chord',
    text: 'D',
    value: 'D Chord',
  },
  {
    key: 'Eb Chord',
    text: 'Eb',
    value: 'Eb Chord',
  },
  {
    key: 'E Chord',
    text: 'E',
    value: 'E Chord',
  },
  {
    key: 'F Chord',
    text: 'F',
    value: 'F Chord',
  },
  {
    key: 'Gb Chord',
    text: 'Gb',
    value: 'Gb Chord',
  },
  {
    key: 'G Chord',
    text: 'G',
    value: 'G Chord',
  },
  {
    key: 'Ab Chord',
    text: 'Ab',
    value: 'A Chord',
  },
  {
    key: 'A Chord',
    text: 'A',
    value: 'A Chord',
  },
  {
    key: 'Bb Chord',
    text: 'Bb',
    value: 'Bb Chord',
  },
  {
    key: 'B Chord',
    text: 'B',
    value: 'B Chord',
  },
]

const DropdownExampleSelection = () => (
  <Dropdown
    placeholder='Select Chord Root'
    fluid
    selection
    options={chordOptions}
  />
)

export {ChordToneFunction};
export default DropdownExampleSelection;
