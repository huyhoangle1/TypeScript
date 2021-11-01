import { string } from "yargs";

export function isPositive(n: number){
    return n > 0;
}

enum Status {
    PENDING,  //0
    IN_PROGRESS,//1
    DONE,//2
    CANCELLED,//3 
}
interface Student {
    id: number;
    name: string;
   }
   interface List<T> {
    length: number;
    // [index: number]: T | string;
    [index: number]: T ;
   }
   const numberList: List<number> = [1, 2, 3];
//    const numberList: List<number> = [1, 2, 3 ,''];
   const wordList: List<string> = ['easy', 'frontend'];
   const studentList: List<Student> = [
    { id: 1, name: 'easy' },
    { id: 2, name: 'frontend' },
   ]