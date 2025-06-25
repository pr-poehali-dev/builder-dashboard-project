import Icon from "@/components/ui/icon";

const HomeSection = () => {
  const stats = [
    {
      label: "Мой объект",
      value: "1",
      color: "bg-sky-500",
      icon: "Building",
    },
    {
      label: "Документы по квартире",
      value: "12",
      color: "bg-orange-500",
      icon: "FileText",
    },
    {
      label: "Платежи",
      value: "85%",
      color: "bg-green-500",
      icon: "CreditCard",
    },
    {
      label: "Готовность",
      value: "73%",
      color: "bg-blue-400",
      icon: "TrendingUp",
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
              <Icon name="Building" size={16} className="text-sky-500 mr-3" />
              <div>
                <p className="text-sm font-medium">
                  Обновление по ходу строительства
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
                <p className="text-sm font-medium">Сообщение от застройщика</p>
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
                <p className="text-sm font-medium">Очередной платеж</p>
                <p className="text-xs text-gray-500">До 30.06.2025</p>
              </div>
              <Icon name="Clock" size={16} className="text-orange-500" />
            </div>
            <div className="flex items-center justify-between p-3 bg-sky-50 rounded-lg">
              <div>
                <p className="text-sm font-medium">Осмотр квартиры</p>
                <p className="text-xs text-gray-500">До 15.07.2025</p>
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
