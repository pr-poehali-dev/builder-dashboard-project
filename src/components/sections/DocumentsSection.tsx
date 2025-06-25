import { useState } from "react";
import Icon from "@/components/ui/icon";

const DocumentsSection = () => {
  const [documents] = useState([
    {
      id: 1,
      name: "Договор долевого участия.pdf",
      size: "3.2 MB",
      date: "15.01.2024",
      status: "Подписан",
    },
    {
      id: 2,
      name: "Справка о ходе строительства.pdf",
      size: "1.8 MB",
      date: "20.06.2025",
      status: "Получен",
    },
    {
      id: 3,
      name: "Акт приема-передачи.pdf",
      size: "2.1 MB",
      date: "Ожидается",
      status: "Не готов",
    },
    {
      id: 4,
      name: "Выписка из ЕГРН.pdf",
      size: "0.8 MB",
      date: "Ожидается",
      status: "Не готов",
    },
  ]);

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-800">
          Документы по квартире
        </h1>
      </div>

      <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-50 border-b border-gray-200">
            <tr>
              <th className="text-left py-3 px-6 font-semibold text-gray-700">
                Название
              </th>
              <th className="text-left py-3 px-6 font-semibold text-gray-700">
                Размер
              </th>
              <th className="text-left py-3 px-6 font-semibold text-gray-700">
                Дата
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
            {documents.map((doc) => (
              <tr
                key={doc.id}
                className="border-b border-gray-100 hover:bg-gray-50"
              >
                <td className="py-4 px-6">
                  <div className="flex items-center">
                    <Icon
                      name="FileText"
                      size={16}
                      className="text-sky-500 mr-3"
                    />
                    {doc.name}
                  </div>
                </td>
                <td className="py-4 px-6 text-gray-600">{doc.size}</td>
                <td className="py-4 px-6 text-gray-600">{doc.date}</td>
                <td className="py-4 px-6">
                  <span
                    className={`px-2 py-1 rounded-full text-xs font-medium ${
                      doc.status === "Активен"
                        ? "bg-green-100 text-green-700"
                        : doc.status === "На согласовании"
                          ? "bg-orange-100 text-orange-700"
                          : "bg-sky-100 text-sky-700"
                    }`}
                  >
                    {doc.status}
                  </span>
                </td>
                <td className="py-4 px-6">
                  <div className="flex items-center space-x-2">
                    <button className="text-gray-500 hover:text-gray-700">
                      <Icon name="Eye" size={16} />
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

export default DocumentsSection;
