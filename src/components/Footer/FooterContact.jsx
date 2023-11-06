import FooterItem from "./FooterItem";

export default function FooterContact() {
    return <FooterItem title="Contact us">
        <ul>
            <li>
                <img src="/images/pin.png" alt="address" />
                <span>
                    1/15-8, Ponnandampalayam, Arasur – Annur Road,
                    Thennampalayam, Coimbatore – 641 659,
                    Tamil Nadu, India
                </span>
            </li>
            <li>
                <img src="/images/mail.png" alt="email" />
                <span>
                    sales@airlockintl.co.in
                </span>
            </li>
            <li>
                <img src="/images/phone.png" alt="phone" />
                <span>
                    +91 (422) 6678535
                </span>
            </li>
        </ul>
    </FooterItem>
}