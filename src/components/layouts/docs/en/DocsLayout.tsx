import Introduction from './sections/Introduction';
import LayoutSections from './sections/LayoutSections';
import TypographySection from './sections/TypographySection';
import ColorsSection from './sections/ColorsSection';
import HowItWorksSection from './sections/HowItWorksSection';
import ContributingSection from './sections/ContributingSection';
import PlannedImprovements from './sections/PlannedImprovements';
import DocsFooter from './sections/DocsFooter';

export default function DocsLayoutEn() {
  return (
    <div className="space-y-0">
      <Introduction />
      <LayoutSections />
      <TypographySection />
      <ColorsSection />
      <HowItWorksSection />
      <ContributingSection />
      <PlannedImprovements />
      <DocsFooter />
    </div>
  );
}
