import { useState } from "react";
import Icon from "@/components/ui/icon";

const DocumentsSection = () => {
  const [documents] = useState([
    {
      id: 1,
      name: "Техническое задание.pdf",
      size: "2.4 MB",
      date: "20.06.2025",
      status: "Активен",
    },
    {
      id: 2,
      name: "Смета проекта.xlsx",
      size: "1.2 MB",
      date: "18.06.2025",
      status: "На согласовании",
    },
    {
      id: 3,
      name: "Чертежи основные.dwg",
      size: "15.7 MB",
      date: "15.06.2025",
      status: "Активен",
    },
    {
      id: 4,
      name: "Разрешение на строительство.pdf",
      size: "3.1 MB",
      date: "10.06.2025",
      status: "Согласован",
    },
  ]);

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Документы</h1>
        <button className="bg-sky-500 text-white px-4 py-2 rounded-lg hover:bg-sky-600 transition-colors flex items-center">
          <Icon name="Upload" size={16} className="mr-2" />
          Загрузить документ
        </button>
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
                    <button className="text-sky-500 hover:text-sky-700">
                      <Icon name="Download" size={16} />
                    </button>
                    <button className="text-gray-500 hover:text-gray-700">
                      <Icon name="Eye" size={16} />
                    </button>
                    <button className="text-red-500 hover:text-red-700">
                      <Icon name="Trash2" size={16} />
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
