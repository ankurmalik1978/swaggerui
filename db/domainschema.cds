namespace com.sap.sme;
using { Currency, managed, cuid } from '@sap/cds/common';

entity Authors : managed {
  key ID : Integer;
  name   : String(111);
  dateOfBirth  : Date;
  dateOfDeath  : Date;
  placeOfBirth : String;
  placeOfDeath : String;
}
