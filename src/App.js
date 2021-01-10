import logo from './logo.svg';
import './App.css';
import { Dropdown } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'
import React from 'react';
import ReactDOM from 'react-dom';
import Select from 'react-select';

const options = [
  { value: 'C Chord', label: 'C' },
  { value: 'C# Chord', label: 'C# / Db' },
  { value: 'D Chord', label: 'D' },
  { value: 'D# Chord', label: 'D# / Eb' },
  { value: 'E Chord', label: 'E' },
  { value: 'F Chord', label: 'F' },
  { value: 'F# Chord', label: 'F# / Gb' },
  { value: 'G Chord', label: 'G' },
  { value: 'G# Chord', label: 'G# / Ab' },
  { value: 'A Chord', label: 'A' },
  { value: 'A# Chord', label: 'A# / Bb' },
  { value: 'B Chord', label: 'B' },
];

const tone = [
  { value: 'aug', label: 'Augmented' },
  { value: 'dim', label: 'Diminished' },
  { value: 'dom', label: 'Dominant' },
  { value: 'maj', label: 'Major' },
  { value: 'maj7', label: 'Major 7' },
  { value: 'maj6', label: 'Major 6' },
  { value: 'min', label: 'Minor' },
  { value: 'min7', label: 'Minor 7' },
];

class App extends React.Component {
  state = {
    selectedOption: null,
    chordOption: null,
  };
  handleChange = selectedOption => {
    this.setState({ selectedOption });
    console.log(`Option selected:`, selectedOption);
  };
  chordChange = chordOption => {
    this.setState({ chordOption });
  }
  render() {
    const { selectedOption } = this.state;
    const { chordOption } = this.state;

    return (
      <div>
        <Select
          value={selectedOption}
          onChange={this.handleChange}
          options={options}
        />
        <Select
          value={chordOption}
          onChange={this.chordChange}
          options={tone}
        />
      </div>
    );
  }
}

export default App;
