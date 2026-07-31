import LegalLayout from "./components/LegalLayout";
import LegalSection from "./components/LegalSection";

export default function RefundPolicy() {
  return (
    <LegalLayout title="Refund Policy">

      <LegalSection title="Challenge Fees">
        Challenge purchases are generally non-refundable
        once the evaluation has started.
      </LegalSection>

      <LegalSection title="Duplicate Payments">
        Duplicate or accidental payments are reviewed
        individually and refunded when applicable.
      </LegalSection>

      <LegalSection title="Support">
        For refund-related questions, contact our support
        team with your order ID and payment details.
      </LegalSection>

    </LegalLayout>
  );
}