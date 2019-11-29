import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchfilter'
})
export class SearchfilterPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    console.log(value)
    if(args){
      console.log(args);
      console.log(value.filter(val=> val.firstName.toLowerCase().includes(args.toLowerCase())));
      console.log(args.toLowerCase());
      return value.filter(val=> val.firstName.toLowerCase().includes(args.toLowerCase()));
    }
    else{
      return value;
    }


  }

}
