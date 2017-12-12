import { Injectable } from '@angular/core';

@Injectable()
export class CommonDataService {

  constructor() { }
  data = [];

  customerData() {
   return this.data = [
    {customerId: 1, customerName: 'saa', contactName1: 'ddd'},
    {customerId: 2, customerName: 'saa', contactName1: 'ddd'},
    {customerId: 3, customerName: 'saa', contactName1: 'ddd'},
    {customerId: 4, customerName: 'saa', contactName1: 'ddd'},
    {customerId: 5, customerName: 'saa', contactName1: 'ddd'},
    {customerId: 6, customerName: 'saa', contactName1: 'ddd'}
    ];
  }
  counterPartyData() {
   return this.data = [
    {counterpartyId: 1, counterpartyName: 'gopal', counterpartyAddress1: 'ddd'},
    {counterpartyId: 2, counterpartyName: 'vishnu', counterpartyAddress1: 'ddd'},
    {counterpartyId: 3, counterpartyName: 'parvej', counterpartyAddress1: 'ddd'},
    {counterpartyId: 4, counterpartyName: 'parvej', counterpartyAddress1: 'ddd'},
    {counterpartyId: 5, counterpartyName: 'parvej', counterpartyAddress1: 'ddd'},
    {counterpartyId: 6, counterpartyName: 'parvej', counterpartyAddress1: 'ddd'}
    ];
  }
  contentData() {
   return this.data = [
    {contentModule: 1, contentName: 'gopal1', contentDescription: 'ddd'},
    {contentModule: 2, contentName: 'gopal2', contentDescription: 'ddd'},
    {contentModule: 3, contentName: 'gopal3', contentDescription: 'ddd'},
    {contentModule: 4, contentName: 'gopal4', contentDescription: 'ddd'},
    {contentModule: 5, contentName: 'gopal5', contentDescription: 'ddd'},
    {contentModule: 6, contentName: 'gopal6', contentDescription: 'ddd'},
    {contentModule: 7, contentName: 'gopal7', contentDescription: 'ddd'},
    {contentModule: 8, contentName: 'gopal8', contentDescription: 'ddd'},
    {contentModule: 9, contentName: 'gopal9', contentDescription: 'ddd'},
    {contentModule: 10, contentName: 'gopal10', contentDescription: 'ddd'},
    {contentModule: 11, contentName: 'gopal11', contentDescription: 'ddd'},
    {contentModule: 12, contentName: 'gopal112', contentDescription: 'ddd'},
    {contentModule: 13, contentName: 'gopal13', contentDescription: 'ddd'},
    ];
  }
  bankData() {
    return this.data  = [
    {bankId: 'SBIMUMBAI11',
    bicCode: 'SBININ123',
    bankName: 'STATE BANK OF INDIA',
    // correspondent: '1',
    nostroAcNumber: '987654098',
    bankAddress1: 'NO.21 MADAME CAMA ROAD',
    bankAddress2: 'NARIMAN POINT',
    bankAddress3: 'MUMBAI INDIA 400021',
    importLc: '90000000',
    exportLc: '800000',
    guarantee: '700000000',
   },
   {bankId: 'SBIMUMBAI22',
   bicCode: 'SBININ145',
   bankName: 'STATE BANK OF INDIA',
   // correspondent: '1',
   nostroAcNumber: '98765434',
   bankAddress1: 'NO.21 MADAME CAMA ROAD',
   bankAddress2: 'NARIMAN POINT',
   bankAddress3: 'MUMBAI INDIA 400021',
   importLc: '90000000',
   exportLc: '800000',
   guarantee: '700000000',
  },
  {bankId: 'HGHGHGHGH',
  bicCode: 'SBININ145',
  bankName: 'BANK OF INDIA',
  // correspondent: '1',
  nostroAcNumber: '98765434',
  bankAddress1: 'NO.21 MADAME CAMA ROAD',
  bankAddress2: 'NARIMAN POINT',
  bankAddress3: 'MUMBAI INDIA 400021',
  importLc: '90000000',
  exportLc: '800000',
  guarantee: '700000000',
 },
 {bankId: '1222OPOOIIO',
 bicCode: 'union145',
 bankName: 'unionNGGH',
 // correspondent: '1',
 nostroAcNumber: '98765434',
 bankAddress1: 'NO.21 MADAME CAMA ROAD',
 bankAddress2: 'NARIMAN POINT',
 bankAddress3: 'MUMBAI INDIA 400021',
 importLc: '90000000',
 exportLc: '800000',
 guarantee: '700000000',
},
{bankId: '1222UIUIJK',
bicCode: 'union145',
bankName: 'unionJHJH',
// correspondent: '1',
nostroAcNumber: '98765434',
bankAddress1: 'NO.21 MADAME CAMA ROAD',
bankAddress2: 'NARIMAN POINT',
bankAddress3: 'MUMBAI INDIA 400021',
importLc: '90000000',
exportLc: '800000',
guarantee: '700000000',
},
{bankId: '122WEDFDF2',
bicCode: 'union145',
bankName: 'unionJHJH',
// correspondent: '1',
nostroAcNumber: '98765434',
bankAddress1: 'NO.21 MADAME CAMA ROAD',
bankAddress2: 'NARIMAN POINT',
bankAddress3: 'MUMBAI INDIA 400021',
importLc: '90000000',
exportLc: '800000',
guarantee: '700000000',
},
{bankId: '122ASWEEE',
bicCode: 'union145',
bankName: 'unionUYUYJ',
// correspondent: '1',
nostroAcNumber: '98765434',
bankAddress1: 'NO.21 MADAME CAMA ROAD',
bankAddress2: 'NARIMAN POINT',
bankAddress3: 'MUMBAI INDIA 400021',
importLc: '90000000',
exportLc: '800000',
guarantee: '700000000',
},
{bankId: '1222DFDFDF',
bicCode: 'union145',
bankName: 'unio5n',
// correspondent: '1',
nostroAcNumber: '98765434',
bankAddress1: 'NO.21 MADAME CAMA ROAD',
bankAddress2: 'NARIMAN POINT',
bankAddress3: 'MUMBAI INDIA 400021',
importLc: '90000000',
exportLc: '800000',
guarantee: '700000000',
},
{bankId: '512WWW22',
bicCode: 'union145',
bankName: 'unionJJH',
// correspondent: '1',
nostroAcNumber: '98765434',
bankAddress1: 'NO.21 MADAME CAMA ROAD',
bankAddress2: 'NARIMAN POINT',
bankAddress3: 'MUMBAI INDIA 400021',
importLc: '90000000',
exportLc: '800000',
guarantee: '700000000',
},
{bankId: '1662HJJWWW22',
bicCode: 'union145',
bankName: 'union4',
// correspondent: '1',
nostroAcNumber: '98765434',
bankAddress1: 'NO.21 MADAME CAMA ROAD',
bankAddress2: 'NARIMAN POINT',
bankAddress3: 'MUMBAI INDIA 400021',
importLc: '90000000',
exportLc: '800000',
guarantee: '700000000',
},
{bankId: '412WWDFDFW22',
bicCode: 'union145',
bankName: 'union1',
// correspondent: '1',
nostroAcNumber: '98765434',
bankAddress1: 'NO.21 MADAME CAMA ROAD',
bankAddress2: 'NARIMAN POINT',
bankAddress3: 'MUMBAI INDIA 400021',
importLc: '90000000',
exportLc: '800000',
guarantee: '700000000',
},
{bankId: '212WWDFDFW22',
bicCode: 'union145',
bankName: 'union',
// correspondent: '1',
nostroAcNumber: '98765434',
bankAddress1: 'NO.21 MADAME CAMA ROAD',
bankAddress2: 'NARIMAN POINT',
bankAddress3: 'MUMBAI INDIA 400021',
importLc: '90000000',
exportLc: '800000',
guarantee: '700000000',
},
{bankId: '112WWDFDFW22',
bicCode: 'union145',
bankName: 'union2',
// correspondent: '1',
nostroAcNumber: '98765434',
bankAddress1: 'NO.21 MADAME CAMA ROAD',
bankAddress2: 'NARIMAN POINT',
bankAddress3: 'MUMBAI INDIA 400021',
importLc: '90000000',
exportLc: '800000',
guarantee: '700000000',
},
  ];
}

}
