import Icon from "@/components/ui/icon";

const MyObjectSection = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Мой объект</h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
          <div className="flex items-center mb-4">
            <Icon name="Building" size={24} className="text-sky-500 mr-3" />
            <h3 className="text-lg font-semibold text-gray-800">
              Информация о квартире
            </h3>
          </div>

          <div className="space-y-3">
            <div className="flex justify-between">
              <span className="text-gray-600">Адрес:</span>
              <span className="font-medium">ул. Строителей, д. 15, кв. 42</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Площадь:</span>
              <span className="font-medium">65.3 м²</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Этаж:</span>
              <span className="font-medium">7 из 17</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Комнат:</span>
              <span className="font-medium">2</span>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
          <div className="flex items-center mb-4">
            <Icon name="TrendingUp" size={24} className="text-green-500 mr-3" />
            <h3 className="text-lg font-semibold text-gray-800">
              Ход строительства
            </h3>
          </div>

          <div className="space-y-4">
            <div>
              <div className="flex justify-between mb-2">
                <span className="text-sm text-gray-600">Общая готовность</span>
                <span className="text-sm font-medium">73%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className="bg-green-500 h-2 rounded-full"
                  style={{ width: "73%" }}
                ></div>
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-sm">Фундамент</span>
                <Icon name="CheckCircle" size={16} className="text-green-500" />
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm">Стены</span>
                <Icon name="CheckCircle" size={16} className="text-green-500" />
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm">Кровля</span>
                <Icon name="Clock" size={16} className="text-orange-500" />
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm">Отделка</span>
                <Icon name="Circle" size={16} className="text-gray-400" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">
          Последние обновления
        </h3>

        <div className="space-y-4">
          <div className="border-l-4 border-sky-500 pl-4">
            <p className="font-medium text-gray-800">
              Завершены кровельные работы
            </p>
            <p className="text-sm text-gray-500">22 июня 2025</p>
            <p className="text-sm text-gray-600 mt-1">
              Монтаж кровли завершен, начинаются работы по внутренней отделке
            </p>
          </div>

          <div className="border-l-4 border-green-500 pl-4">
            <p className="font-medium text-gray-800">Установлены окна</p>
            <p className="text-sm text-gray-500">15 июня 2025</p>
            <p className="text-sm text-gray-600 mt-1">
              Во всех квартирах установлены энергосберегающие окна
            </p>
          </div>

          <div className="border-l-4 border-orange-500 pl-4">
            <p className="font-medium text-gray-800">Проведены коммуникации</p>
            <p className="text-sm text-gray-500">8 июня 2025</p>
            <p className="text-sm text-gray-600 mt-1">
              Подключены электричество, водопровод и отопление
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyObjectSection;
