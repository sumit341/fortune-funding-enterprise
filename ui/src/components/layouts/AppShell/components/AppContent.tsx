import type { ReactNode } from "react";

import { PageContainer } from "../../PageContainer/PageContainer";

interface Props {
  children: ReactNode;
}

export function AppContent({
  children,
}: Props) {
  return (
    <PageContainer>
      {children}
    </PageContainer>
  );
}