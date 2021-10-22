// 1
interface ObjectData{
    title: string,
    status: boolean,
    id:number,
}

// 2
interface UserName{
    firstname: string,
    lastname?:any,
}

function getName(d:UserName):string {
    return d.firstname + " " + d.lastname
}

getName({ firstname: "abhay"});

// 3
interface Address{
    houseNumber: number,
    street: string,
    city: string,
    state: string,
    postalCode: number,
    country: string,
}

// 4
interface PersonDetails{
    Prefix?: string,
    phoneNumber: number,
    address: Array<string>,
    email?: string,
    fistname: string,
    lastname: string,
    middlename?: string,
}

// 5
var arrUser: Array<string>;
function PhoneBook(p: PersonDetails):void {
   
    let g: Record<string, string | number | Array<string> > ={
    prefix: p.Prefix ,
    number: p.phoneNumber,
    address: p.address,
    email: p.email,
    firstname: p.fistname,
    lastname: p.lastname,
    middlename: p.middlename
    }

    arrUser.push(g);
}