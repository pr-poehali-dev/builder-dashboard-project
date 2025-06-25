import { useState } from "react";
import Icon from "@/components/ui/icon";

interface SidebarProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
}

const Sidebar = ({ activeSection, onSectionChange }: SidebarProps) => {
  const menuItems = [
    { id: "home", label: "Главная", icon: "Home" },
    { id: "myobject", label: "Мой объект", icon: "Building" },
    { id: "documents", label: "Документы", icon: "FileText" },
    { id: "contracts", label: "Договоры", icon: "FileCheck" },
    { id: "payments", label: "Платежи", icon: "CreditCard" },
    { id: "ukep", label: "УКЭП", icon: "Shield" },
    { id: "chat", label: "Чат с застройщиком", icon: "MessageSquare" },
  ];

  return (
    <div className="w-64 bg-white border-r border-gray-200 h-screen fixed left-0 top-0">
      <div className="p-6 border-b border-gray-200">
        <h2 className="text-xl font-bold text-gray-800">Личный кабинет</h2>
        <p className="text-sm text-gray-500 mt-1">Дольщик</p>
      </div>

      <nav className="mt-6">
        {menuItems.map((item) => (
          <button
            key={item.id}
            onClick={() => onSectionChange(item.id)}
            className={`w-full flex items-center px-6 py-3 text-left transition-colors ${
              activeSection === item.id
                ? "bg-sky-50 text-sky-600 border-r-2 border-sky-500"
                : "text-gray-600 hover:bg-gray-50 hover:text-gray-800"
            }`}
          >
            <Icon name={item.icon as any} size={20} className="mr-3" />
            {item.label}
          </button>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;
