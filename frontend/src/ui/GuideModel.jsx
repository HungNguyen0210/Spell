import { useState } from "react";

const GuideModal = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div>
            {/* Nút mở hướng dẫn */}
            <button
                onClick={() => setIsOpen(true)}
                className="fixed top-4 right-28 p-3 bg-gray-800 text-white rounded-lg shadow-lg hover:bg-gray-700 transition duration-300"
            >
                Hướng dẫn chơi
            </button>

            {/* Modal hướng dẫn */}
            {isOpen && (
                <div
                    className="fixed inset-0  bg-opacity-50 flex justify-center items-center"
                    onClick={() => setIsOpen(false)} // Ấn ra ngoài để đóng
                >
                    <div
                        className="bg-white p-6 rounded-lg shadow-lg w-96 relative"
                        onClick={(e) => e.stopPropagation()} // Ngăn đóng khi click vào modal
                    >
                        <button
                            onClick={() => setIsOpen(false)}
                            className="absolute top-2 right-2 text-gray-600 hover:text-red-600"
                        >
                            ❌
                        </button>
                        <h2 className="text-xl font-bold mb-4">
                            Hướng dẫn chơi
                        </h2>
                        <p>
                            1. Khi nhấp vào nút bắt đầu, sẽ hiển thị trang có
                            các quả trứng.
                        </p>
                        <p>
                            2. Khi nhấp vào một quả trứng, quả trứng sẽ nứt và
                            vỡ ra, sau đó sẽ hiển thị chữ cái.
                        </p>
                        <p>
                            3. Khi nhấp vào chữ cái đó, sẽ hiển thị ra từ có
                            chứa chữ cái đó và hình minh họa cho từ đó.
                        </p>
                        <p>
                            4. Sau khi học xong từ trước đó thì mới có thể
                            chuyển sang đập vỡ quả trứng tiếp theo để học từ
                            tiếp.
                        </p>
                        <p>5. Chúc bạn chơi vui vẻ!</p>
                    </div>
                </div>
            )}
        </div>
    );
};

export default GuideModal;
