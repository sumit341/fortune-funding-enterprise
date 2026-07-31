import LegalLayout from "./components/LegalLayout";
import LegalSection from "./components/LegalSection";

export default function PrivacyPolicy() {
  return (
    <LegalLayout title="Privacy Policy">

      <LegalSection title="Information Collection">

        We collect personal information required
        to provide our trading services.

      </LegalSection>

      <LegalSection title="Data Usage">

        Your information is used only for account
        management, verification and support.

      </LegalSection>

      <LegalSection title="Data Security">

        We apply industry-standard security
        practices to protect your information.

      </LegalSection>

    </LegalLayout>
  );
}