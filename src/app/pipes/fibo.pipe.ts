import { Pipe, PipeTransform } from '@angular/core';
import memo from "memo-decorator";

@Pipe({
  name: 'fibo'
})
export class FiboPipe implements PipeTransform {

  @memo() 
  transform(n: any): number {
    if (n==1 || n==0) {
      return 1;
    }
    return this.transform(n-1) + this.transform(n-2);
  }
  

}
