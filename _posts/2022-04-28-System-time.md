---
title: System time
date: 2022-04-28 20:27:00 +0700
categories: [Arch Linux]
---

## Hardware clock
Đây là thời gian được cấu hình trong máy (đồng hồ CMOS).
### Hiển thị thời gian hiện tại trên máy
```shell
# hwclock --show
```
### Đặt đồng hồ phần cứng từ đồng hồ hệ thống
```shell
# hwclock --systohc
```

## Đồng hồ hệ thống
Đồng hồ hệ thống (hay còn gọi là đồng hồ phần mềm) theo dõi: thời gian, múi giờ và DST nếu có. Nó được nhân Linux tính bằng số giây kể từ nữa đêm ngày 1 tháng 1 năm 1970. 
### Đọc đồng hồ hệ thống
```shell
$ timedatectl
```
### Đặt đồng hồ hệ thống
```shell
# timedatectl set-time "yyyy-MM-dd hh: mm: ss"
```
VD:
```shell
# timedatectl set-time "2022-04-28 20:23:54"
```

## Time zone
Kiểm tra `time zone` hiện tại

```shell
$ timedatectl status
```

Hiển thị danh sách các `time zone`

```shell
$ timedatectl list-timezones
```

Thiết lập `time zone`
```shell
# timedatectl set-timezone Zone/SubZone
```

Ví dụ:
```shell
# timedatectl set-timezone Asia/Ho_Chi_Minh
```

**Tham khảo**

[https://wiki.archlinux.org/title/System_time](https://wiki.archlinux.org/title/System_time)