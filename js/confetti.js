function celebrate(){

    confetti({
        particleCount:150,
        spread:70,
        origin:{y:0.6},
        colors:[
            '#00d4ff',
            '#6effb8',
            '#ffffff'
        ]
    });

    alert(
        "Cảm ơn bạn đã xác nhận! Hẹn gặp bạn tại buổi lễ."
    );
}