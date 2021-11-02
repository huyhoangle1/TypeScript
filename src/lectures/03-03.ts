// // optional parameter
// // this is how ts understand
// // function getLength(numberList?: number[] | undefined): number
// function getLength(numberList?: number[]) {
//     return Array.isArray(numberList) ? numberList.length : 0;
//    }
//    // default parameter
//    // this is how ts understand
//    // function getLength(numberList?: number[]): number
//    function getLength(numberList: number[] = []) {
//     return Array.isArray(numberList) ? numberList.length : 0;
//    }
//    // ts error: Parameter cannot have question mark and initializer.ts(1015)
//    function getLength(numberList?: number[] = []) {
//     return Array.isArray(numberList) ? numberList.length : 0;
//    }