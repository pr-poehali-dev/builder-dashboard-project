import { useState } from "react";
import Icon from "@/components/ui/icon";

const ChatSection = () => {
  const [messages] = useState([
    {
      id: 1,
      sender: "developer",
      text: "Добрый день! Информируем о ходе строительства вашего объекта",
      time: "14:30",
    },
    {
      id: 2,
      sender: "me",
      text: "Здравствуйте! Когда планируется завершение строительства?",
      time: "14:32",
    },
    {
      id: 3,
      sender: "developer",
      text: "Согласно графику, сдача объекта запланирована на IV квартал 2025 года",
      time: "14:35",
    },
    {
      id: 4,
      sender: "me",
      text: "Спасибо за информацию! Можно ли получить фото текущего состояния?",
      time: "14:40",
    },
  ]);

  const [newMessage, setNewMessage] = useState("");

  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-800 mb-6">
        Чат с застройщиком
      </h1>

      <div className="bg-white rounded-lg shadow-sm border border-gray-200 h-96 flex flex-col">
        <div className="border-b border-gray-200 p-4">
          <div className="flex items-center">
            <div className="w-10 h-10 bg-sky-100 rounded-full flex items-center justify-center mr-3">
              <Icon name="User" size={20} className="text-sky-600" />
            </div>
            <div>
              <h3 className="font-semibold text-gray-800">
                ООО "СтройДевелопмент"
              </h3>
              <p className="text-sm text-green-500 flex items-center">
                <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                Онлайн
              </p>
            </div>
          </div>
        </div>

        <div className="flex-1 p-4 overflow-y-auto space-y-4">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex ${message.sender === "me" ? "justify-end" : "justify-start"}`}
            >
              <div
                className={`max-w-xs px-4 py-2 rounded-lg ${
                  message.sender === "me"
                    ? "bg-sky-500 text-white"
                    : "bg-gray-100 text-gray-800"
                }`}
              >
                <p className="text-sm">{message.text}</p>
                <p
                  className={`text-xs mt-1 ${
                    message.sender === "me" ? "text-sky-100" : "text-gray-500"
                  }`}
                >
                  {message.time}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="border-t border-gray-200 p-4">
          <div className="flex items-center space-x-2">
            <input
              type="text"
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              placeholder="Введите сообщение..."
              className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-sky-500"
            />
            <button className="bg-sky-500 text-white p-2 rounded-lg hover:bg-sky-600 transition-colors">
              <Icon name="Send" size={16} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatSection;
