import { useState } from "react";
import Icon from "@/components/ui/icon";

const ContractsSection = () => {
  const [contracts] = useState([
    {
      id: 1,
      name: "Договор подряда №001",
      client: 'ООО "СтройИнвест"',
      amount: "2 500 000 ₽",
      status: "Активный",
    },
    {
      id: 2,
      name: "Договор проектирования №002",
      client: "ИП Петров А.В.",
      amount: "450 000 ₽",
      status: "На подписании",
    },
    {
      id: 3,
      name: "Договор консультаций №003",
      client: 'ЗАО "Развитие"',
      amount: "120 000 ₽",
      status: "Выполнен",
    },
    {
      id: 4,
      name: "Договор строительства №004",
      client: 'ООО "Новострой"',
      amount: "5 200 000 ₽",
      status: "Черновик",
    },
  ]);

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Договоры</h1>
        <button className="bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600 transition-colors flex items-center">
          <Icon name="Plus" size={16} className="mr-2" />
          Создать договор
        </button>
      </div>

      <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-50 border-b border-gray-200">
            <tr>
              <th className="text-left py-3 px-6 font-semibold text-gray-700">
                Договор
              </th>
              <th className="text-left py-3 px-6 font-semibold text-gray-700">
                Клиент
              </th>
              <th className="text-left py-3 px-6 font-semibold text-gray-700">
                Сумма
              </th>
              <th className="text-left py-3 px-6 font-semibold text-gray-700">
                Статус
              </th>
              <th className="text-left py-3 px-6 font-semibold text-gray-700">
                Действия
              </th>
            </tr>
          </thead>
          <tbody>
            {contracts.map((contract) => (
              <tr
                key={contract.id}
                className="border-b border-gray-100 hover:bg-gray-50"
              >
                <td className="py-4 px-6">
                  <div className="flex items-center">
                    <Icon
                      name="FileCheck"
                      size={16}
                      className="text-orange-500 mr-3"
                    />
                    {contract.name}
                  </div>
                </td>
                <td className="py-4 px-6 text-gray-600">{contract.client}</td>
                <td className="py-4 px-6 font-semibold text-gray-800">
                  {contract.amount}
                </td>
                <td className="py-4 px-6">
                  <span
                    className={`px-2 py-1 rounded-full text-xs font-medium ${
                      contract.status === "Активный"
                        ? "bg-green-100 text-green-700"
                        : contract.status === "На подписании"
                          ? "bg-orange-100 text-orange-700"
                          : contract.status === "Выполнен"
                            ? "bg-sky-100 text-sky-700"
                            : "bg-gray-100 text-gray-700"
                    }`}
                  >
                    {contract.status}
                  </span>
                </td>
                <td className="py-4 px-6">
                  <div className="flex items-center space-x-2">
                    <button className="text-sky-500 hover:text-sky-700">
                      <Icon name="Edit3" size={16} />
                    </button>
                    <button className="text-gray-500 hover:text-gray-700">
                      <Icon name="Eye" size={16} />
                    </button>
                    <button className="text-green-500 hover:text-green-700">
                      <Icon name="Download" size={16} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ContractsSection;
