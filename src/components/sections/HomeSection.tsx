import Icon from "@/components/ui/icon";

const HomeSection = () => {
  const stats = [
    {
      label: "Активные проекты",
      value: "12",
      color: "bg-sky-500",
      icon: "Briefcase",
    },
    {
      label: "Документы",
      value: "47",
      color: "bg-orange-500",
      icon: "FileText",
    },
    { label: "Договоры", value: "8", color: "bg-blue-400", icon: "FileCheck" },
    {
      label: "Непрочитанные",
      value: "3",
      color: "bg-red-500",
      icon: "MessageSquare",
    },
  ];

  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Главная</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="bg-white rounded-lg p-6 shadow-sm border border-gray-200"
          >
            <div className="flex items-center">
              <div className={`${stat.color} p-3 rounded-lg mr-4`}>
                <Icon
                  name={stat.icon as any}
                  size={24}
                  className="text-white"
                />
              </div>
              <div>
                <p className="text-2xl font-bold text-gray-800">{stat.value}</p>
                <p className="text-sm text-gray-500">{stat.label}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">
            Последние активности
          </h3>
          <div className="space-y-3">
            <div className="flex items-center p-3 bg-gray-50 rounded-lg">
              <Icon name="FileText" size={16} className="text-sky-500 mr-3" />
              <div>
                <p className="text-sm font-medium">
                  Добавлен документ "Смета_2024.pdf"
                </p>
                <p className="text-xs text-gray-500">2 часа назад</p>
              </div>
            </div>
            <div className="flex items-center p-3 bg-gray-50 rounded-lg">
              <Icon
                name="MessageSquare"
                size={16}
                className="text-orange-500 mr-3"
              />
              <div>
                <p className="text-sm font-medium">
                  Новое сообщение от клиента
                </p>
                <p className="text-xs text-gray-500">4 часа назад</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">
            Ближайшие задачи
          </h3>
          <div className="space-y-3">
            <div className="flex items-center justify-between p-3 bg-orange-50 rounded-lg">
              <div>
                <p className="text-sm font-medium">Согласование проекта</p>
                <p className="text-xs text-gray-500">До 25.06.2025</p>
              </div>
              <Icon name="Clock" size={16} className="text-orange-500" />
            </div>
            <div className="flex items-center justify-between p-3 bg-sky-50 rounded-lg">
              <div>
                <p className="text-sm font-medium">Подписание договора</p>
                <p className="text-xs text-gray-500">До 27.06.2025</p>
              </div>
              <Icon name="Clock" size={16} className="text-sky-500" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeSection;
