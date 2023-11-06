import NavContactItem from "./NavContactItem";

const CONTACTS = [{
    id: 1,
    icon: '/images/mail.png',
    heading: "Email Us",
    detail: 'sales@airlockintl.co.in'
}, {
    id: 2,
    icon: '/images/phone.png',
    heading: "Contact Us",
    detail: '+91 (422) 6678535'
}, {
    id: 3,
    icon: '/images/clock.png',
    heading: "Opening Hours",
    detail: 'Mon - Sat 08:30am to 5pm'
},]


export default function NavContact() {
    return <div className="nav-contact">
        {CONTACTS.map(contact => <NavContactItem key={contact.id} icon={contact.icon} heading={contact.heading} detail={contact.detail} />)}
    </div>
}