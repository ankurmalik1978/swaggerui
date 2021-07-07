using { com.sap.sme as my } from '../db/domainschema';


service CatalogService{
  entity Authors as projection on my.Authors;

  event customEvent1{
      ID: String(10);
  }
 
}

