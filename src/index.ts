import { School } from "./school";

console.log(School.whatIsThis());

const bpphs = new School("Barisha Purba Para High School");
bpphs.funds = 10;
bpphs.funds = 6;
bpphs.funds = 25;

console.log(`School:`, bpphs);
console.log(`School Name: ${bpphs.name}`);
console.log(`School Funds: ${bpphs.funds}`);
