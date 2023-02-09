import React, { useState } from 'react';
import './App.css';

function App() {
   const [value, setValue] = useState<string | number>(0);
   const onChangeValue = (e: React.ChangeEvent<HTMLInputElement> & { target: { value: number | string } }) => {
      let newValue: string | number = e.target.value
      newValue.replace(',', '.');
      if (newValue === '') {
         setValue(0);
      } else if ((newValue[0].indexOf('-') !== -1) && !(newValue.includes('-', 1))) {
         setValue(newValue);
      } else isNaN(+newValue) ? setValue(+value) : setValue(+newValue);
   }

   //third exercise
   const convertArray = (A: Array<number>, B: Array<number>) => {
      const C: Array<number> = [];//содержатся числа, которых нет в массиве B
      const D: Array<number> = [];//содержатся все числа, которые есть в обоих массивах A и B

      A.forEach(el => {
         if (B.includes(el, 0)) {
            D.push(el);
         } else if (!B.includes(el, 0)) {
            C.push(el);
         }
      })
      console.clear();

      console.group();
      console.log('содержатся числа, которых нет во втором массиве');
      console.log(C);
      console.groupEnd();

      console.group();
      console.log('содержатся все числа, которые есть в обоих массивах');
      console.log(D);
      console.groupEnd();
   }
   const arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
   const arr2 = [1, 2, 3, 4, 5];

   //convertArray(arr1, arr2)

   return (
      <div className="App">
         <header className="App-header">

            {/* first exercise */}
            <div className="exerciseOneContainer">
               <div className="startBlock">start</div>
               <div className="middleBlock1">middle flex 1</div>
               <div className="middleBlock2">middle flex 2</div>
               <div className="endBlock">end</div>
            </div>

            {/* second exercise */}
            <div className="exerciseTwoContainer">
               <input type="text" value={value} onChange={onChangeValue} />
            </div>

         </header>
      </div>
   );
}

export default App;
