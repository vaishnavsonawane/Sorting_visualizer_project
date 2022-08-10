export function getMergeSortAnimations(array) {
  const animations = [];
  if (array.length <= 1) return array;
  const auxiliaryArray = array.slice();
  mergeSortHelper(array, 0, array.length - 1, auxiliaryArray, animations);
  return animations;
}

export function getbubblesortAnimations(array) {
  const animations2 = [];
  if (array.length <= 1) return array;
  
  bubble_sort(array, animations2);
  return animations2;
}

export function getinsertionsortAnimations(array) {
  const animations3 = [];
  if (array.length <= 1) return array;
  
  insertion_sort(array, animations3);
  return animations3;
}

function insertion_sort(array,animations3)
{
  let n = array.length; 
        for (let i = 1; i < n; i++) { 
            let key = array[i]; 
            let j = i - 1; 
  
            
            while (j > 0 && array[j] > key) {

                animations3.push([i, j]);
                animations3.push([i, j]);

                animations3.push([j+1, array[j]]);
                array[j + 1] = array[j]; 
                j = j - 1; 
            } 

            animations3.push([i, j]);
            animations3.push([i, j]);
            animations3.push([j+1, key]);

            array[j + 1] = key; 
        }

}


function mergeSortHelper(
  mainArray,
  startIdx,
  endIdx,
  auxiliaryArray,
  animations,
) {
  if (startIdx === endIdx) return;
  const middleIdx = Math.floor((startIdx + endIdx) / 2);
  mergeSortHelper(auxiliaryArray, startIdx, middleIdx, mainArray, animations);
  mergeSortHelper(auxiliaryArray, middleIdx + 1, endIdx, mainArray, animations);
  doMerge(mainArray, startIdx, middleIdx, endIdx, auxiliaryArray, animations);
}

function doMerge(
  mainArray,
  startIdx,
  middleIdx,
  endIdx,
  auxiliaryArray,
  animations,
) {
  let k = startIdx;
  let i = startIdx;
  let j = middleIdx + 1;
  while (i <= middleIdx && j <= endIdx) {
   
    animations.push([i, j]);
  
    animations.push([i, j]);
    if (auxiliaryArray[i] <= auxiliaryArray[j]) {
     
      animations.push([k, auxiliaryArray[i]]);
      mainArray[k++] = auxiliaryArray[i++];
    } else {
     
      animations.push([k, auxiliaryArray[j]]);
      mainArray[k++] = auxiliaryArray[j++];
    }
  }
  while (i <= middleIdx) {
  
    animations.push([i, i]);
  
    animations.push([i, i]);
    
    animations.push([k, auxiliaryArray[i]]);
    mainArray[k++] = auxiliaryArray[i++];
  }
  while (j <= endIdx) {
 
    animations.push([j, j]);
    
    animations.push([j, j]);
    
    animations.push([k, auxiliaryArray[j]]);
    mainArray[k++] = auxiliaryArray[j++];
  }
}


function bubble_sort(array,animations2)
{
  console.log("I am in bubble js function");
  for(let i=array.length-1;i>0;i--)
    {

        for(let j=0;j<i;j++)
        {
          animations2.push([j, j+1]);
  
          animations2.push([j, j+1]);
          let height1=array[j];
          let height2=array[j+1];

            if(array[j]>array[j+1])
            { 
              let temp=array[j];
              array[j]=array[j+1];
              array[j+1]=temp;
            
              animations2.push([j, height2]);
              animations2.push([j+1, height1]);
            }
            else
            {
              animations2.push([j, height1]);
              animations2.push([j+1, height2]);
            }

        }
    }
    //console.log("I am in function");
}
