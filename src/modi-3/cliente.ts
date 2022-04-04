import {Solver} from './solver';
import {BubbleSort} from './bubblesort';
import {MergeSort} from './mergesort';


const mySolver = new Solver([3, 6, 4, 1], new BubbleSort());
mySolver.funcionamiento();

mySolver.setStrategy(new MergeSort());
mySolver.funcionamiento();
