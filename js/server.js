const express = require("express");
const fs = require("fs");
const path = require("path");

const app = express();
const PORT = 3000;

// Cho phép truy cập css, js, ảnh, html
app.use(express.static(__dirname));

// API lấy danh sách ảnh
app.get("/api/images", (req, res) => {

    const imageFolder =
        path.join(__dirname, "Anh");

    try {

        const files = fs.readdirSync(imageFolder)
            .filter(file =>
                /\.(jpg|jpeg|png|webp)$/i.test(file)
            );

        res.json(files);

    } catch (err) {

        console.error(err);
        res.status(500).json({
            error: "Không đọc được thư mục ảnh"
        });

    }

});

app.listen(PORT, () => {

    console.log(
        `Server đang chạy: http://localhost:${PORT}`
    );

});