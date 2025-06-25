import Icon from "@/components/ui/icon";

const PaymentsSection = () => {
  const payments = [
    {
      id: 1,
      date: "15.01.2024",
      amount: "640 000 ₽",
      type: "Первоначальный взнос",
      status: "Оплачен",
    },
    {
      id: 2,
      date: "15.04.2024",
      amount: "320 000 ₽",
      type: "Промежуточный платеж",
      status: "Оплачен",
    },
    {
      id: 3,
      date: "15.07.2024",
      amount: "320 000 ₽",
      type: "Промежуточный платеж",
      status: "Оплачен",
    },
    {
      id: 4,
      date: "30.06.2025",
      amount: "320 000 ₽",
      type: "Очередной платеж",
      status: "К оплате",
    },
    {
      id: 5,
      date: "При сдаче",
      amount: "1 600 000 ₽",
      type: "Окончательный расчет",
      status: "Ожидается",
    },
  ];

  const totalAmount = 3200000;
  const paidAmount = 1280000;
  const paidPercentage = Math.round((paidAmount / totalAmount) * 100);

  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Платежи</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
        <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
          <div className="flex items-center mb-4">
            <Icon name="CreditCard" size={24} className="text-green-500 mr-3" />
            <h3 className="text-lg font-semibold text-gray-800">Оплачено</h3>
          </div>
          <p className="text-2xl font-bold text-green-600">
            {paidAmount.toLocaleString()} ₽
          </p>
          <p className="text-sm text-gray-500">{paidPercentage}% от суммы</p>
        </div>

        <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
          <div className="flex items-center mb-4">
            <Icon name="Clock" size={24} className="text-orange-500 mr-3" />
            <h3 className="text-lg font-semibold text-gray-800">К доплате</h3>
          </div>
          <p className="text-2xl font-bold text-orange-600">
            {(totalAmount - paidAmount).toLocaleString()} ₽
          </p>
          <p className="text-sm text-gray-500">
            {100 - paidPercentage}% от суммы
          </p>
        </div>

        <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
          <div className="flex items-center mb-4">
            <Icon name="DollarSign" size={24} className="text-sky-500 mr-3" />
            <h3 className="text-lg font-semibold text-gray-800">Общая сумма</h3>
          </div>
          <p className="text-2xl font-bold text-gray-800">
            {totalAmount.toLocaleString()} ₽
          </p>
          <p className="text-sm text-gray-500">По договору ДДУ</p>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
        <div className="p-6 border-b border-gray-200">
          <h3 className="text-lg font-semibold text-gray-800">
            График платежей
          </h3>
        </div>

        <table className="w-full">
          <thead className="bg-gray-50 border-b border-gray-200">
            <tr>
              <th className="text-left py-3 px-6 font-semibold text-gray-700">
                Дата
              </th>
              <th className="text-left py-3 px-6 font-semibold text-gray-700">
                Сумма
              </th>
              <th className="text-left py-3 px-6 font-semibold text-gray-700">
                Тип платежа
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
            {payments.map((payment) => (
              <tr
                key={payment.id}
                className="border-b border-gray-100 hover:bg-gray-50"
              >
                <td className="py-4 px-6 text-gray-800">{payment.date}</td>
                <td className="py-4 px-6 font-semibold text-gray-800">
                  {payment.amount}
                </td>
                <td className="py-4 px-6 text-gray-600">{payment.type}</td>
                <td className="py-4 px-6">
                  <span
                    className={`px-2 py-1 rounded-full text-xs font-medium ${
                      payment.status === "Оплачен"
                        ? "bg-green-100 text-green-700"
                        : payment.status === "К оплате"
                          ? "bg-orange-100 text-orange-700"
                          : "bg-gray-100 text-gray-700"
                    }`}
                  >
                    {payment.status}
                  </span>
                </td>
                <td className="py-4 px-6">
                  <div className="flex items-center space-x-2">
                    {payment.status === "К оплате" && (
                      <button className="bg-sky-500 text-white px-3 py-1 rounded text-xs hover:bg-sky-600">
                        Оплатить
                      </button>
                    )}
                    {payment.status === "Оплачен" && (
                      <button className="text-gray-500 hover:text-gray-700">
                        <Icon name="Download" size={16} />
                      </button>
                    )}
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

export default PaymentsSection;
