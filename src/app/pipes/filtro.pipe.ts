import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtro'
})
export class FiltroPipe implements PipeTransform {

  transform(value: any[], texto: string, campo: string): any[] {
    let ret: any[] = [];
    /*  console.log('pipe: ', value);
     console.log('text:', texto);
     console.log('campo: ', campo); */

    if (texto === '') {
      return value
    } else if (!value) {
      return value;
    } else {
      texto.toLowerCase();
      /* console.log('pasa: ', texto); */
      return value.filter(
        item => item[campo].includes(texto)
      );
      /* 
            value.forEach(element => {
              if (element.title.includes(texto)) {
                ret.push(element);
              }
            });
      
            return ret;
       */
    }


  }

}
