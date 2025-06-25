import DocumentsSection from "./sections/DocumentsSection";
import ContractsSection from "./sections/ContractsSection";
import ChatSection from "./sections/ChatSection";
import HomeSection from "./sections/HomeSection";
import UKEPSection from "./sections/UKEPSection";

interface MainContentProps {
  activeSection: string;
}

const MainContent = ({ activeSection }: MainContentProps) => {
  const renderSection = () => {
    switch (activeSection) {
      case "home":
        return <HomeSection />;
      case "documents":
        return <DocumentsSection />;
      case "ukep":
        return <UKEPSection />;
      case "contracts":
        return <ContractsSection />;
      case "chat":
        return <ChatSection />;
      default:
        return <HomeSection />;
    }
  };

  return (
    <div className="ml-64 min-h-screen bg-gray-50">
      <div className="p-6">{renderSection()}</div>
    </div>
  );
};

export default MainContent;
