import React from 'react';
import {getMergeSortAnimations} from '../sortingAlgorithms/sortingAlgorithms.js';
import {getbubblesortAnimations} from '../sortingAlgorithms/sortingAlgorithms.js';
import {getinsertionsortAnimations} from '../sortingAlgorithms/sortingAlgorithms.js';
import './SortingVisualizer.css';

let ANIMATION_SPEED_MS =10;

const NUMBER_OF_ARRAY_BARS = 80;

const PRIMARY_COLOR = 'turquoise';

const SECONDARY_COLOR = 'red';

export default class SortingVisualizer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      array: [],
    };
  }

  componentDidMount() {
    this.resetArray();
  }

  resetArray() {
    const array = [];
    for (let i = 0; i < NUMBER_OF_ARRAY_BARS; i++) {
      array.push(randomIntFromInterval(5, 500));
    }
    this.setState({array});
  }

  mergeSort() {
    const animations = getMergeSortAnimations(this.state.array);
    for (let i = 0; i < animations.length; i++) {
      const arrayBars = document.getElementsByClassName('array-bar');
      const isColorChange = i % 3 !== 2;
      if (isColorChange) {
        const [barOneIdx, barTwoIdx] = animations[i];
        const barOneStyle = arrayBars[barOneIdx].style;
        const barTwoStyle = arrayBars[barTwoIdx].style;
        const color = i % 3 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;
        setTimeout(() => {
          barOneStyle.backgroundColor = color;
          barTwoStyle.backgroundColor = color;
        }, i * ANIMATION_SPEED_MS);
      } else {
        setTimeout(() => {
          const [barOneIdx, newHeight] = animations[i];
          const barOneStyle = arrayBars[barOneIdx].style;
          barOneStyle.height = `${newHeight}px`;
        }, i * ANIMATION_SPEED_MS);
      }
    }
  }

  quickSort() {
   
 
  }

  insertionSort() {
    const ANIMATION_SPEED_MS =8;
    const arrayBars = document.getElementsByClassName('array-bar');
    const barOneStyle = arrayBars[0].style;
    barOneStyle.height = `${0}px`;

    const animations = getinsertionsortAnimations(this.state.array);
    for (let i = 0; i < animations.length; i++) {
     
      const isColorChange = i % 3 !== 2;
      if (isColorChange) {
        const [barOneIdx, barTwoIdx] = animations[i];
        const barOneStyle = arrayBars[barOneIdx].style;
        const barTwoStyle = arrayBars[barTwoIdx].style;
        const color = i % 3 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;
        setTimeout(() => {
          barOneStyle.backgroundColor = color;
          barTwoStyle.backgroundColor = color;
        }, i * ANIMATION_SPEED_MS);
      } else {
        setTimeout(() => {
          const [barOneIdx, newHeight] = animations[i];
          const barOneStyle = arrayBars[barOneIdx].style;
          barOneStyle.height = `${newHeight}px`;
        }, i * ANIMATION_SPEED_MS);
      }
    }

 
  }

  bubbleSort() {
    ANIMATION_SPEED_MS =5;
    const animations2 = getbubblesortAnimations(this.state.array);
    for (let i = 0; i < animations2.length; i++) {
      const arrayBars = document.getElementsByClassName('array-bar');
      const isColorChange = (i % 4 === 0 || i % 4 === 1);
      if (isColorChange) {
        const [barOneIdx, barTwoIdx] = animations2[i];
        //console.log("in bubble jsx");
        console.log(arrayBars[barTwoIdx]);
        const barOneStyle = arrayBars[barOneIdx].style;
        const barTwoStyle = arrayBars[barTwoIdx].style;

        const color = i % 4 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;
        setTimeout(() => {
          barOneStyle.backgroundColor = color;
          barTwoStyle.backgroundColor = color;
        }, i * ANIMATION_SPEED_MS);
      } else {
        setTimeout(() => {
          const [barOneIdx, newHeight] = animations2[i];
          const barOneStyle = arrayBars[barOneIdx].style;
          barOneStyle.height = `${newHeight}px`;

        }, i * ANIMATION_SPEED_MS);
      }
    }
 
  }


  testSortingAlgorithms() {
    for (let i = 0; i < 100; i++) {
      const array = [];
      const length = randomIntFromInterval(1, 1000);
      for (let i = 0; i < length; i++) {
        array.push(randomIntFromInterval(-1000, 1000));
      }
      const javaScriptSortedArray = array.slice().sort((a, b) => a - b);
      const mergeSortedArray = getMergeSortAnimations(array.slice());
      
      console.log(arraysAreEqual(javaScriptSortedArray, mergeSortedArray));
      const bubbleSortedArray = getbubblesortAnimations(array.slice());
      console.log(arraysAreEqual(javaScriptSortedArray, bubbleSortedArray));
      const insertionSortedArray = getinsertionsortAnimations(array.slice());
      
      console.log(arraysAreEqual(javaScriptSortedArray, insertionSortedArray));
    }
  }

  render() {
    const {array} = this.state;

    return (
      <div className="parent" >
      <div className="array-container">
        {array.map((value, idx) => (
          <div
            className="array-bar"
            key={idx}
            style={{
              backgroundColor: PRIMARY_COLOR,
              height: `${value}px`,
            }}></div>
        ))}
        <br></br>
        <button onClick={() => this.resetArray()}>Generate New Array</button>
        <button onClick={() => this.mergeSort()}>Merge Sort</button>
      
        <button onClick={() => this.insertionSort()}>insertion Sort</button>
        <button onClick={() => this.bubbleSort()}>Bubble Sort</button>
        
      </div>
      </div>
    );
  }
}

function randomIntFromInterval(min, max) {
  
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function arraysAreEqual(arrayOne, arrayTwo) {
  if (arrayOne.length !== arrayTwo.length) return false;
  for (let i = 0; i < arrayOne.length; i++) {
    if (arrayOne[i] !== arrayTwo[i]) {
      return false;
    }
  }
  return true;
}
