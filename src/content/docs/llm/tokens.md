---
title: Tìm hiểu về tokens
description: 1. Những hiểu biết cơ bản về tokens
---

##  Tokenization
### Token là gì?

Tokenization là quá trình chia nhỏ một đoạn văn bản - chẳng hạn như một câu, một đoạn văn hoặc một tài liệu - thành các đơn vị riêng biệt được gọi là `token`.

Tùy thuộc vào thuật toán sử dụng, các token này có thể đại diện cho từ, một phần của từ, ký tự hoặc thậm chí các dấu câu. 

Mục tiêu chính của `tokenization` là chuyển đổi văn bản phi cấu trúc thành định dạng mà máy tính có thể  xử lý được. Các mô hình ngôn ngữ, dù dựa trên phương pháp thống kê truyền thống hay mạng thần kinh hiện đại, đều vận hành trên dữ liệu số. Các bộ tách từ đóng vai trò cầu nối giữa văn bản mà con người có thể đọc được và các biểu diễn dạng số bằng cách ánh xạ từng `token` tới một định danh duy nhất (ID) trong một tập từ vựng. Các ID này sau đó được sử dụng làm đầu vào cho các mô hình để thực hiện những tác vụ như dự đoán từ tiếp theo, phân loại cảm xúc hoặc dich ngôn ngữ.

`Tokenization` không phải là một quy trình áp dụng chung cho mọi trường hợp. Mức độ chi tiết của `token` cùng các quy tắc phân tách văn bản sẽ phụ thuộc vào ứng dụng cụ thể, ngôn ngữ và kiến trúc mô hình. Một bộ `tokenization` được thiết kế kém có thể dẫn đến các vấn đề như từ vựng quá lớn, khó xử lý các từ hiếm gặp, hoặc làm mất đi ý nghĩa ngữ nghĩa; tất cả những đều này có thể làm giảm hiệu suất của mô hình.

### Các loại tokenizer
Có nhiều loại bộ tách từ khác nhau, mỗi loại đều có những ưu điểm và hạn chế riên. Việc lựa chọn bộ tách từ phụ thuộc và tác vụ, ngôn ngữ và các yêu cầu của mô hình.

### Word-level
Bộ tách từ dựa trên từ ngữ chia văn bản thành từng từ riêng biệt, thường sử dụng khoảng trắng và dấu câu là các ký tự phân tách.

**Ưu điểm**:
- Trực quan và phù hợp với cách con người hiểu ngôn ngữ.
- Dễ triển khai đối với các ngôn ngữ có ranh giới từ rõ ràng.
**Nhược điểm**:
- Từ vựng rất lớn, vì mỗi từ duy nhất (bao gồm, cả các từ viết sai chính tả và các biến thể hình thái từ) đều cần một đơn vị (token) riêng biệt.
- Khả năng xử lý kém đối với các từ hiếm hoặc nằm ngoài vốn từ vựng.
- Không hiệu quả đối với các ngôn ngữ không có ranh giới từ rõ ràng (tiếng Việt).

### Character-level 
Các bộ tách từ dựa trên ký tự coi mỗi ký tự là một đơn vị tách từ (token). 

**Ưu điểm**: 
- Kích thước từ vựng tối giản, vì chỉ bao gồm các ký tự.
- Xử lý tốt các từ hiếm gặp và lỗi chính tả.
- Không phụ thuộc vào ngôn ngữ cụ thể, phù hợp cho các ứng dụng đa ngôn ngữ.

**Nhược điểm**: 
- Tạo ra các chuỗi token dài, làm tăng chi phí tính toán.
- Làm mất thông tin ngữ nghĩa ở cấp độ cao hơn.
- Đòi hỏi các mô hình phải học những khuôn mẫu phức tạp từ các đơn vị cơ bản nhất.

### Subword tokenization
Các bộ tách từ dựa trên đơn vị con tạo ra sự cân bằng giữa phương pháp dựa trên từ và phương pháp dựa trên ký tự bằng cách chia văn bản thành các đơn vị nhỏ hơn từ nhưng lớn hơn ký tự. Các thuật toán tách từ dựa trên đơn vị con phổ biến bao gồm Byte-Pair Encoding (BPE), WordPiece và SentencePiece.

**Ưu điểm**: 
- Từ vựng gọn nhẹ, xử lý hiệu quả các từ hiếm gặp.
- Năm bắt được các quy luật hình thái từ.
- Không phụ thuộc vào ngôn ngữ cụ thể, đặc biệt là khi sử dụng các thuật toán như SentencePiece.
- Giảm độ dài chuỗi so với phương pháp tách từ dựa trên ký tự.

**Nhược điểm**: 
- Phức tạp hơn trong việc triển khai so với phương pháp tách từ dựa trên từ.
- Cần phải huấn luyện trên một tập dữ liệu để xây dựng từ vựng.
- Có thể tạo ra các cách chia từ không trực quan đối với một số từ nhất định.

### Rule-Based Tokenizers
Các bộ tách từ dựa trên quy tắc sử dụng những quy tắc được xác định trước hoặc các biểu thức chính quy để phân tách văn bản. 

**Ưu điểm**: 
- Có khả năng tùy chỉnh cao cho các lĩnh vực hoặc ngôn ngữ cụ thể.
- Mang tính tất định và dễ giải thích.

**Nhược điểm**:
- Đòi hỏi phải xây dựng quy tắc thủ công, vốn tốn nhiều thời gian và dễ phát sinh lỗi.
- Khả năng thích ưng với các tập dữ liệu mới hoặc đa dạng còn hạn chế.

### BPE
### WordPiece
### SentencePiece
### Tokenizer cho tiếng Việt
### Token ảnh hưởng thế nào đến:
    - Chi phí
    - Tốc độ ok
    - Context window
    - Chất lượng câu trả lời