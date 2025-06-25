import Icon from "@/components/ui/icon";

const UKEPSection = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-800 mb-6">
        УКЭП (Усиленная квалифицированная электронная подпись)
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
          <div className="flex items-center mb-4">
            <Icon name="Shield" size={24} className="text-blue-400 mr-3" />
            <h3 className="text-lg font-semibold text-gray-800">
              Статус подписи
            </h3>
          </div>

          <div className="space-y-4">
            <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
              <div>
                <p className="font-medium text-gray-800">
                  Сертификат действителен
                </p>
                <p className="text-sm text-gray-500">До 15.12.2025</p>
              </div>
              <Icon name="CheckCircle" size={20} className="text-green-500" />
            </div>

            <div className="p-3 bg-gray-50 rounded-lg">
              <p className="text-sm text-gray-600 mb-2">
                Владелец сертификата:
              </p>
              <p className="font-medium">Иванов Иван Иванович</p>
              <p className="text-sm text-gray-500">ИНН: 123456789012</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
          <div className="flex items-center mb-4">
            <Icon
              name="FileSignature"
              size={24}
              className="text-orange-500 mr-3"
            />
            <h3 className="text-lg font-semibold text-gray-800">
              Подписанные документы
            </h3>
          </div>

          <div className="space-y-3">
            <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
              <div>
                <p className="text-sm font-medium">Договор подряда №001</p>
                <p className="text-xs text-gray-500">Подписан 20.06.2025</p>
              </div>
              <Icon name="CheckCircle" size={16} className="text-green-500" />
            </div>

            <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
              <div>
                <p className="text-sm font-medium">Техническое задание</p>
                <p className="text-xs text-gray-500">Подписан 18.06.2025</p>
              </div>
              <Icon name="CheckCircle" size={16} className="text-green-500" />
            </div>
          </div>

          <button className="w-full mt-4 bg-blue-400 text-white py-2 rounded-lg hover:bg-blue-500 transition-colors flex items-center justify-center">
            <Icon name="PenTool" size={16} className="mr-2" />
            Подписать документ
          </button>
        </div>
      </div>
    </div>
  );
};

export default UKEPSection;
