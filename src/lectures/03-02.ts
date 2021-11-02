interface BusinessPartner {
    name: string;
    credit: number;
   }
   interface Identity {
    id: number;
    name: string;
   }
   interface Contact {
    email: string;
    phone: string;
   }
   type Employee = Identity & Contact;
   type Customer = BusinessPartner & Contact

type Status = 'active' | 'inactive';
type ProductStatus = 0 | 1 | 2 | 3; 
type StudentId = number | string;
interface Student {
 id: number | string;
 name: string;
 gender: 'male' | 'female';
 grade: 'A' | 'B' | 'C' | 'D' | 'E';
}