document.addEventListener("DOMContentLoaded", function () {
      const yesBtn = document.querySelector(".yes-btn");
      const noBtn = document.querySelector(".no-btn");
      const questionContainer = document.getElementById("questionContainer");
      const resultContainer = document.getElementById("resultContainer");
      const heartsContainer = document.getElementById("heartsContainer");

  // Danh sách các GIF định sẵn
  const gifList = [
    "gif/cry.gif",
    "gif/run.gif",
    "gif/Sad.gif",
    "gif/sadd.gif",
  ];
   let currentGifIndex = 0;

      // Tạo trái tim bay
      function createHearts() {
        for (let i = 0; i < 20; i++) {
          const heart = document.createElement("div");
          heart.classList.add("heart");

          const size = Math.random() * 30 + 15;
          const left = Math.random() * 100;
          const delay = Math.random() * 5;
          const duration = Math.random() * 5 + 8;

          heart.style.width = `${size}px`;
          heart.style.height = `${size}px`;
          heart.style.left = `${left}%`;
          heart.style.animationDelay = `${delay}s`;
          heart.style.animationDuration = `${duration}s`;

          heartsContainer.appendChild(heart);
        }
      }

      createHearts();

      // Xử lý khi nhấn "Yes"
      yesBtn.addEventListener("click", function () {
        questionContainer.style.opacity = "0";
        setTimeout(() => {
          questionContainer.style.display = "none";
          resultContainer.style.display = "flex";
        }, 500);
        createHearts();
      });

      // Xử lý khi nhấn "No"
      noBtn.addEventListener("click", function () {
        // Lấy GIF tiếp theo trong danh sách
        const nextGif = gifList[currentGifIndex];
        currentGifIndex = (currentGifIndex + 1) % gifList.length;
        
        // Xóa GIF hiện tại nếu có
        const existing = document.querySelector(".float-gif");
        if (existing) existing.remove();
        
        // Tạo GIF mới
        const img = document.createElement("img");
        img.src = nextGif;
        img.classList.add("float-gif");
        img.style.opacity = "0";
        img.style.transform = "translate(-50%, -50%) scale(0.5)";
        document.body.appendChild(img);
        
        // Hiệu ứng xuất hiện
        setTimeout(() => {
          img.style.transition = "all 0.5s ease";
          img.style.opacity = "1";
          img.style.transform = "translate(-50%, -50%) scale(1)";
        }, 10);
        
        // Tự động ẩn sau 3 giây
        setTimeout(() => {
          if (img.parentNode) {
            img.style.opacity = "0";
            img.style.transform = "translate(-50%, -50%) scale(0.5)";
            setTimeout(() => {
              if (img.parentNode) img.remove();
            }, 500);
          }
        }, 3000);
      
      // Tạo hiệu ứng nền
      const background = document.querySelector('.background');
      for (let i = 0; i < 30; i++) {
        const bubble = document.createElement('div');
        bubble.style.position = 'absolute';
        bubble.style.width = `${Math.random() * 100 + 20}px`;
        bubble.style.height = bubble.style.width;
        bubble.style.left = `${Math.random() * 100}%`;
        bubble.style.top = `${Math.random() * 100}%`;
        bubble.style.background = `rgba(255, 255, 255, ${Math.random() * 0.3})`;
        bubble.style.borderRadius = '50%';
        bubble.style.animation = `floatBubble ${Math.random() * 20 + 10}s infinite linear`;
        background.appendChild(bubble);
      }
      
      // Thêm keyframe cho bong bóng
      const style = document.createElement('style');
      style.innerHTML = `
        @keyframes floatBubble {
          0% {
            transform: translateY(0) translateX(0) scale(1);
            opacity: 0.1;
          }
          50% {
            transform: translateY(-100px) translateX(50px) scale(1.2);
            opacity: 0.3;
          }
          100% {
            transform: translateY(-200px) translateX(100px) scale(0.8);
            opacity: 0;
          }
        }
      `;
      document.head.appendChild(style);
    });
});
