import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { actRestoreProducts } from '../actions/index';

class RestoreProducts extends Component {
	constructor(props) {
		super(props);
		this.state = {
			products: [
		    {
		      "id": "",
		      "name": "Apple IPhone 7 128GB Vàng hồng",
		      "photo": "https://via.placeholder.com/680x460",
		      "price_original": 108,
		      "discount": 20,
		      "rating": 5,
		      "description": "- Bộ sưu tập smartphone đỉnh cao được bổ sung thêm gam màu Jet Black mới\n- Tai nghe EarPods có thiết kế hiện đại\n- Chuẩn chống nước và chống bụi IP67\n- Nút Home cảm ứng thay thế nút Home vật lý",
		      "trademark": "Apple",
		      "inventory": 580,
		      "count_view": 2
		    },
		    {
		      "id": "",
		      "name": "Nokia 105 Single Sim 2017 (Xanh dương)",
		      "photo": "https://via.placeholder.com/680x460",
		      "price_original": 10,
		      "discount": 48,
		      "rating": 3,
		      "description": "- Kiểu dáng mạnh mẽ, chắc chắn\n- Màn hình QQVGA 1,8\" đã cải thiện\n- Dung lượng pin 800mAh\n- Dung lượng pin mạnh mẽ cho phép thời gian thoại lên tới 15 giờ",
		      "trademark": "Nokia",
		      "inventory": 390,
		      "count_view": 0
		    },
		    {
		      "id": "",
		      "name": "Xiaomi Redmi 5 2GB/16GB Xanh",
		      "photo": "https://via.placeholder.com/680x460",
		      "price_original": 31,
		      "discount": 14,
		      "rating": 0,
		      "description": "- Thiết kế mỏng, nhẹ và sang trọng\n- Dung lượng pin lớn\n- Cấu hình mạnh mẽ",
		      "trademark": "Xiaomi",
		      "inventory": 290,
		      "count_view": 1
		    },
		    {
		      "id": "",
		      "name": "Apple IPhone Xs Max 256GB Bạc",
		      "photo": "https://via.placeholder.com/680x460",
		      "price_original": 200,
		      "discount": 10,
		      "rating": 5,
		      "description": "- Màn Retina tai thỏ 6.5\", tràn màn hình, HDR sắc nét\n- Chuẩn chống nước và chống bụi IP68\n- Face ID nhanh nhạy hơn, 1 Nano SIM + 1 eSIM\n- Tốc độ mượt mà với chip A12 Bionic 6 nhân mạnh mẽ\n- Hệ thống camera kép 12MP với cảm biến kết hợp ISP và Neural Engine",
		      "trademark": "Apple",
		      "inventory": 600,
		      "count_view": 10
		    },
		    {
		      "id": "",
		      "name": "Samsung Galaxy J2 Prime 8GB Vàng",
		      "photo": "https://via.placeholder.com/680x460",
		      "price_original": 75,
		      "discount": 10,
		      "rating": 3,
		      "description": "- Mặt lưng dạng sần trông lạ mắt hơn\n- Cấu hình tầm trung với con chip Mediatek MT6737T\n- RAM 1.5GB và bộ nhớ trong 8GB\n- Hỗ trợ thẻ nhớ ngoài 256GB",
		      "trademark": "Samsung",
		      "inventory": 888,
		      "count_view": 0
		    },
		    {
		      "id": "",
		      "name": "Nokia 8110 4G 2 Sim Đen",
		      "photo": "https://via.placeholder.com/680x460",
		      "price_original": 17,
		      "discount": 15,
		      "rating": 5,
		      "description": "- Kiểu dáng độc đáo\n- Hỗ trợ 4G\n- Trang bị các tính năng cần thiết",
		      "trademark": "Nokia",
		      "inventory": 661,
		      "count_view": 16
		    },
		    {
		      "id": "",
		      "name": "Samsung Galaxy J6 32GB Ram 3GB (Vàng)",
		      "photo": "https://via.placeholder.com/680x460",
		      "price_original": 56,
		      "discount": 15,
		      "rating": 4,
		      "description": "- Màn hình Amoled với độ phân giải HD sắc nét\n- Cấu hình cao đáp ứng những trải nghiệm tuyệt vời\n- Hỗ trợ 2 sim 2 sóng\n- Trang bị sau 13MP, trước 5MP\n- Hệ điều hành Android 8.0",
		      "trademark": "Samsung",
		      "inventory": 356,
		      "count_view": 1
		    },
		    {
		      "id": "",
		      "name": "Apple IPhone 8 Plus 64GB Đỏ",
		      "photo": "https://via.placeholder.com/680x460",
		      "price_original": 250,
		      "discount": 42,
		      "rating": 5,
		      "description": "- Chiếc IPhone thế hệ tiếp theo được ra mắt với nhiều cải tiến đáng kể\n- Thiết kế sang trọng với việc hoàn thiện hai mặt kính hoàn hảo\n- Hệ điều hành: iOS 11\n- Chipset: Apple A11 Bionic 64-bit 6 nhân\n- Bộ nhớ trong: 64GB, RAM 3GB",
		      "trademark": "Apple",
		      "inventory": 69,
		      "count_view": 12
		    },
		    {
		      "id": "",
		      "name": "Apple IPhone XR 64GB Đen",
		      "photo": "https://via.placeholder.com/680x460",
		      "price_original": 110,
		      "discount": 23,
		      "rating": 2,
		      "description": "- Thiết kế sang trọng và cá tính\n- Màn hình tràn viền, hiển thị sắc nét\n- Hiệu năng mạnh mẽ với chip A12 Bionic\n- Camera đơn 12MP tích hợp chống rung quang học",
		      "trademark": "Apple",
		      "inventory": 348,
		      "count_view": 0
		    },
		    {
		      "id": "",
		      "name": "Xiaomi Redmi 6A 2GB/16GB Đen",
		      "photo": "https://via.placeholder.com/680x460",
		      "price_original": 23,
		      "discount": 10,
		      "rating": 1,
		      "description": "- Màn hình IPS LCD 5.45\", 720 x 1440 pixels, tỉ lệ 18:9\n- Hiệu suất bền bỉ với pin tích hợp 3.000mAh\n- Mở khóa bằng khuôn mặt AI\n- Camera trước 5MP f/2.2, camera sau 13MP f/2.2 PDAF\n- Bộ vi xử lý MediaTek Helio A22",
		      "trademark": "Xiaomi",
		      "inventory": 98,
		      "count_view": 11
		    },
		    {
		      "id": "",
		      "name": "Apple IPhone 6 32GB Vàng",
		      "photo": "https://via.placeholder.com/680x460",
		      "price_original": 60,
		      "discount": 15,
		      "rating": 0,
		      "description": "- Thiết kế tinh tế, sang trọng\n- Khả năng xử lý tiên tiến, giải trí tuyệt vời\n- Công nghệ nhận diện vân tay Touch ID\n- Phiên bản bộ nhớ 32GB hoàn toàn mới",
		      "trademark": "Apple",
		      "inventory": 298,
		      "count_view": 0
		    },
		    {
		      "id": "",
		      "name": "Apple IPhone X 256GB Xám",
		      "photo": "https://via.placeholder.com/680x460",
		      "price_original": 168,
		      "discount": 50,
		      "rating": 5,
		      "description": "- Chiếc IPhone thế hệ tiếp theo được ra mắt với nhiều cải tiến đáng kể\n- Thiết kế sang trọng với việc hoàn thiện hai mặt kính hoàn hảo\n- Hệ điều hành: iOS 11\n- Chipset: Apple A11 Bionic 64-bit 6 nhân\n- Bộ nhớ trong: 256GB",
		      "trademark": "Apple",
		      "inventory": 139,
		      "count_view": 3
		    },
		    {
		      "id": "",
		      "name": "Nokia 5 16GB (Đen)",
		      "photo": "https://via.placeholder.com/680x460",
		      "price_original": 78,
		      "discount": 12,
		      "rating": 3,
		      "description": "- Thiết kế nhôm nguyên khối liền mạch\n- Camera 13MP tự động lấy nét\n- Camera selfie góc rộng 84º, 8MP\n- Màn hình HD 5.2\", fully-laminated",
		      "trademark": "Nokia",
		      "inventory": 200,
		      "count_view": 2
		    },
		    {
		      "id": "",
		      "name": "Samsung Galaxy S8 Plus G955F Xanh",
		      "photo": "https://via.placeholder.com/680x460",
		      "price_original": 20,
		      "discount": 0,
		      "rating": 3,
		      "description": "- Bộ xử lý 8 nhân 64-bit mạnh mẽ cho trải nghiệm mượt mà\n- Camera Dual Pixel 12MP f/1.7 26mm chụp ảnh siêu nét, góc nhìn siêu rộng\n- Tích hợp khả năng chống nước chuẩn IP68 bền bỉ",
		      "trademark": "Samsung",
		      "inventory": 398,
		      "count_view": 15
		    },
		    {
		      "id": "",
		      "name": "Samsung Galaxy J8 3GB/32GB Vàng",
		      "photo": "https://via.placeholder.com/680x460",
		      "price_original": 75,
		      "discount": 12,
		      "rating": 4,
		      "description": "- Màn hình: 6.0 inches\n- HĐH: Android 8.0 (Oreo)\n- CPU: Snapdragon 450\n- Camera: 16/5MP, Selfie:16MP\n- Pin: 3500mAh",
		      "trademark": "Samsung",
		      "inventory": 120,
		      "count_view": 9
		    },
		    {
		      "id": "",
		      "name": "Nokia X5 tai thỏ 2018 32GB Ram 3GB (Đen)",
		      "photo": "https://via.placeholder.com/680x460",
		      "price_original": 90,
		      "discount": 34,
		      "rating": 3,
		      "description": "- Màn hình tràn viền tỉ lệ 18:9, độ phân giải HD+ sắc nét\n- Cấu hình cao - đáp ứng những trải nghiệm cao cấp \n- Vân tay siêu nhạy \n- Hỗ trợ 2 sim 2 sóng, thẻ nhớ SD\n- Trang bị camera kép chụp ảnh siêu nét",
		      "trademark": "Nokia",
		      "inventory": 0,
		      "count_view": 0
		    },
		    {
		      "id": "",
		      "name": "Sony Xperia XZ Dual SIM 3GB/64GB",
		      "photo": "https://via.placeholder.com/680x460",
		      "price_original": 50,
		      "discount": 5,
		      "rating": 1,
		      "description": "- Màn hình 5.2 inch với công nghệ Triluminos\n- Chip Snapdragon 820 4 nhân 64-bit, 2.15GHz mạnh mẽ\n- RAM 3GB cùng bộ nhớ trong 64GB\n- Camera 23MP chụp nhanh sắc nét\n- Hỗ trợ thẻ nhớ lên đến 256GB\n- Chuẩn kháng nước và bụi IP68",
		      "trademark": "Sony",
		      "inventory": 128,
		      "count_view": 0
		    },
		    {
		      "id": "",
		      "name": "Sony Xperia L2 (H4331) Đen",
		      "photo": "https://via.placeholder.com/680x460",
		      "price_original": 37,
		      "discount": 25,
		      "rating": 2,
		      "description": "- Xuất xứ: Trung Quốc\n- Bảo hành: 12 tháng\n\n- Màn hình IPS LCD 5.5 inch (720 x 1280 pixels)\n- Camera chính 13MP (f/2.0, 1/3.1\") autofocus, có LED flash\n- Camera trước 8MP (f/2.4, 1/4\"), quay video 1080p\n- Mặt kính cường lực Gorilla Glass 4\n- Hệ điều hành: Android 7.1.1 (Nougat)",
		      "trademark": "Sony",
		      "inventory": 270,
		      "count_view": 4
		    },
		    {
		      "id": "",
		      "name": "Sony Xperia XA3 Ultra",
		      "photo": "https://via.placeholder.com/680x460",
		      "price_original": 60,
		      "discount": 2,
		      "rating": 1,
		      "description": "Màn hình IPS LCD, 6.5\", Full HD+\nHệ điều hành Android 9.0 (Pie)\nCPU Qualcomm Snapdragon 660 8 nhân",
		      "trademark": "Sony",
		      "inventory": 0,
		      "count_view": 0
		    },
		    {
		      "id": "",
		      "name": "Samsung Galaxy Note 9 512GB",
		      "photo": "https://via.placeholder.com/680x460",
		      "price_original": 168,
		      "discount": 20,
		      "rating": 5,
		      "description": "Màn hình Super AMOLED, 6.4\", Quad HD+ (2K+)\nHệ điều hành Android 8.1 (Oreo)\nCamera sau 2 camera 12 MP\nCamera trước 8 MP\nCPU Exynos 9810 8 nhân 64 bit",
		      "trademark": "Samsung",
		      "inventory": 400,
		      "count_view": 3
		    },
		    {
		      "id": "",
		      "name": "Apple IPhone 6S Plus 32GB Đen",
		      "photo": "https://via.placeholder.com/680x460",
		      "price_original": 70,
		      "discount": 14,
		      "rating": 2,
		      "description": "- Tính năng Live Photo \"thật sự xuất sắc\"\n- Trợ lý ảo Siri luôn bật\n- Quay phim 4K và chế độ Retina Flash tuyệt hảo\n- Chất liệu mới với nhôm 7000 Series\n- Cấu hình mạnh mẽ với RAM 2GB",
		      "trademark": "Apple",
		      "inventory": 648,
		      "count_view": 0
		    },
		    {
		      "id": "",
		      "name": "Apple IPhone 8 64GB Bạc",
		      "photo": "https://via.placeholder.com/680x460",
		      "price_original": 78,
		      "discount": 1,
		      "rating": 4,
		      "description": "- Chiếc IPhone thế hệ tiếp theo được ra mắt với nhiều cải tiến đáng kể\n- Thiết kế sang trọng với việc hoàn thiện hai mặt kính hoàn hảo\n- Màn hình: Retina HD 4.7 inch 750 x 1334 pixels 326ppi\n- Hệ điều hành: iOS 11\n- Chipset: Apple A11 Bionic 64-bit 6 nhân\n- Bộ nhớ trong: 64GB - RAM: 2GB",
		      "trademark": "Apple",
		      "inventory": 200,
		      "count_view": 17
		    },
		    {
		      "id": "",
		      "name": "Apple IPhone 7 32GB Vàng",
		      "photo": "https://via.placeholder.com/680x460",
		      "price_original": 100,
		      "discount": 25,
		      "rating": 2,
		      "description": "- Bộ sưu tập smartphone đỉnh cao được bổ sung thêm gam màu Jet Black mới\n- IPhone 7 và IPhone 7 Plus lần lượt sở hữu màn hình kích thước 4.7 inch và 5.5 inch\n- Tai nghe EarPods có thiết kế không dây hoàn toàn mới\n- Hệ điều hành iOS 10\n- Chuẩn chống nước và chống bụi IP67\n- Bộ vi xử lý A10 Fushion",
		      "trademark": "Apple",
		      "inventory": 320,
		      "count_view": 0
		    },
		    {
		      "id": "",
		      "name": "Apple IPhone 7 Plus 128GB Bạc",
		      "photo": "https://via.placeholder.com/680x460",
		      "price_original": 110,
		      "discount": 30,
		      "rating": 3,
		      "description": "- Hệ điều hành iOS 10\n- Chuẩn chống nước và chống bụi IP67\n- Bộ vi xử lý A10 Fushion\n- Nút Home cảm ứng thay thế nút Home vật lý",
		      "trademark": "Apple",
		      "inventory": 633,
		      "count_view": 1
		    },
		    {
		      "id": "",
		      "name": "Samsung Galaxy J4+ 2GB/16GB Hồng",
		      "photo": "https://via.placeholder.com/680x460",
		      "price_original": 72,
		      "discount": 2,
		      "rating": 3,
		      "description": "- Màn hình IPS 6\", HD+\n- Chip Snapdragon 425 4 nhân 64-bit\n- Camera sau 13MP, camera selfie 5MP\n- Dung lượng pin khủng 3300mAh\n- 2 Nano SIM, hỗ trợ 4G\n- Hệ điều hành Android 8.1 (Oreo)\n- Tính năng App Pair mở 2 ứng dụng yêu thích nhanh chóng",
		      "trademark": "Samsung",
		      "inventory": 188,
		      "count_view": 0
		    },
		    {
		      "id": "",
		      "name": "Samsung Galaxy A7 (2018) 4GB/64GB Đen",
		      "photo": "https://via.placeholder.com/680x460",
		      "price_original": 148,
		      "discount": 24,
		      "rating": 2,
		      "description": "- Bộ 3 camera độc đáo 24MP + 8MP + 5MP\n- Hiệu ứng Bokeh nghệ thuật, Live Focus, Low Light\n- Chip Exynoss 7885 8 nhân 2.2GHz\n- 2 SIM, hỗ trợ 4G (LTE - Cat6)\n- Màn hình Infinity Display 6.0\", FHD+, sAMOLED\n- Bảo mật vân tay một chạm cạnh bên",
		      "trademark": "Samsung",
		      "inventory": 123,
		      "count_view": 8
		    },
		    {
		      "id": "",
		      "name": "Samsung Galaxy A6 Plus 2018 4GB/32GB Đen",
		      "photo": "https://via.placeholder.com/680x460",
		      "price_original": 57,
		      "discount": 3,
		      "rating": 4,
		      "description": "- Màn hình Infinity Display tỉ lệ 18.5:9\n- Tính năng Always-on-display trên màn Super AMOLED\n- Hiệu ứng âm thanh Dolby Atmos\n- Tính năng App Pair độc đáo\n- Camera kép sau: 16 MP (f/1.7) + 5 MP (f/1.9)\n- Camera Selfie 24MP (f/1.9), LED flash\n- Chipset: Qualcomm SDM450 Snapdragon 450\n- CPU: Octa-core 1.8 GHz Cortex-A53\n- GPU: Adreno 506\n- RAM: 4GB, ROM: 32GB",
		      "trademark": "Samsung",
		      "inventory": 178,
		      "count_view": 0
		    },
		    {
		      "id": "",
		      "name": "Samsung Galaxy Note 8 6GB/64GB Tím khói",
		      "photo": "https://via.placeholder.com/680x460",
		      "price_original": 135,
		      "discount": 24,
		      "rating": 1,
		      "description": "- Màn hình vô cực, Super AMOLED 6.3\"\n- Độ phần giải màn 1440 x 2960 pixels\n- Bút S-Pen mới hoàn hảo\n- Chụp ảnh sắc nét với camera kép 12MP\n- RAM 6GB, ROM 64GB, hỗ trỡ thẻ nhớ 256GB\n- Kháng nước và kháng bụi chuẩn IP68",
		      "trademark": "Samsung",
		      "inventory": 355,
		      "count_view": 4
		    },
		    {
		      "id": "",
		      "name": "Samsung Galaxy J3 Pro 2017 Xanh dương",
		      "photo": "https://via.placeholder.com/680x460",
		      "price_original": 89,
		      "discount": 14,
		      "rating": 2,
		      "description": "- Thiết kế nguyên khối sang trọng\n- Cấu hình mạnh mẽ cùng màn hình HD 5\"\n- Camera chính 13MP, camera selfie 5MP\n- Hỗ trợ 2 SIM, 4G LTE, sử dụng Android 7\n- Pin dung lượng lớn 2400mAh",
		      "trademark": "Samsung",
		      "inventory": 274,
		      "count_view": 0
		    },
		    {
		      "id": "",
		      "name": "Samsung Galaxy S9 Plus 64GB Tím",
		      "photo": "https://via.placeholder.com/680x460",
		      "price_original": 124,
		      "discount": 4,
		      "rating": 5,
		      "description": "- Thiết kế ấn tượng với màn hình vô cực Infinity Display\n- Cấu hình mạnh mẽ, RAM 6GB, ROM 64GB\n- Khả năng chống nước đạt chuẩn IP68\n- Camera sau kép 12MP, camera trước 8MP\n- Sử dụng hệ điều hành Android 8.0 (Oreo)",
		      "trademark": "Samsung",
		      "inventory": 357,
		      "count_view": 11
		    },
		    {
		      "id": "",
		      "name": "Nokia 216 Xanh",
		      "photo": "https://via.placeholder.com/680x460",
		      "price_original": 30,
		      "discount": 4,
		      "rating": 3,
		      "description": "- Kiểu dáng mạnh mẽ, chắc chắn\n- Màn hình TFT 2.4 inches sắc nét\n- Thời lượng sử dụng pin ấn tượng\n- Camera selfie tiện dụng ",
		      "trademark": "Nokia",
		      "inventory": 124,
		      "count_view": 0
		    },
		    {
		      "id": "",
		      "name": "Nokia 3310 2017 Xanh Đen",
		      "photo": "https://via.placeholder.com/680x460",
		      "price_original": 50,
		      "discount": 23,
		      "rating": 1,
		      "description": "- Thiết kế nhỏ gọn, tiện dụng \n- Màn hình 2,4 inch, độ phân giải 240 x 320 pixel\n- Nokia 3310 mới có bộ nhớ trong 16MB\n- Camera 2MP với đèn flash LED, hỗ trợ giắc cắm tai nghe 3,5 mm",
		      "trademark": "Nokia",
		      "inventory": 147,
		      "count_view": 0
		    },
		    {
		      "id": "",
		      "name": "Nokia 230 Dual SIM Đen bạc",
		      "photo": "https://via.placeholder.com/680x460",
		      "price_original": 75,
		      "discount": 35,
		      "rating": 4,
		      "description": "- Thiết kế vỏ kim loại nổi bật, sang trọng\n- Màn hình 2.8\" lướt web thoải mái\n- Tính năng giải trí đa dạng, bộ đôi camera 2MP\n- Dung lượng pin 1200mAh, hỗ trợ 2 SIM 2 sóng tiện ích",
		      "trademark": "Nokia",
		      "inventory": 222,
		      "count_view": 1
		    },
		    {
		      "id": "",
		      "name": "Nokia 150 Dual SIM Trắng ",
		      "photo": "https://via.placeholder.com/680x460",
		      "price_original": 60,
		      "discount": 0,
		      "rating": 1,
		      "description": "- Kiểu dáng mạnh mẽ, chắc chắn\n- Màn hình TFT 2.4 inches sắc nét\n- Dung lượng pin 1020mAh",
		      "trademark": "Nokia",
		      "inventory": 333,
		      "count_view": 0
		    },
		    {
		      "id": "",
		      "name": "Nokia 2 (TA-1029) 1GB/8GB Dual SIM Trắng",
		      "photo": "https://via.placeholder.com/680x460",
		      "price_original": 85,
		      "discount": 6,
		      "rating": 1,
		      "description": "- Thiết kế cứng cáp, chống nước chuẩn IP52\n- Màn hình hiển thị sắc nét\n- Hiệu năng ổn định",
		      "trademark": "Nokia",
		      "inventory": 869,
		      "count_view": 0
		    },
		    {
		      "id": "",
		      "name": "Nokia 1 Đỏ",
		      "photo": "https://via.placeholder.com/680x460",
		      "price_original": 58,
		      "discount": 8,
		      "rating": 1,
		      "description": "- Thiết kế đơn giản, chắc chắn\n- Màn hình 4.5 inch\n- Hiệu năng đáp ứng nhu cầu sử dụng mức trung bình",
		      "trademark": "Nokia",
		      "inventory": 257,
		      "count_view": 0
		    },
		    {
		      "id": "",
		      "name": "Nokia 5.1 Plus 3GB/32GB Đen",
		      "photo": "https://via.placeholder.com/680x460",
		      "price_original": 80,
		      "discount": 20,
		      "rating": 1,
		      "description": "- Hệ điều hành: Android 8.1 Oreo\n- Màn hình: 5.86 inch - tỷ lệ 19:9, độ phân giải HD+ (1520 x 720 pixel), có tai thỏ\n- CPU: MediaTek Helio P60\n- RAM: 3GB\n- Bộ nhớ trong: 32GB\n- Thẻ nhớ:MicroSD, hỗ trợ tối đa 256GB\n- Camera chính: camera kép 13MP + 5MP; Camera phụ: 8MP\n- Dung lượng pin: 3060mAh",
		      "trademark": "Nokia",
		      "inventory": 666,
		      "count_view": 0
		    },
		    {
		      "id": "",
		      "name": "Nokia 7 Plus 2 Sim 4GB/64GB Đen",
		      "photo": "https://via.placeholder.com/680x460",
		      "price_original": 125,
		      "discount": 3,
		      "rating": 5,
		      "description": "- Khung nhôm nguyên khối seri 6000\n- Màn hình IPS LCD 6\" FHD\n- Camera kép ống kính ZEISS 12MP + 13MP\n- Camera selfie ZEISS 16MP\n- Chip Qualcomm Snapdragon 660 8 nhân\n- RAM 4GB, ROM 64GB, hỗ trợ thẻ nhớ microSD tối đa 256GB",
		      "trademark": "Nokia",
		      "inventory": 671,
		      "count_view": 0
		    },
		    {
		      "id": "",
		      "name": "Nokia 6.1 Plus 4GB/64GB Xanh",
		      "photo": "https://via.placeholder.com/680x460",
		      "price_original": 200,
		      "discount": 20,
		      "rating": 4,
		      "description": "- Thiết kế nguyên khối trẻ trung, hiện đại\n- Màn hình: tai thỏ 5.8\"\n- Camera sau kép 16 MP và 5 MP\n- Chip Qualcomm SDM636 Snapdragon 636\n- RAM 4GB, bộ nhớ trong 64GB",
		      "trademark": "Nokia",
		      "inventory": 555,
		      "count_view": 0
		    },
		    {
		      "id": "",
		      "name": "Nokia X6 tai thỏ 2018 64GB Ram 4GB Xanh",
		      "photo": "https://via.placeholder.com/680x460",
		      "price_original": 124,
		      "discount": 9,
		      "rating": 5,
		      "description": "- Màn hình tràn viền tỉ lệ 18:9, độ phân giải Full HD sắc nét\n- Cấu hình cao - đáp ứng những trải nghiệm cao cấp \n- Vân tay siêu nhạy \n- Hỗ trợ 2 sim 2 sóng, thẻ nhớ SD\n- Trang bị camera kép chụp ảnh siêu nét",
		      "trademark": "Nokia",
		      "inventory": 888,
		      "count_view": 0
		    },
		    {
		      "id": "",
		      "name": "Xiaomi Redmi Note 5 Pro 32GB Ram 3GB (Xanh)",
		      "photo": "https://via.placeholder.com/680x460",
		      "price_original": 78,
		      "discount": 0,
		      "rating": 1,
		      "description": "- Màn hình tràn viền tỉ lệ 18:9, độ phân giải Full HD sắc nét\n- Cấu hình cao - đáp ứng những trải nghiệm cao cấp \n- Vân tay 1 chạm siêu nhạy \n- Hỗ trợ 2 sim 2 sóng \n- Trang bị camera kép chụp ảnh siêu nét",
		      "trademark": "Xiaomi",
		      "inventory": 260,
		      "count_view": 0
		    },
		    {
		      "id": "",
		      "name": "Xiaomi Mi 8 Lite 4GB/64GB Xám đen",
		      "photo": "https://via.placeholder.com/680x460",
		      "price_original": 100,
		      "discount": 12,
		      "rating": 2,
		      "description": "- Mặt lưng gradient chuyển sắc bóng bẩy\n- CPU SnapDragon 660, RAM 4GB, ROM 64GB \n- Màn hình tràn viền 6.26 inch\n- Hệ thống camera kép 12 + 5MP phía sau\n- Camera selfie độ phân giải lên đến 24MP ",
		      "trademark": "Xiaomi",
		      "inventory": 687,
		      "count_view": 0
		    },
		    {
		      "id": "",
		      "name": "Xiaomi Mi A2 Lite 4GB/64GB Xanh",
		      "photo": "https://via.placeholder.com/680x460",
		      "price_original": 126,
		      "discount": 20,
		      "rating": 4,
		      "description": "- Màn hình tràn viền tỉ lệ 19:9, độ phân giải Full HD sắc nét\n- Cấu hình cao - đáp ứng những trải nghiệm cao cấp \n- Vân tay 1 chạm siêu nhạy \n- Hỗ trợ 2 sim 2 sóng, thẻ nhớ microSD\n- Trang bị camera kép chụp ảnh siêu nét",
		      "trademark": "Xiaomi",
		      "inventory": 100,
		      "count_view": 0
		    },
		    {
		      "id": "",
		      "name": "Xiaomi Redmi 5 Plus 64GB Ram 4GB (Đen)",
		      "photo": "https://via.placeholder.com/680x460",
		      "price_original": 89,
		      "discount": 4,
		      "rating": 3,
		      "description": "- Màn hình tràn viền tỉ lệ 18:9 , độ phân giải Full HD sắc nét\n- Cấu hình cao - đáp ứng những trải nghiệm cao cấp \n- Vân tay 1 chạm siêu nhạy \n- Hỗ trợ 2 sim 2 sóng \n- Trang bị camera cao cấp chụp ảnh siêu nét",
		      "trademark": "Xiaomi",
		      "inventory": 357,
		      "count_view": 0
		    },
		    {
		      "id": "",
		      "name": "Xiaomi Redmi 4X 3GB/32GB Vàng",
		      "photo": "https://via.placeholder.com/680x460",
		      "price_original": 68,
		      "discount": 14,
		      "rating": 0,
		      "description": "- Vi xử lý 8 nhân Snapdragon 435\n- Pin dung lượng khủng 4100mAh\n- Vỏ nhôm sang trọng, đẳng cấp\n- Màn hình 5 inch HD, viền cong 2.5D\n- Cảm biến vân tay",
		      "trademark": "Xiaomi",
		      "inventory": 254,
		      "count_view": 0
		    },
		    {
		      "id": "",
		      "name": "Xiaomi Mi A1 4GB/32GB Vàng",
		      "photo": "https://via.placeholder.com/680x460",
		      "price_original": 57,
		      "discount": 2,
		      "rating": 4,
		      "description": "- Màn hình: Cảm ứng điện dung LTPS IPS LCD, 16 triệu màu\n- Kích thước màn hình: 1080 x 1920 pixels, 5.5 inches (~403 ppi mật độ điểm ảnh)\n- Bộ nhớ trong: 32GB, 4GB RAM\n- Chipset: Qualcomm MSM8953 Snapdragon 625",
		      "trademark": "Xiaomi",
		      "inventory": 357,
		      "count_view": 0
		    },
		    {
		      "id": "",
		      "name": "Xiaomi Mi 6X 64GB Ram 6GB (Đen)",
		      "photo": "https://via.placeholder.com/680x460",
		      "price_original": 50,
		      "discount": 10,
		      "rating": 2,
		      "description": "Màn hình tràn viền tỉ lệ 18:9 , độ phân giải Full HD sắc nét\nCấu hình cao - đáp ứng những trải nghiệm cao cấp \nVân tay 1 chạm siêu nhạy \nHỗ trợ 2 sim 2 sóng \nTrang bị camera kép chụp ảnh siêu nét",
		      "trademark": "Xiaomi",
		      "inventory": 633,
		      "count_view": 1
		    },
		    {
		      "id": "",
		      "name": "Xiaomi Redmi Note 6 Pro 3GB/32GB Xanh",
		      "photo": "https://via.placeholder.com/680x460",
		      "price_original": 120,
		      "discount": 14,
		      "rating": 3,
		      "description": "- Màn hình \"tai thỏ\" 6.26\" FHD+\n- Chip Snapdragon 636 8 nhân mạnh mẽ\n- Camera trước kép 20 MP + 2 MP\n- Camera sau kép 12 MP + 5 MP\n- Pin dung lượng khủng 4000mAh\n- 2 Nano SIM, hỗ trợ 4G",
		      "trademark": "Xiaomi",
		      "inventory": 333,
		      "count_view": 8
		    },
		    {
		      "id": "",
		      "name": "Xiaomi Redmi 6 Pro 32GB Ram 3GB (Đen)",
		      "photo": "https://via.placeholder.com/680x460",
		      "price_original": 69,
		      "discount": 6,
		      "rating": 1,
		      "description": "- Màn hình tràn viền tỉ lệ 18:9, độ phân giải Full HD sắc nét\n- Cấu hình cao - đáp ứng những trải nghiệm cao cấp \n- Vân tay 1 chạm siêu nhạy \n- Hỗ trợ 2 sim 2 sóng, thẻ nhớ SD\n- Trang bị camera kép chụp ảnh siêu nét",
		      "trademark": "Xiaomi",
		      "inventory": 666,
		      "count_view": 0
		    },
		    {
		      "id": "",
		      "name": "Xiaomi Mi Max 3 64GB Ram 4GB (Đen)",
		      "photo": "https://via.placeholder.com/680x460",
		      "price_original": 120,
		      "discount": 20,
		      "rating": 3,
		      "description": "- Màn hình tràn viền tỉ lệ 18:9, độ phân giải Full HD sắc nét\n- Cấu hình cao - đáp ứng những trải nghiệm cao cấp \n- Vân tay 1 chạm siêu nhạy \n- Hỗ trợ 2 sim 2 sóng, thẻ nhớ SD\n- Trang bị camera kép chụp ảnh siêu nét",
		      "trademark": "Xiaomi",
		      "inventory": 333,
		      "count_view": 0
		    },
		    {
		      "id": "",
		      "name": "Sony Xperia L1 - G3312 (Đen)",
		      "photo": "https://via.placeholder.com/680x460",
		      "price_original": 70,
		      "discount": 23,
		      "rating": 3,
		      "description": "- Xuất xứ: Trung Quốc\n- Bảo hành: 12 tháng\n- Màn hình HD 5,5 inches \n- RAM 2GB cùng bộ nhớ trong 16GB\n- Camera chất lượng cao 13MP\n- Hỗ trợ thẻ nhớ lên đến 256GB",
		      "trademark": "Sony",
		      "inventory": 424,
		      "count_view": 0
		    },
		    {
		      "id": "",
		      "name": "Sony Xperia L3",
		      "photo": "https://via.placeholder.com/680x460",
		      "price_original": 50,
		      "discount": 2,
		      "rating": 2,
		      "description": "Màn hình:\tIPS LCD, 5.7\", HD+\nHệ điều hành:\tAndroid 8.1 (Oreo)\nCamera sau:\tCamera kép\nCamera trước:\tĐang cập nhật\nRAM:\t3 GB\nBộ nhớ trong:\t32 GB\nThẻ nhớ:\tMicroSD, hỗ trợ tối đa 256 GB\nThẻ SIM:\n2 Nano SIM, Hỗ trợ 4G",
		      "trademark": "Sony",
		      "inventory": 142,
		      "count_view": 0
		    },
		    {
		      "id": "",
		      "name": "Sony Xperia XZ4",
		      "photo": "https://via.placeholder.com/680x460",
		      "price_original": 150,
		      "discount": 14,
		      "rating": 1,
		      "description": "Màn hình:\tP-OLED, 6.5\", Quad HD+ (2K+)\nHệ điều hành:\tAndroid 9.0 (Pie)\nCamera sau:\tĐang cập nhật\nCamera trước:\tĐang cập nhật\nRAM:\t6 GB\nBộ nhớ trong:\t128 GB\nThẻ nhớ:\tMicroSD, hỗ trợ tối đa 512 GB\nThẻ SIM:\n2 SIM Nano (SIM 2 chung khe thẻ nhớ), Hỗ trợ 4G",
		      "trademark": "Sony",
		      "inventory": 359,
		      "count_view": 0
		    },
		    {
		      "id": "",
		      "name": "Sony Xperia XZs",
		      "photo": "https://via.placeholder.com/680x460",
		      "price_original": 70,
		      "discount": 8,
		      "rating": 0,
		      "description": "Màn hình:\tIPS LCD, 5.2\", Full HD\nHệ điều hành:\tAndroid 7.0 (Nougat)\nCamera sau:\t19 MP\nCamera trước:\t13 MP\nCPU:\tSnapdragon 820 4 nhân 64-bit\nRAM:\t4 GB\nBộ nhớ trong:\t64 GB\nThẻ nhớ:\tMicroSD, hỗ trợ tối đa 256 GB\nThẻ SIM:\n2 SIM Nano (SIM 2 chung khe thẻ nhớ), Hỗ trợ 4G",
		      "trademark": "Sony",
		      "inventory": 555,
		      "count_view": 0
		    },
		    {
		      "id": "",
		      "name": "Sony Xperia M4 Aqua Dual",
		      "photo": "https://via.placeholder.com/680x460",
		      "price_original": 78,
		      "discount": 0,
		      "rating": 5,
		      "description": "Màn hình :\t720 x 1280 pixels\nRAM :\t2 GB\nBộ nhớ trong :\t8 GB\nCPU :\tSnapdragon 615, 8 Nhân, Quad-core 1.5 GHz + Quad-core 1.0 GHz\nGPU :\tAdreno 405\nDung lượng pin :\t2400 mAh\nThẻ SIM :\t2 Sim, Nano Sim",
		      "trademark": "Sony",
		      "inventory": 352,
		      "count_view": 0
		    },
		    {
		      "id": "",
		      "name": "Sony Xperia C5 Ultra Dual",
		      "photo": "https://via.placeholder.com/680x460",
		      "price_original": 80,
		      "discount": 12,
		      "rating": 3,
		      "description": "Màn hình:\tIPS LCD, 6.0\", Full HD\nHệ điều hành:\tAndroid 5.0 (Lollipop)\nCamera sau:\t13 MP\nCamera trước:\t13 MP\nCPU:\tMTK 6752 8 nhân 64-bit\nRAM:\t2 GB\nBộ nhớ trong:\t16 GB\nThẻ nhớ:\tChưa xác định\nThẻ SIM:\n2 Nano SIM, Hỗ trợ 4G",
		      "trademark": "Sony",
		      "inventory": 100,
		      "count_view": 0
		    },
		    {
		      "id": "",
		      "name": "Sony Xperia XA1 Plus",
		      "photo": "https://via.placeholder.com/680x460",
		      "price_original": 50,
		      "discount": 3,
		      "rating": 3,
		      "description": "Màn hình :\t5.5\", 1080 x 1920 pixel\nCamera trước :\t8 MP\nCamera sau :\t23MP 1/ 2.3”\nRAM :\t4GB\nBộ nhớ trong :\t32 GB\nCPU :\tMediaTek Helip P20 , 4 nhân, MediaTek Helip P20 2.3GHZ x4 + 1.6 GHz x4\nGPU :\tMali-T880 MP4\nDung lượng pin :\t3430mAh\nHệ điều hành :\tAndroid v7.1 (Nougat)\nThẻ SIM :\tNano sim, 2 Sim",
		      "trademark": "Sony",
		      "inventory": 555,
		      "count_view": 1
		    },
		    {
		      "id": "",
		      "name": "Sony Xperia M5 Dual",
		      "photo": "https://via.placeholder.com/680x460",
		      "price_original": 159,
		      "discount": 12,
		      "rating": 2,
		      "description": "Màn hình :\t1080 x 1920 pixels\nRAM :\t3 GB\nBộ nhớ trong :\t16 GB\nCPU :\tMT6795, 8 Nhân, Octa-core 2.0 GHz\nDung lượng pin :\t2600 mAh\nThẻ SIM :\tNano Sim, 2 Sim, hỗ trợ 4G",
		      "trademark": "Sony",
		      "inventory": 666,
		      "count_view": 0
		    },
		    {
		      "id": "",
		      "name": "Sony Xperia Z5 Premium",
		      "photo": "https://via.placeholder.com/680x460",
		      "price_original": 200,
		      "discount": 14,
		      "rating": 1,
		      "description": "Màn hình :\t2160 x 3840 pixels\nRAM :\t3 GB\nBộ nhớ trong :\t32 GB\nCPU :\tQualcomm MSM8994 Snapdragon 810, 8 Nhân, Quad-core 1.5 GHz & Quad-core 2 GHz\nGPU :\tAdreno 430\nDung lượng pin :\t3430 mAh\nThẻ SIM :\tNano Sim, 2 Sim, hỗ trợ 4G",
		      "trademark": "Sony",
		      "inventory": 378,
		      "count_view": 1
		    },
		    {
		      "id": "",
		      "name": "Sony Xperia XA1",
		      "photo": "https://via.placeholder.com/680x460",
		      "price_original": 90,
		      "discount": 20,
		      "rating": 3,
		      "description": "Màn hình :\t720 x 1280 pixels\nRAM :\t3 GB\nBộ nhớ trong :\t32 GB\nCPU :\tMediatek MT6757 Helio P20, 8 Nhân, 4x2.3 GHz Cortex-A53 & 4x1.6 GHz Cortex-A5\nGPU :\tMali-T880MP2\nDung lượng pin :\t2300 mAh\nThẻ SIM :\tNano Sim, hỗ trợ 4G",
		      "trademark": "Sony",
		      "inventory": 652,
		      "count_view": 0
		    },
		    {
		      "id": "",
		      "name": "Sony Xperia Z5 compact",
		      "photo": "https://via.placeholder.com/680x460",
		      "price_original": 59,
		      "discount": 0,
		      "rating": 4,
		      "description": "Màn hình :\t1280 x 720 pixels\nRAM :\t2 GB\nBộ nhớ trong :\t32 GB\nCPU :\tQualcomm MSM8994 Snapdragon 810, 8 Nhân, Quad-core 1.5 GHz & Quad-core 2 GHz\nGPU :\tAdreno 430\nDung lượng pin :\t2700 mAh\nThẻ SIM :\t1 Sim, Micro SIM, hỗ trợ 4G",
		      "trademark": "Sony",
		      "inventory": 630,
		      "count_view": 9
		    },
		    {
		      "id": "",
		      "name": "Sony Xperia XA Ultra",
		      "photo": "https://via.placeholder.com/680x460",
		      "price_original": 70,
		      "discount": 3,
		      "rating": 1,
		      "description": "Màn hình :\t1080 x 1920 pixels\nCamera trước :\t16.0 MP\nCamera sau :\t21.5 MP\nRAM :\t3 GB\nBộ nhớ trong :\t16 GB\nCPU :\tMediatek MT6755 Helio P10, 8 Nhân, 2.0 GHz\nGPU :\tMali-T860MP2\nDung lượng pin :\t2700 mAh\nThẻ SIM :\tNano Sim, 2 Sim",
		      "trademark": "Sony",
		      "inventory": 210,
		      "count_view": 3
		    },
		    {
		      "id": "",
		      "name": "Sony Xperia XA",
		      "photo": "https://via.placeholder.com/680x460",
		      "price_original": 70,
		      "discount": 2,
		      "rating": 4,
		      "description": "Màn hình :\t1280 x 720 pixels\nCamera trước :\t8.0 MP\nCamera sau :\t13.0 MP\nRAM :\t2 GB\nBộ nhớ trong :\t16 GB\nCPU :\tMediatek MT6755 Helio P10, 8 Nhân, 2.0 GHz\nGPU :\tMali-T860MP2\nDung lượng pin :\t2300 mAh\nThẻ SIM :\t2 Sim, Nano Sim, hỗ trợ 4G",
		      "trademark": "Sony",
		      "inventory": 333,
		      "count_view": 0
		    },
		    {
		      "id": "",
		      "name": "Sony Xperia XZ Premium",
		      "photo": "https://via.placeholder.com/680x460",
		      "price_original": 210,
		      "discount": 15,
		      "rating": 3,
		      "description": "Màn hình :\t4K HDR (2160 x 3840 Pixels)\nCamera trước :\t13 MP\nCamera sau :\tCamera Motion Eye™ 19 MP\nRAM :\t4GB\nBộ nhớ trong :\tUFS 64 GB\nCPU :\tQualcomm Snapdragon 835, 8 Nhân, Octa-core (4x2.45 GHz Kryo & 4x1.9 GHz Kryo)\nDung lượng pin :\t3230 mAh\nHệ điều hành :\tAndroid™ 7.0 (Nougat)\nThẻ SIM :\tNano SIM, 2 Sim",
		      "trademark": "Sony",
		      "inventory": 264,
		      "count_view": 0
		    },
		    {
		      "id": "",
		      "name": "Sony Xperia C4 Dual (E5333)",
		      "photo": "https://via.placeholder.com/680x460",
		      "price_original": 40,
		      "discount": 10,
		      "rating": 3,
		      "description": "Màn hình :\t1080 x 1920 pixels\nCamera trước :\t5.0 MP\nCamera sau :\t13.0 MP\nRAM :\t2 GB\nBộ nhớ trong :\t16 GB\nCPU :\tMediaTek MTK6752, 8 Nhân, Octa-Core 1.7 GHz\nGPU :\tARM Mali760 MP2\nDung lượng pin :\t2600 mAh\nThẻ SIM :\t2 SIM 2 sóng, Nano Sim, hỗ trợ 4G",
		      "trademark": "Sony",
		      "inventory": 330,
		      "count_view": 0
		    },
		    {
		      "id": "",
		      "name": "Sony Xperia X",
		      "photo": "https://via.placeholder.com/680x460",
		      "price_original": 60,
		      "discount": 0,
		      "rating": 5,
		      "description": "Màn hình :\t1080 x 1920 pixels\nCamera trước :\t13.0 MP\nCamera sau :\t23.0 MP\nRAM :\t3 GB\nBộ nhớ trong :\t64 GB\nCPU :\tQualcomm MSM8956 Snapdragon 650, 6 nhân, 1.8 GHz & 1.4 GHz\nGPU :\tAdreno 510\nDung lượng pin :\t2620 mAh\nThẻ SIM :\tNano Sim, 2 Sim",
		      "trademark": "Sony",
		      "inventory": 100,
		      "count_view": 38
		    },
		    {
		      "id": "",
		      "name": "Sony Xperia XZ1",
		      "photo": "https://via.placeholder.com/680x460",
		      "price_original": 70,
		      "discount": 4,
		      "rating": 3,
		      "description": "Màn hình :\t5.2\", 1080 x 1920 pixel\nCamera trước :\t13MP\nCamera sau :\t19MP\nRAM :\t4GB\nBộ nhớ trong :\t64 GB\nCPU :\tQualcomm Snapdragon 835 , 8 nhân, 4 nhân 2.45 GHz Kryo & 4 nhân 1.9 GHz Kryo\nGPU :\tAdreno 540\nDung lượng pin :\t2700 mah\nHệ điều hành :\tAndroid 8 (Oreo)\nThẻ SIM :\tNano sim, 2 Sim",
		      "trademark": "Sony",
		      "inventory": 741,
		      "count_view": 8
		    },
		    {
		      "id": "",
		      "name": "Sony Xperia XZ2",
		      "photo": "https://via.placeholder.com/680x460",
		      "price_original": 80,
		      "discount": 6,
		      "rating": 1,
		      "description": "Màn hình:\tIPS HDR LCD, 5.7\", Full HD+\nHệ điều hành:\tAndroid 8.0 (Oreo)\nCamera sau:\t19 MP\nCamera trước:\t5 MP\nCPU:\tSnapdragon 845 8 nhân\nRAM:\t4 GB\nBộ nhớ trong:\t64 GB\nThẻ nhớ:\tMicroSD, hỗ trợ tối đa 400 GB\nThẻ SIM:\n2 Nano SIM, Hỗ trợ 4G",
		      "trademark": "Sony",
		      "inventory": 400,
		      "count_view": 0
		    },
		    {
		      "id": "",
		      "name": "Sony Xperia Z1",
		      "photo": "https://via.placeholder.com/680x460",
		      "price_original": 10,
		      "discount": 0,
		      "rating": 3,
		      "description": "Màn hình:\tTFT, 5\", Full HD\nHệ điều hành:\tAndroid 4.2.2 (Jelly Bean)\nCamera sau:\t20.7 MP\nCamera trước:\t2 MP\nCPU:\tQualcomm MSM8974\nBộ nhớ trong:\t16 GB\nThẻ SIM:\t1 Micro SIM, Hỗ trợ 4G\nDung lượng pin:\t3000 mAh",
		      "trademark": "Sony",
		      "inventory": 633,
		      "count_view": 2
		    },
		    {
		      "id": "",
		      "name": "Xiaomi Redmi 1S",
		      "photo": "https://via.placeholder.com/680x460",
		      "price_original": 30,
		      "discount": 10,
		      "rating": 0,
		      "description": "Màn hình:\tIPS LCD, 4.7\", IPS-LCD\nHệ điều hành:\tAndroid 4.3 (Jelly Bean)\nCamera sau:\t8 MP\nCamera trước:\t1.6 MP\nCPU:\tQualcomm Snapdragon 400 4 nhân 32-bit\nBộ nhớ trong:\t8 GB\nThẻ SIM:\t1 Micro SIM\nDung lượng pin:\t2000 mAh",
		      "trademark": "Xiaomi",
		      "inventory": 0,
		      "count_view": 1
		    },
		    {
		      "id": "",
		      "name": "Xiaomi Redmi 2",
		      "photo": "https://via.placeholder.com/680x460",
		      "price_original": 40,
		      "discount": 3,
		      "rating": 1,
		      "description": "Màn hình:\tIPS LCD, 4.7\", IPS-LCD\nHệ điều hành:\tAndroid 4.4 (KitKat)\nCamera sau:\t8 MP\nCamera trước:\t2 MP\nCPU:\tQualcomm Snapdragon 410 4 nhân 64-bit\nBộ nhớ trong:\t16 GB\nThẻ SIM:\t1 Micro SIM\nDung lượng pin:\t2200 mAh",
		      "trademark": "Xiaomi",
		      "inventory": 200,
		      "count_view": 0
		    },
		    {
		      "id": "",
		      "name": "Xiaomi Redmi 3",
		      "photo": "https://via.placeholder.com/680x460",
		      "price_original": 50,
		      "discount": 12,
		      "rating": 0,
		      "description": "Màn hình:\tIPS LCD, 5\", HD\nHệ điều hành:\tAndroid OS\nCamera sau:\t13 MP\nCamera trước:\t5 MP\nCPU:\tQualcomm Snapdragon 616 8 nhân 64-bit\nRAM:\t2 GB\nBộ nhớ trong:\t16 GB\nThẻ SIM:\nNano SIM & Micro SIM",
		      "trademark": "Xiaomi",
		      "inventory": 203,
		      "count_view": 0
		    },
		    {
		      "id": "",
		      "name": "Xiaomi Redmi 4 Nhập Khẩu 16GB",
		      "photo": "https://via.placeholder.com/680x460",
		      "price_original": 60,
		      "discount": 5,
		      "rating": 4,
		      "description": "Màn hình\t\nIPS LCD, 5.0\", HD\n\nBăng tần - Sim\t\n2G/3G, LTE\n\nCPU\t\nQualcomm Snapdragon 430\n\nTốc độ CPU\t\nOcta-core 1.2 GHz\n\nBộ nhớ trong\t\n16 GB\n\nRAM\t\n2 GB\n\nCảm biến\t\nFingerprint (rear-mounted), accelerometer, gyro, proximity, compass\n\nBảo mật nâng cao\t\nMở khóa bằng vân tay\n\nPin\t\nLi-Po 4100 mAh\n\nCamera trước\t\n5.0 MP\n\nCamera sau\t\n13 MP\n\nMàu sắc\t\nBạc, Vàng, Xám",
		      "trademark": "Xiaomi",
		      "inventory": 400,
		      "count_view": 0
		    },
		    {
		      "id": "",
		      "name": "Xiaomi Redmi Note 2",
		      "photo": "https://via.placeholder.com/680x460",
		      "price_original": 70,
		      "discount": 9,
		      "rating": 5,
		      "description": "Màn hình:\tIPS LCD, 5.5\", Full HD\nHệ điều hành:\tAndroid 5.0 (Lollipop)\nCamera sau:\t13 MP\nCamera trước:\t5 MP\nCPU:\tMT6795 (Helio x10) 8 nhân 64-bit\nBộ nhớ trong:\t32 GB\nThẻ SIM:\t1 Micro SIM\nDung lượng pin:\t3050 mAh",
		      "trademark": "Xiaomi",
		      "inventory": 500,
		      "count_view": 9
		    },
		    {
		      "id": "",
		      "name": "Xiaomi Redmi Note 3",
		      "photo": "https://via.placeholder.com/680x460",
		      "price_original": 80,
		      "discount": 10,
		      "rating": 3,
		      "description": "Màn hình:\tIPS LCD, 5.5\", -\nHệ điều hành:\tAndroid 5.1 (Lollipop)\nCamera sau:\t13 MP\nCamera trước:\t5 MP\nCPU:\tSnapdragon 650 6 nhân 64-bit\nRAM:\t2 GB\nBộ nhớ trong:\t16 GB\nThẻ SIM:\n1 Micro SIM\nHOTSIM VIETTEL GÔGÔ 4G (2.5GB data/ tháng). Giá từ 80.000đ\nDung lượng pin:\t4000 mAh",
		      "trademark": "Xiaomi",
		      "inventory": 600,
		      "count_view": 0
		    },
		    {
		      "id": "",
		      "name": "Xiaomi Redmi Note 4",
		      "photo": "https://via.placeholder.com/680x460",
		      "price_original": 90,
		      "discount": 8,
		      "rating": 2,
		      "description": "Màn hình:\tIPS LCD, 5.5\", Full HD\nHệ điều hành:\tAndroid 6.0 (Marshmallow)\nCamera sau:\t13 MP\nCamera trước:\t5 MP\nCPU:\tSnapdragon 625 8 nhân 64-bit\nRAM:\t3 GB\nBộ nhớ trong:\t32 GB\nThẻ nhớ:\tMicroSD, hỗ trợ tối đa 128 GB\nThẻ SIM:\nNano SIM & Micro SIM (SIM 2 chung khe thẻ nhớ), Hỗ trợ 4G",
		      "trademark": "Xiaomi",
		      "inventory": 600,
		      "count_view": 0
		    },
		    {
		      "id": "",
		      "name": "Xiaomi Mi A1 64GB",
		      "photo": "https://via.placeholder.com/680x460",
		      "price_original": 18,
		      "discount": 2,
		      "rating": 1,
		      "description": "Màn hình:\tLTPS LCD, 5.5\", Full HD\nHệ điều hành:\tAndroid 7.1 (Nougat)\nCamera sau:\t2 camera 12 MP\nCamera trước:\t5 MP\nCPU:\tSnapdragon 625 8 nhân 64-bit\nRAM:\t4 GB\nBộ nhớ trong:\t64 GB\nThẻ nhớ:\tMicroSD, hỗ trợ tối đa 128 GB\nThẻ SIM:\n2 SIM Nano (SIM 2 chung khe thẻ nhớ), Hỗ trợ 4G",
		      "trademark": "Xiaomi",
		      "inventory": 0,
		      "count_view": 0
		    },
		    {
		      "id": "",
		      "name": "Xiaomi Mi Mix 2",
		      "photo": "https://via.placeholder.com/680x460",
		      "price_original": 20,
		      "discount": 3,
		      "rating": 4,
		      "description": "Màn hình:\tIPS LCD, 5.99\", Full HD\nHệ điều hành:\tAndroid 7.1 (Nougat)\nCamera sau:\t12 MP\nCamera trước:\t5 MP\nCPU:\tQualcomm Snapdragon 835 8 nhân 64-bit\nRAM:\t6 GB\nBộ nhớ trong:\t64 GB\nThẻ SIM:\n2 Nano SIM, Hỗ trợ 4G",
		      "trademark": "Xiaomi",
		      "inventory": 300,
		      "count_view": 3
		    },
		    {
		      "id": "",
		      "name": "Xiaomi Mi 2",
		      "photo": "https://via.placeholder.com/680x460",
		      "price_original": 45,
		      "discount": 10,
		      "rating": 0,
		      "description": "Màn hình:\tIPS LCD, 4.3\", IPS-LCD\nHệ điều hành:\tAndroid 4.4 (KitKat)\nCamera sau:\t8 MP\nCamera trước:\t2 MP\nCPU:\tQualcomm APQ8064\nBộ nhớ trong:\t16 GB\nThẻ SIM:\t1 Micro SIM\nDung lượng pin:\t2000 mAh",
		      "trademark": "Xiaomi",
		      "inventory": 600,
		      "count_view": 0
		    },
		    {
		      "id": "",
		      "name": "Xiaomi Mi 3",
		      "photo": "https://via.placeholder.com/680x460",
		      "price_original": 45,
		      "discount": 3,
		      "rating": 5,
		      "description": "Màn hình:\tIPS LCD, 5\", IPS-LCD\nHệ điều hành:\tAndroid 4.3 (Jelly Bean)\nCamera sau:\t13 MP\nCamera trước:\t2 MP\nCPU:\tQualcomm Snapdragon 800\nBộ nhớ trong:\t16 GB\nThẻ SIM:\t1 Micro SIM\nDung lượng pin:\t3050 mAh",
		      "trademark": "Xiaomi",
		      "inventory": 800,
		      "count_view": 0
		    },
		    {
		      "id": "",
		      "name": "Xiaomi Mi 4",
		      "photo": "https://via.placeholder.com/680x460",
		      "price_original": 60,
		      "discount": 14,
		      "rating": 5,
		      "description": "Màn hình:\tIPS LCD, 5\", Full HD\nHệ điều hành:\tAndroid 4.4 (KitKat)\nCamera sau:\t13 MP\nCamera trước:\t8 MP\nCPU:\tQualcomm Snapdragon 801 4 nhân 32-bit\nRAM:\t2 GB\nBộ nhớ trong:\t16 GB\nThẻ SIM:\n1 Micro SIM, Hỗ trợ 4G",
		      "trademark": "Xiaomi",
		      "inventory": 600,
		      "count_view": 0
		    },
		    {
		      "id": "",
		      "name": "Xiaomi Mi 5",
		      "photo": "https://via.placeholder.com/680x460",
		      "price_original": 60,
		      "discount": 8,
		      "rating": 3,
		      "description": "Màn hình:\tIPS LCD, 5.15\", Full HD\nHệ điều hành:\tAndroid 6.0 (Marshmallow)\nCamera sau:\t16 MP\nCamera trước:\t4 MP\nCPU:\tSnapdragon 820 4 nhân 64-bit\nRAM:\t3 GB\nBộ nhớ trong:\t32 GB\nThẻ SIM:\n1 Nano SIM, Hỗ trợ 4G",
		      "trademark": "Xiaomi",
		      "inventory": 600,
		      "count_view": 7
		    },
		    {
		      "id": "",
		      "name": "Xiaomi Mi 6",
		      "photo": "https://via.placeholder.com/680x460",
		      "price_original": 80,
		      "discount": 8,
		      "rating": 3,
		      "description": "Màn hình:\tIPS LCD, 5.15\", Full HD\nHệ điều hành:\tAndroid 7.1 (Nougat)\nCamera sau:\t2 camera 12 MP\nCamera trước:\t8 MP\nCPU:\tQualcomm Snapdragon 835 8 nhân 64-bit\nRAM:\t6 GB\nBộ nhớ trong:\t64 GB\nThẻ SIM:\n2 Nano SIM, Hỗ trợ 4G",
		      "trademark": "Xiaomi",
		      "inventory": 400,
		      "count_view": 0
		    },
		    {
		      "id": "",
		      "name": "Xiaomi Mi 7",
		      "photo": "https://via.placeholder.com/680x460",
		      "price_original": 120,
		      "discount": 10,
		      "rating": 5,
		      "description": "Màn hình:\tP-OLED, 6\", Full HD+\nHệ điều hành:\tAndroid 8.0 (Oreo)\nCamera sau:\t20 MP và 12 MP (2 camera)\nCamera trước:\t16 MP và 16 MP\nCPU:\tSnapdragon 845 8 nhân\nRAM:\t6 GB\nBộ nhớ trong:\t64 GB\nThẻ nhớ:\tMicroSD, hỗ trợ tối đa 256 GB\nThẻ SIM:\n2 Nano SIM, Hỗ trợ 4G\nHOTSIM VIETTEL GÔGÔ 4G (2.5GB data/ tháng). Giá từ 80.000đ\nDung lượng pin:\t3770 mAh, có sạc nhanh",
		      "trademark": "Xiaomi",
		      "inventory": 600,
		      "count_view": 0
		    },
		    {
		      "id": "",
		      "name": "Samsung Galaxy A8 Star",
		      "photo": "https://via.placeholder.com/680x460",
		      "price_original": 120,
		      "discount": 50,
		      "rating": 5,
		      "description": "Màn hình :\t6.3\", Full HD+ (1080 x 2220 Pixels)\nCamera trước :\t24 MP\nCamera sau :\t24 MP và 16 MP (2 camera)\nRAM :\t4 GB\nBộ nhớ trong :\t64 GB\nCPU :\tQualcomm Snapdragon 660, 8 nhân, 4 nhân 2.2 GHz & 4 nhân 1.8 GHz\nGPU :\tAdreno 512\nDung lượng pin :\t3700 mAh\nHệ điều hành :\tAndroid 8.0 (Oreo)\nThẻ SIM :\tNano Sim, 2 Sim, hỗ trợ 4G",
		      "trademark": "Samsung",
		      "inventory": 469,
		      "count_view": 18
		    },
		    {
		      "id": "",
		      "name": "IPhone Xs 64GB",
		      "photo": "https://via.placeholder.com/680x460",
		      "price_original": 100,
		      "discount": 0,
		      "rating": 4,
		      "description": "Màn hình:\tOLED, 5.8\", Super Retina\nHệ điều hành:\tiOS 12\nCamera sau:\t2 camera 12 MP\nCamera trước:\t7 MP\nCPU:\tApple A12 Bionic 6 nhân\nRAM:\t4 GB\nBộ nhớ trong:\t64 GB\nThẻ SIM:\nNano SIM & eSIM, Hỗ trợ 4G",
		      "trademark": "Apple",
		      "inventory": 603,
		      "count_view": 2
		    }
		  ]
		};
	}

	onRestoreProducts = (products) => {
		this.props.onRestoreProducts(products);
	}

	render() {
		return (
			<div className="section">
				<div className="container text-center">
					<button type="button" className="btn btn-primary mb-20" onClick={ () => this.onRestoreProducts(this.state.products) } >Khôi phục sản phẩm đã xóa</button>
					<div className="alert alert-success hidden" role="alert" id="message_restore"></div>
				</div>
			</div>
		);
	}
}

RestoreProducts.propTypes = {
	onRestoreProducts: PropTypes.func
};

const mapDispatchToProps = (dispatch, props) => {
	return {
		onRestoreProducts: (products) => {
			dispatch(actRestoreProducts(products));
		}
	};
};

export default connect(null, mapDispatchToProps)(RestoreProducts);