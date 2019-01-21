exports = typeof window === 'undefined' ? global : window;

exports.arraysAnswers = {
  indexOf: function(arr, item) {
    return arr.indexOf(item)
  },

  sum: function(arr) {
    return arr.reduce((a,b)=>a+b)
  },

  remove: function(arr, item) {
    return arr.filter((a)=>a!=item)
  },

  removeWithoutCopy: function(arr, item) {
    for(let i = 0;i<arr.length;i++){
      if(arr[i]===item){
        arr = arr.splice(arr[i],0)
      }
    }
    return arr
  },

  append: function(arr, item) {
    arr.push(item)
    return arr
  },

  truncate: function(arr) {
    arr.pop()
    return arr
  },

  prepend: function(arr, item) {
    arr.unshift(item)
    return arr
  },

  curtail: function(arr) {
    arr.shift()
    return arr
  },

  concat: function(arr1, arr2) {
    return arr1.concat(arr2)
  },

  insert: function(arr, item, index) {
    arr = arr.splice(index,0,item)
    return arr
  },

  count: function(arr, item) {
    let count = 0;
    arr.forEach((i)=>{
      if (i === item){
        count++
      }
    })
    return count

  },

  duplicates: function(arr) {
    let dups = []
    arr = arr.slice().sort()
    for(let i = 0;i<arr.length;i++){
    if(arr[i]==arr[i-1]){
      dups.push(arr[i])
    }
  }
    let unique = [...new Set(dups)];
    return unique
  },

  square: function(arr) {
    arr = arr.map((a)=>a*a)
    return arr
  },

  findAllOccurrences: function(arr, target) {
    let occurrences = []
    for(let i = 0;i<arr.length;i++){
      if(arr[i] === target){
        occurrences.push(i)
      }
    }
    return occurrences
  }
};
