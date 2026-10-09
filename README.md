# STEM HUB Pro V4 — Modular Edition

Ứng dụng demo quản lý CLB STEM, được tách thành các file HTML, CSS và JavaScript độc lập để dễ bảo trì, phát triển và đưa lên GitHub Pages.

## Chạy trên máy
1. Giải nén thư mục dự án.
2. Mở `index.html` bằng trình duyệt hiện đại. Không cần npm, build tool hay backend.
3. Vào **Cài đặt & dữ liệu** → **Tạo dữ liệu demo (80 thành viên)** để bổ sung dữ liệu mẫu cho CLB quy mô 80 người.

## Cấu trúc thư mục
```text
STEM_HUB_Pro_V4/
├── index.html
├── css/
│   └── style.css
├── js/
│   ├── app.js
│   ├── permissions.js
│   └── demo-data.js
├── README.md
└── CHANGELOG.md
```

- `index.html`: cấu trúc giao diện và các điểm gắn CSS/JS.
- `css/style.css`: toàn bộ phong cách giao diện.
- `js/app.js`: luồng ứng dụng, render trang, biểu mẫu, lưu dữ liệu, xuất/nhập dữ liệu.
- `js/permissions.js`: cấu hình vai trò và chính sách hiển thị trang/thao tác ở phía giao diện.
- `js/demo-data.js`: tạo dữ liệu giả lập.

## Chức năng demo
- Dashboard tổng quan.
- Danh sách thành viên: tìm kiếm, lọc, hồ sơ và xuất CSV.
- Quản lý ban, hoạt động, nhiệm vụ và sự kiện.
- Duyệt nhiệm vụ và giao dịch tài chính theo luồng hiện có.
- Bảng xếp hạng, thành tích, thông báo và báo cáo.
- Điểm cộng/trừ có lý do; hạn chế ghi nhận trùng điểm cho nhiệm vụ đã duyệt.
- Sao lưu/khôi phục JSON có kiểm tra định dạng.
- Tạo dữ liệu demo với mục tiêu 80 thành viên cùng dữ liệu nhiệm vụ, hoạt động, giao dịch điểm và thành tích.
- Chuyển vai trò demo: Quản trị viên, Trưởng ban, Thành viên.

## Đưa lên GitHub Pages
1. Đưa toàn bộ nội dung thư mục này lên repository.
2. Đảm bảo `index.html` nằm ở thư mục gốc của branch xuất bản.
3. Mở **Settings → Pages**.
4. Chọn **Deploy from a branch**, branch `main`, folder `/(root)` rồi Save.

## Giới hạn quan trọng
Đây là **frontend demo**. Dữ liệu được lưu trong `localStorage` của trình duyệt đang dùng; không đồng bộ giữa người dùng hoặc thiết bị. Bộ chọn vai trò chỉ mô phỏng phân quyền ở giao diện, **không phải xác thực hay bảo mật thật**. Người dùng có thể sửa JavaScript phía trình duyệt. Không lưu dữ liệu cá nhân nhạy cảm hoặc thông tin tài chính thực.

Để vận hành cho 80 thành viên thật cần bổ sung backend/database, đăng nhập, kiểm tra quyền tại máy chủ, phạm vi dữ liệu theo ban, nhật ký kiểm toán và quy trình sao lưu trên máy chủ.
