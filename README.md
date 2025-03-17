# Bé Học Chữ Cái

## Giới Thiệu

Dự án "Bé Học Chữ Cái" được phát triển bằng mô hình Waterfall nhằm hỗ trợ trẻ em học bảng chữ cái một cách trực quan và tương tác. Dự án được thực hiện trong khuôn khổ môn học **Software Project Management (ITE1140E)** tại Khoa Công Nghệ Thông Tin, dưới sự hướng dẫn của giảng viên **Lê Viết Linh**.

## Thông Tin Dự Án

- **Lớp/Nhóm:** A01E/A02E
- **Số lượng thành viên:** 6
- **Thành viên nhóm:**
  1. Phùng Gia Huy
  2. Phạm Nguyễn Hoài Bảo
  3. Phạm Ngọc Nam
  4. Nguyễn Hữu Huỳnh
  5. Nguyễn Lê Minh Hùng
  6. Hoàng Anh Tuấn

## Công Nghệ Sử Dụng

- **Framework:** Next.js
- **UI Library:** Tailwind CSS
- **Version Control:** Git & GitHub

## Chức Năng Chính

1. **Mô phỏng tương tác**: Khi nhấp vào một quả trứng, quả trứng sẽ vỡ và hiển thị một chữ cái.
2. **Hiển thị hình ảnh**: Khi nhấp vào chữ cái, một hình ảnh đại diện cho từ chứa chữ đó sẽ xuất hiện.
3. **Luật chơi**: Trẻ chỉ có thể phá trứng theo thứ tự, không thể phá trứng mới khi chưa phá trứng trước.
4. **Giao diện trực quan, sinh động**: Dành cho trẻ em học chữ cái một cách về sinh động và thu hút.

## Quá Trình Phát Triển (Theo Waterfall Model)

### 1. **Requirements Gathering and Analysis**

- Thu thập và phân tích yêu cầu.
- Tài liệu: Functional & Non-functional Requirements Document.

### 2. **System Design**

- Xây dựng tài liệu **Design Specification Document**.
- Thiết kế cơ sở dữ liệu (Database Schema) và kiến trúc hệ thống.

### 3. **Implementation (Coding)**

- Mã nguồn được quản lý trên GitHub.
- Các nhánh sử dụng:
  - `develop`: Source code mới nhất cho phát triển.
  - `master`: Source code đã được release.

### 4. **Testing**

- Tiến hành test chức năng, giao diện và hiệu năng.
- Tài liệu: Test Reports, Defect Logs.

## Cài Đặt & Chạy Dự Án

### 1. Fork và Clone Dự Án:

Nhấn Fork để tạo một bản sao về tài khoản

```sh
git clone https://github.com/<your-username>/Spell.git && cd Spell
```

### 2. Cài đặt dependencies:

```sh
npm install
```

### 3. Chạy dự án:

```sh
npm run dev
```

Mã nguồn sẽ chạy tại `http://localhost:3000`.
