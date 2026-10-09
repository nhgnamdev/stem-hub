# STEM HUB — Pro V3 (Demo)

Ứng dụng frontend HTML/CSS/JavaScript để mô phỏng quản lý CLB STEM ở quy mô khoảng 80 thành viên.

## Chạy ứng dụng
1. Giải nén file ZIP.
2. Mở `STEM_HUB_Complete_Demo/index.html` bằng Chrome, Safari hoặc Edge.
3. Vào **Cài đặt & dữ liệu** → chọn **Tạo dữ liệu demo (80 thành viên)** để sinh dữ liệu giả lập.
4. Dùng bộ chọn **Vai trò demo** ở góc trên để thử ba vai trò.

## Các vai trò demo
- **Quản trị viên:** toàn quyền quản lý thành viên, cơ cấu, hoạt động, nhiệm vụ, sự kiện, điểm, tài chính, thông báo, sao lưu/khôi phục và cài đặt.
- **Trưởng ban:** quản lý hoạt động, nhiệm vụ, sự kiện, thành tích và thông báo; xem cơ cấu, điểm và báo cáo; không có quyền quản lý hồ sơ thành viên hoặc sửa tài chính/cài đặt.
- **Thành viên:** giao diện xem các mục tổng quan, nhiệm vụ, sự kiện, bảng xếp hạng, thành tích và thông báo; không được dùng các thao tác quản trị.

Đây là **bộ chuyển vai trò mô phỏng**, không phải hệ thống đăng nhập. Không nhập dữ liệu cá nhân thật.

## Nút tạo dữ liệu demo
Bổ sung thành viên đến đủ 80 người và sinh thêm dữ liệu nhiệm vụ, hoạt động, giao dịch điểm, thành tích. Không xóa dữ liệu hiện có; có thể bấm nhiều lần mà không tăng vượt các mục tiêu demo đã định. Thành viên được tạo là dữ liệu giả.

## Các tính năng chính
- Dashboard, danh sách thành viên, cơ cấu ban, hoạt động và sự kiện.
- Quản lý nhiệm vụ dạng Kanban, duyệt nhiệm vụ và theo dõi điểm cộng/trừ.
- Bảng xếp hạng, thành tích, tài chính, thông báo và báo cáo.
- Xuất CSV, sao lưu/khôi phục JSON, dữ liệu lưu trong localStorage.
- Kiểm tra dữ liệu nhập và xử lý lỗi lưu trữ trình duyệt.

## Giới hạn quan trọng
Dữ liệu nằm trong `localStorage` của trình duyệt hiện tại, không tự đồng bộ giữa máy tính/người dùng. Phân quyền chỉ được kiểm tra phía giao diện nên **không bảo đảm an toàn**. Để vận hành thật cần backend, cơ sở dữ liệu dùng chung, đăng nhập xác thực, kiểm tra quyền tại máy chủ, nhật ký thao tác và sao lưu định kỳ.
