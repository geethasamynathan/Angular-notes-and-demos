import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'employeeTitle'
})
export class EmployeeTitlePipe implements PipeTransform {

  transform(value: string, gender:string): string {
    console.log("Value"+value);
    console.log("Gender "+gender);
    if(gender.toLowerCase()=='male')
    {
    console.log("Gender "+gender);
    return "Mr."+value;
    }
    else
    {
    return "Miss. "+value;
    }
  }

}
