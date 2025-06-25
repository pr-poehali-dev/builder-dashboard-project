import { useState } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import ChatSection from "@/components/sections/ChatSection";
import ContractsSection from "@/components/sections/ContractsSection";
import DocumentsSection from "@/components/sections/DocumentsSection";
import HomeSection from "@/components/sections/HomeSection";
import MyObjectSection from "@/components/sections/MyObjectSection";
import PaymentsSection from "@/components/sections/PaymentsSection";
import UKEPSection from "@/components/sections/UKEPSection";

const App = () => {
  const [activeSection, setActiveSection] = useState("home");

  return (
    <div className="min-h-screen bg-gray-50">
      <Toaster />
      <Sonner />
      <main>
        {activeSection === "home" && <HomeSection />}
        {activeSection === "myobject" && <MyObjectSection />}
        {activeSection === "documents" && <DocumentsSection />}
        {activeSection === "contracts" && <ContractsSection />}
        {activeSection === "payments" && <PaymentsSection />}
        {activeSection === "ukep" && <UKEPSection />}
        {activeSection === "chat" && <ChatSection />}
      </main>
    </div>
  );
};

export default App;
