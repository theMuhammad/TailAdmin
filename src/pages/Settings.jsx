
const Settings = () => {
    const cards = [
        { title: "Tashkilotlar", count: 3, icon: "🏢" },
        { title: "Kategoriya", count: 0, icon: "📚" },
        { title: "O'lchov birligi", count: 0, icon: "⚖️" },
        { title: "Mahsulotlar", count: 0, icon: "🛒" },
        { title: "Yuk xatlari", count: 0, icon: "📄" },
        { title: "Kirim qilish", count: 0, icon: "🏠" },
    ];

    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center p-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {cards.map((card, index) => (
                    <div key={index} className="bg-white shadow-md rounded-lg p-5 flex flex-col items-center">
                        <div className="text-5xl w-[350px] text-center">{card.icon}</div>
                        <h3 className="text-xl font-semibold">{card.title}</h3>
                        <p className="text-gray-500">Soni: {card.count} ta</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Settings;