import ContactForm from "./components/ContactForm";
import ContactInfo from "./components/ContactInfo";
import OfficeLocation from "./components/OfficeLocation";
import SocialLinks from "./components/SocialLinks";

export default function Contact() {
  return (
    <main className="mx-auto max-w-7xl space-y-8 p-8">

      <div className="grid gap-8 lg:grid-cols-2">

        <ContactForm />

        <div className="space-y-8">

          <ContactInfo />

          <OfficeLocation />

          <SocialLinks />

        </div>

      </div>

    </main>
  );
}