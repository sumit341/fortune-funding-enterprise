import LegalLayout from "./components/LegalLayout";
import LegalSection from "./components/LegalSection";

export default function TermsConditions() {
  return (
    <LegalLayout title="Terms & Conditions">

      <LegalSection title="Eligibility">
        Users must meet all eligibility requirements
        before purchasing or participating in any
        evaluation challenge.
      </LegalSection>

      <LegalSection title="Trading Rules">
        Every challenge has its own risk parameters,
        drawdown limits and profit targets. Violating
        these rules may result in account termination.
      </LegalSection>

      <LegalSection title="Limitation of Liability">
        Fortune Funding is not responsible for losses
        caused by internet outages, third-party services,
        or force majeure events.
      </LegalSection>

    </LegalLayout>
  );
}