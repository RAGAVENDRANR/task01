import { Pipe, PipeTransform } from '@angular/core';
import { datalisttype } from './app.component';

@Pipe({
  name: 'searchdata'
})
export class SearchdataPipe implements PipeTransform {

  transform(items: datalisttype[], searchstring:string): datalisttype[] {
    if (!items ||!searchstring){
      return items;
    }
    return items.filter(item => 
      item.id.toString().toLocaleLowerCase().includes(searchstring.toLocaleLowerCase()) ||
      item.name.toString().toLocaleLowerCase().includes(searchstring.toLocaleLowerCase()) ||
      item.age.toString().toLocaleLowerCase().includes(searchstring.toLocaleLowerCase()) ||
      item.profession.toString().toLocaleLowerCase().includes(searchstring.toLocaleLowerCase()) ||
      item.location.toString().toLocaleLowerCase().includes(searchstring.toLocaleLowerCase()))
    }
  }