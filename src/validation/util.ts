﻿class Util {
  public isEmptyVal(val: any): Boolean {
    if (val === undefined) {
      return true;
    }
    if (val === null) {
      return true;
    }

    if (val === 0) {
      return false;
    }

    if (val.toString() == Number.NaN.toString()) {
      return true;
    }

    if (val === "") {
      return true;
    } else {
      return false;
    }
  }

  public isDate(val: any): boolean {
    return Object.prototype.toString.apply(val) === "[object Date]";
  }

  public toDate(val: string): Date {
    try {
      /* Convertir un string de type dd/mm/yyyy en type Date */
      var dateString = val;
      var dataSplit = dateString.split("/");
      var dateConverted;

      if (dataSplit[2].split(" ").length > 1) {
        var hora = dataSplit[2].split(" ")[1].split(":");
        dataSplit[2] = dataSplit[2].split(" ")[0];
        dateConverted = new Date(
          parseInt(dataSplit[2]),
          parseInt(dataSplit[1]) - 1,
          parseInt(dataSplit[0]),
          parseInt(hora[0]),
          parseInt(hora[1])
        );
      } else {
        var years = 2000;
        var yearsString = dataSplit[2];
        var l = yearsString.length;
        if (l === 2 || l === 3) {
          years += parseInt(yearsString);
        } else if (yearsString.length === 4) {
          years = parseInt(yearsString);
        } else {
          return null;
        }

        dateConverted = new Date(
          years,
          parseInt(dataSplit[1]) - 1,
          parseInt(dataSplit[0])
        );
      }
      return dateConverted;
    } catch (error) {
      return null;
    }
  }
  public formatDate(date: Date): string {
    var d = date.getDate();
    var m = date.getMonth() + 1; //Months are zero based
    var y = date.getFullYear();

    return "" + (d <= 9 ? "0" + d : d) + "/" + (m <= 9 ? "0" + m : m) + "/" + y;
  }
  public sortHashTable(
    hashTable: Array<any>,
    key: string,
    removeKey: boolean = false
  ): Array<any> {
    //  hashTable: le tableau d’objets
    //  key: la clé par laquelle on va trier le tableau
    //  removeKey: [OPTIONNEL] Un booléen égal à true si on veut supprimer ou non la clé qui nous permet de trier.
    hashTable = hashTable instanceof Array ? hashTable : [];
    var newHashTable = hashTable.sort(function(a: any, b: any) {
      if (typeof a[key] === "number") {
        return a[key] - b[key];
      } else {
        if (a[key] > b[key]) {
          return 1;
        } else {
          return 0;
        }
      }
    });
    if (removeKey) {
      for (var i in newHashTable) {
        delete newHashTable[i][key];
      }
    }
    return newHashTable;
  }
  public formatNumberLength(num:number, length:number):string {
    var r = "" + num;
    while (r.length < length) {
        r = "0" + r;
    }
    return r;
  }
}

var util = new Util();

export { util };
